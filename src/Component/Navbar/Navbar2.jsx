// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar2() {
//   const links = (
//     <>
//       <li className="font-bold"><NavLink>Home</NavLink></li>
//       <li className="font-bold"><NavLink>What's This About?</NavLink></li>
//       <li className="font-bold"><NavLink>Swag </NavLink></li>
//     </>
//   );
//   return (
//     <div className=" bg-base-100 shadow-sm">
//       <div className="navbar lg:w-10/12 lg:mx-auto lg:px-0">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">Dare2Declare</a>
//         </div>

//         {/* Home |
// What's This About? |
// Kit */}

//         {/* large screen menu  */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn"></a>
//         </div>
//       </div>
//     </div>
//   );
// }
