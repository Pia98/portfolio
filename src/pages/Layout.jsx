import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const { hash } = useLocation(); //returns current location

  //workaround to scroll to a specific element with router
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace("#", "")); //resolve id of section to scroll to
      if (target) {
        const offset = window.innerHeight * 0.05;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
