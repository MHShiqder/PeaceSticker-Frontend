// import { useState } from "react";
// import { ShoppingBag } from "lucide-react";
// import { useLocation,useNavigate } from "react-router-dom";
// import Payment from "@/Component/Payment/Payment";

// export default function Checkout() {
//   const navigate =useNavigate();
//   const location = useLocation();
//   const { selectedQuantity, price } = location.state || {};
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     itemPreference: "button",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Order submitted:", {
//       ...formData,
//       quantity: selectedQuantity,
//       price,
//     });

// navigate("/payment",{state:{price,formData}})
//     // document.getElementById("my_modal_1").showModal();
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const quantityLabels = {
//     one: "One Kit",
//     five: "Five Kits",
//     ten: "Ten Kits",
//   };

//   return (
//     <div>
//       <div className="text-center mb-12">
//         <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-4">
//           <ShoppingBag className="w-8 h-8 text-white" />
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
//         <p className="text-lg text-gray-600">Complete your order</p>
//       </div>

//       <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 playfair-display flex justify-center">
//         <div className="max-w-3xl">
//           <div className="bg-gray-50 rounded-lg p-6 mb-8">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">
//               Order Summary
//             </h2>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-700">
//                 {quantityLabels[selectedQuantity]}
//               </span>
//               <span className="text-gray-900 font-semibold">${price}</span>
//             </div>
//             <div className="border-t border-gray-300 mt-4 pt-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-900">Total</span>
//                 <span className="text-2xl font-bold text-gray-900">
//                   ${price}
//                 </span>
//               </div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-semibold text-gray-900 mb-2"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-semibold text-gray-900 mb-2"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="address"
//                 className="block text-sm font-semibold text-gray-900 mb-2"
//               >
//                 Street Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 required
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
//               />
//             </div>

//             <div className="grid grid-cols-3 gap-4">
//               <div className="col-span-1">
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-semibold text-gray-900 mb-2"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   required
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
//                 />
//               </div>
//               <div className="col-span-1">
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-semibold text-gray-900 mb-2"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   id="state"
//                   name="state"
//                   required
//                   maxLength={2}
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition uppercase"
//                 />
//               </div>
//               <div className="col-span-1">
//                 <label
//                   htmlFor="zip"
//                   className="block text-sm font-semibold text-gray-900 mb-2"
//                 >
//                   ZIP Code
//                 </label>
//                 <input
//                   type="text"
//                   id="zip"
//                   name="zip"
//                   required
//                   maxLength={5}
//                   value={formData.zip}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
//                 />
//               </div>
//             </div>

            

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md transition duration-200 text-lg"
//             >
//               Complete Order
//             </button>

//             <p className="text-center text-sm text-gray-500 mt-4">
//               Your order will be processed and shipped to the address provided
//               above.
//             </p>
//           </form>
//         </div>
//         <div>
          
//         </div>
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Payment from "@/Component/Payment/Payment";

export default function Checkout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedQuantity, price } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    itemPreference: "button",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      ...formData,
      quantity: selectedQuantity,
      price,
    });
    navigate("/payment", { state: { price, formData } });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const quantityLabels = {
    one: t("checkout.oneKit"),
    five: t("checkout.fiveKits"),
    ten: t("checkout.tenKits"),
  };

  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-4">
          <ShoppingBag className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("checkout.title")}</h1>
        <p className="text-lg text-gray-600">{t("checkout.subtitle")}</p>
      </div>

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 playfair-display flex justify-center">
        <div className="max-w-3xl">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t("checkout.orderSummary")}</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">{quantityLabels[selectedQuantity]}</span>
              <span className="text-gray-900 font-semibold">${price}</span>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">{t("checkout.total")}</span>
                <span className="text-2xl font-bold text-gray-900">${price}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("checkout.fullName")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("checkout.emailAddress")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                {t("checkout.streetAddress")}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("checkout.city")}
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("checkout.state")}
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  maxLength={2}
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition uppercase"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="zip" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("checkout.zipCode")}
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  maxLength={5}
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md transition duration-200 text-lg"
            >
              {t("checkout.completeOrder")}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">{t("checkout.footerText")}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
