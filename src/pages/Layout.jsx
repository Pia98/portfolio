import NavBar from '../components/NavBar';
import Footer from '../sections/Footer';
import { Outlet } from "react-router-dom";
import { ScrollToElementById } from '../constants/functions'; //workaround to scroll to a specific element with router

const Layout = () => {
    return (
        <>
            <ScrollToElementById/>
            <NavBar />
            <Outlet />
            <Footer/>
        </>
    );
}

export default Layout;