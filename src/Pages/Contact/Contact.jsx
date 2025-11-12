import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate backend submission here (e.g., fetch/axios)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_Stripe_Backend_Api}/contact`,
        formData
      );

      if (response.data.success) {
        alert("✅ Your message has been sent successfully!");
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending contact message:", error);
      alert(
        "❌ Failed to send message. Please check your connection or try again later."
      );
    }
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="min-h-[calc(100vh-48px)] flex flex-col items-center justify-center text-primary font-serif px-4 playfair-display">
      <h1 className="text-3xl mb-6 font-bold">{t("contact.title")}</h1>

      <p className="text-lg font-semibold text-center w-full md:w-1/2 leading-relaxed mb-10">
        {t("contact.subtitle")}
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 rounded-2xl shadow-lg p-8 text-black w-full max-w-md"
      >
        <div className="mb-5">
          <label htmlFor="email" className="block text-left font-semibold mb-2">
            {t("contact.emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block text-left font-semibold mb-2"
          >
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition cursor-pointer"
        >
          {t("contact.submitButton")}
        </button>
      </form>

      <footer className="mt-12 text-black text-sm text-center">
        <p>{t("contact.footerText")}</p>
      </footer>
    </div>
  );
}
