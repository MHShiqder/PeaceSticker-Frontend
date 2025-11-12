// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";

// export default function BlogList() {
//   const { t } = useTranslation();
//   const [posts, setPosts] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [drawerOpen, setDrawerOpen] = useState(false); // only for mobile
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_Stripe_Backend_Api}/blogs`);
//         setPosts(response.data.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     if (sidebarRef.current) {
//       const activeItem = sidebarRef.current.querySelector(`[data-index='${selectedIndex}']`);
//       if (activeItem) activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
//     }
//   }, [selectedIndex]);

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     setDrawerOpen(false); // close drawer after selecting on mobile
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[calc(100vh-48px)] flex items-center justify-center">
//         <p className="text-gray-500">{t("blog.loading")}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-[calc(100vh-48px)] flex flex-col md:flex-row bg-gray-50">
//       {/* Mobile drawer toggle */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
//         <h2 className="text-xl font-bold">{t("blog.sidebarTitle")}</h2>
//         <button onClick={() => setDrawerOpen(true)}>
//           <HiMenu size={28} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`
//           md:relative md:w-1/4 md:h-[calc(100vh-48px)] md:shadow-lg md:overflow-y-auto
//           fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg overflow-y-auto
//           transform transition-transform duration-300
//           ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         {/* Close button on mobile */}
//         <div className="flex justify-between items-center p-4 border-b md:hidden">
//           <h2 className="text-xl font-bold">{t("blog.sidebarTitle")}</h2>
//           <button onClick={() => setDrawerOpen(false)}>
//             <IoClose size={28} />
//           </button>
//         </div>

//         <ul className="p-6 mt-2 md:mt-0">
//           {posts.map((post, index) => {
//             const isActive = selectedIndex === index;
//             return (
//               <li
//                 key={index}
//                 data-index={index}
//                 onClick={() => handleSelect(index)}
//                 className={`cursor-pointer mb-3 p-2 rounded-r-lg border-l-4 transition ${
//                   isActive
//                     ? "border-blue-500 font-semibold bg-gray-100"
//                     : "border-transparent hover:bg-gray-100"
//                 }`}
//               >
//                 {post.title}
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Overlay for drawer */}
//       {drawerOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden" onClick={() => setDrawerOpen(false)} />}

//       {/* Main content */}
//       <div className="flex-1 p-10 overflow-y-auto h-[calc(100vh-48px)]">
//         {posts[selectedIndex] ? (
//           <div className="bg-white shadow-lg rounded-2xl p-6">
//             {posts[selectedIndex].image && (
//               <img
//                 src={posts[selectedIndex].image}
//                 alt={posts[selectedIndex].title}
//                 className="rounded-xl mb-6 w-full h-72 object-cover"
//               />
//             )}
//             <h1 className="text-3xl font-bold mb-4">{posts[selectedIndex].title}</h1>
//             <p className="text-gray-700">{posts[selectedIndex].body}</p>
//           </div>
//         ) : (
//           <p className="text-gray-500">{t("blog.selectMessage")}</p>
//         )}
//       </div>
//     </div>
//   );
// }

















import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BlogList() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_Stripe_Backend_Api}/blogs`);
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleCardClick = (post) => {
    navigate(`/blog/${post._id}`, { state: post });
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-48px)] flex items-center justify-center">
        <p className="text-gray-500">{t("blog.loading")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-48px)] bg-gray-50 px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("blog.sidebarTitle")}</h1>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            onClick={() => handleCardClick(post)}
            className="bg-white rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3 flex-grow">{post.body}</p>
              <button className="mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                {t("blog.readMore")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
