import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../../../styles/CrashCourse.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
