// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // <-- import useNavigate
// import kitImage from "../../assets/daretodeclare.png";

// export default function Kit() {
//   const [selectedKit, setSelectedKit] = useState("one");
//   const navigate = useNavigate(); // <-- initialize navigate

//   // Prices for each quantity
//   const prices = {
//     one: 9.95,
//     five: 27.95,
//     ten: 49.95,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const selectedQuantity = selectedKit;
//     const price = prices[selectedKit];

//     // Navigate to checkout with state
//     navigate("/checkout", {
//       state: { selectedQuantity, price },
//     });
//   };

//   return (
//     <div className="p-8 flex flex-col md:flex-row justify-start items-center gap-12 playfair-display font-bold mt-16 text-xl">
//       {/* Left: Images */}
//       <div className="w-[800px]">
//         <img src={kitImage} alt="DARE TO DECLARE!" className="h-auto" />
//       </div>

//       {/* Right: Form and Info */}
//       <div className="max-w-md">
        

//         <form onSubmit={handleSubmit}>
//           <p className="mb-2 font-semibold">Please select number of kits:</p>
//           <div className="flex flex-col gap-2 mb-4">
//             <label>
//               <input
//                 type="radio"
//                 name="kits"
//                 value="one"
//                 checked={selectedKit === "one"}
//                 onChange={() => setSelectedKit("one")}
//                 className="mr-2"
//               />
//               One: $9.95
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="kits"
//                 value="five"
//                 checked={selectedKit === "five"}
//                 onChange={() => setSelectedKit("five")}
//                 className="mr-2"
//               />
//               Five: $27.95
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="kits"
//                 value="ten"
//                 checked={selectedKit === "ten"}
//                 onChange={() => setSelectedKit("ten")}
//                 className="mr-2"
//               />
//               Ten: $49.95
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>



//         <h2 className="text-xl font-black mb-4 mt-12">
//           To receive a free button or bumper sticker,
//         </h2>
//         <p className="mb-2">Send a self-addressed stamped envelope to:</p>
//         <address className="mb-4 not-italic">
//           DECLARE<br />
//           P.O. Box 143<br />
//           Belmont, NC 28012
//         </address>
//         <p className="mb-6">
//           Please indicate on the envelope if you wish to receive a button OR bumper sticker.
//         </p>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kitImage from "../../assets/daretodeclare.webp";
import { useTranslation } from "react-i18next";

export default function Kit() {
  const { t } = useTranslation();
  const [selectedKit, setSelectedKit] = useState("one");
  const navigate = useNavigate();

  const prices = {
    one: 9.95,
    five: 27.95,
    ten: 49.95,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout", {
      state: { selectedQuantity: selectedKit, price: prices[selectedKit] },
    });
  };

  return (
    <div className="p-8 flex flex-col md:flex-row justify-start items-center gap-12 playfair-display font-bold mt-16 text-xl">
      {/* Left: Images */}
      <div className="w-[800px]">
        <img src={kitImage} alt={t("kit.imageAlt")} className="h-auto" />
      </div>

      {/* Right: Form and Info */}
      <div className="max-w-md">
        <form onSubmit={handleSubmit}>
          <p className="mb-2 font-semibold">{t("kit.selectKits")}</p>
          <div className="flex flex-col gap-2 mb-4">
            <label>
              <input
                type="radio"
                name="kits"
                value="one"
                checked={selectedKit === "one"}
                onChange={() => setSelectedKit("one")}
                className="mr-2"
              />
              {t("kit.one")} : $9.95
            </label>
            <label>
              <input
                type="radio"
                name="kits"
                value="five"
                checked={selectedKit === "five"}
                onChange={() => setSelectedKit("five")}
                className="mr-2"
              />
              {t("kit.five")} : $27.95
            </label>
            <label>
              <input
                type="radio"
                name="kits"
                value="ten"
                checked={selectedKit === "ten"}
                onChange={() => setSelectedKit("ten")}
                className="mr-2"
              />
              {t("kit.ten")} : $49.95
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {t("kit.submit")}
          </button>
        </form>

        <h2 className="text-xl font-black mb-4 mt-12">{t("kit.freeItemTitle")}</h2>
        <p className="mb-2">{t("kit.sendEnvelope")}</p>
        <address className="mb-4 not-italic">
          {t("kit.address.line1")}
          <br />
          {t("kit.address.line2")}
          <br />
          {t("kit.address.line3")}
        </address>
        <p className="mb-6">{t("kit.indicateItem")}</p>
      </div>
    </div>
  );
}
