import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
// import Navbar2 from "../Component/Navbar/Navbar2";

export default function Root() {
  return (
    <div className="">
      <Navbar/>
      {/* <Navbar2/> */}
      <div className="w-10/12 mx-auto">
        
      <Outlet />
      </div>
    </div>
  );
}
