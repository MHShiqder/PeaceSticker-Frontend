import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-lg mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
