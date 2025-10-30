import { useState } from "react";

import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  // const [count, setCount] = useState(0);


  const { t } = useTranslation();
  // Fetch the string
  const text = t("home");
  // Split by period
  const sentences = text.split(".").filter(s => s.trim() !== ""); // remove empty strings
  return (
    <>
      <div className="h-[calc(100vh-48px)]  overflow-hidden image-class relative flex justify-center">

  <p className="font-bold text-4xl playfair-display text-[#0000ff] teleprompter ">
    {sentences.map((sentence, index) => (
       <> <p key={index}>{sentence.trim()}.</p> <br /></>
      ))}
  </p>
</div>

    </>
  );
}

export default App;
