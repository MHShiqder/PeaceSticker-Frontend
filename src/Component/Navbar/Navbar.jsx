import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react"; // hamburger icon

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="mx-auto md:w-10/12 md:h-12 flex flex-col md:flex-row items-center justify-between bg-white md:bg-transparent py-3 gap-2 relative">
      {/* ---------- Desktop / Tablet View ---------- */}
      <div className="hidden md:flex items-center justify-between w-full">
        <ul className="flex gap-2">
          <li className="font-bold">
            <NavLink to="/">{t("navbar.home")}</NavLink>
          </li>
          <li className="font-bold">|</li>
          <li className="font-bold">
            <NavLink to="/about">{t("navbar.about")}</NavLink>
          </li>
          <li className="font-bold">|</li>
          <li className="font-bold">
            <NavLink to="/kit">{t("navbar.swag")}</NavLink>
          </li>
          <li className="font-bold">|</li>
          <li className="font-bold">
            <NavLink to="/contact">{t("navbar.contact")}</NavLink>
          </li>
        </ul>

        {/* Language selector stays visible on desktop */}
        <select
          className="px-4 py-1 border border-gray-300 cursor-pointer bg-white font-bold rounded-md shadow-sm"
          onChange={changeLanguage}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ru">Русский</option>
          <option value="zh">中文</option>
        </select>
      </div>

      {/* ---------- Mobile View ---------- */}
      <div className="flex items-center justify-between w-full md:hidden px-4">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md border border-gray-300"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Language Selector */}
        <select
          className="px-4 py-1 border border-gray-300 cursor-pointer bg-white font-bold rounded-md shadow-sm"
          onChange={changeLanguage}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ru">Русский</option>
          <option value="zh">中文</option>
        </select>
      </div>

      {/* ---------- Mobile Dropdown Menu ---------- */}
      {menuOpen && (
        <ul className="absolute top-14 left-4 bg-white shadow-md rounded-lg p-3 flex flex-col gap-2 border border-gray-200 md:hidden z-50 w-40">
          <li className="font-bold">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              {t("navbar.home")}
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {t("navbar.about")}
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/kit" onClick={() => setMenuOpen(false)}>
              {t("navbar.swag")}
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
