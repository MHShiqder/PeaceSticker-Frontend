import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ clientSecret, price, formData }) => {
  // console.log(clientSecret,"client Secret")
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent,"payment intent from  backend")
      if (!paymentIntent) {
        setMessage("Unable to retrieve payment intent.");
        return;
      }

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        // Wait for Axios to succeed first
        await axios.post(
          `${import.meta.env.VITE_Stripe_Backend_Api}/orders`,
          { price, formData }
        );
        console.log("Data sent successfully");

        // Fire Swal after successful Axios call
        Swal.fire({
          title: "Success!",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          // Navigate after Swal closes
          navigate("/");
        });
      } catch (err) {
        console.error("Error sending data:", err);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while saving your payment.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="">
      <PaymentElement id="payment-element" />

      <Button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        className="w-full mt-4 bg-blue-900"
      >
        <span id="button-text">
          {isProcessing ? <Loader2 className="animate-spin" /> : "Pay now"}
        </span>
      </Button>
      {/* {message && <div id="payment-message">{message}</div>} */}
    </form>
  );
};

export default CheckoutForm;
