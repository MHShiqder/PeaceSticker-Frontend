import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function BlogDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found.
      </div>
    );
  }

  const { title, image, body } = state;

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <IoArrowBack /> Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover rounded-xl mb-6"
          />
        )}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
