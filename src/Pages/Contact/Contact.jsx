import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-48px)] flex flex-col items-center justify-center text-primary font-serif px-4 playfair-display">
      <h1 className="text-3xl mb-6 font-bold">{t("contact.title")}</h1>

      <p className="text-lg font-semibold text-center w-full md:w-1/2 leading-relaxed mb-10">
        {t("contact.subtitle")}
      </p>

      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-8 text-black text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">{t("contact.organizationName")}</h2>
        <p className="mb-2">{t("contact.addressLine1")}</p>
        <p className="mb-2">{t("contact.addressLine2")}</p>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <p className="mb-1">
            <span className="font-semibold">{t("contact.emailLabel")}:</span>{" "}
            <a
              href="mailto:contact@dare2declare.org"
              className="text-primary text-xl font-bold hover:underline"
            >
              {t("contact.emailValue")}
            </a>
          </p>
          <p>
            <span className="font-semibold">{t("contact.phoneLabel")}:</span>{" "}
            <a
              href="tel:+11234567890"
              className="text-primary hover:underline font-bold text-xl"
            >
              +1 (123) 456-7890
            </a>
          </p>
        </div>
      </div>

      <footer className="mt-12 text-black text-sm text-center">
        <p>{t("contact.footerText")}</p>
      </footer>
    </div>
  );
}
