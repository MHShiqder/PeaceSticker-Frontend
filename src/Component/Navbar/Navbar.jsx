// import React from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (event) => {
//     const lang = event.target.value;
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang);
//   };

//   return (
//     <div className=" mx-auto w-10/12  h-12  flex items-center justify-between">
//       <ul className="flex gap-2 ">
//         <li className="font-bold">
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li className="font-bold">|</li>
//         <li className="font-bold">
//           <NavLink to="/about">What's This About?</NavLink>
//         </li>
//         <li className="font-bold">|</li>
//         <li className="font-bold">
//           <NavLink to="/kit">Swag </NavLink>
//         </li>
//       </ul>

//       <div>
//         <select
//           name=""
//           id=""
//           className="px-4 py-1  border border-gray-300 cursor-pointer bg-white font-bold"
//           onChange={changeLanguage}
//           value={i18n.language}
//         >
//           <option value="en">English</option>
//           <option value="bn">Bangla</option>
//         </select>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="mx-auto w-10/12 h-12 flex items-center justify-between">
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
      </ul>

      <div>
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
    </div>
  );
}
