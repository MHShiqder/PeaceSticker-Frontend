import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function BlogUpload() {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    console.log(file)
    formData.append("upload_preset", `${import.meta.env.VITE_PresetName}`);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_MyCloudName}/image/upload`,
        formData
      );
      setImage(res.data.secure_url);
      alert(t("blogUpload.imageSuccess"));
    } catch (err) {
      console.error("Image upload failed:", err);
      alert(t("blogUpload.imageFail"));
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body || !image) return alert(t("blogUpload.missingFields"));

    try {
      await axios.post(`${import.meta.env.VITE_Stripe_Backend_Api}/blogs`, {
        title,
        body,
        image,
      });
      alert(t("blogUpload.postSuccess"));
      setTitle("");
      setBody("");
      setImage(null);
    } catch (error) {
      console.error("Post upload failed:", error);
      alert(t("blogUpload.postFail"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {t("blogUpload.heading")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("blogUpload.uploadPhoto")}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            {uploading && (
              <p className="text-sm text-blue-600 mt-2">{t("blogUpload.uploading")}</p>
            )}
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-3 rounded-xl w-full h-56 object-cover"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("blogUpload.blogTitle")}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("blogUpload.titlePlaceholder")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("blogUpload.blogBody")}
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              placeholder={t("blogUpload.bodyPlaceholder")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {uploading ? t("blogUpload.wait") : t("blogUpload.publish")}
          </button>
        </form>
      </div>
    </div>
  );
}
