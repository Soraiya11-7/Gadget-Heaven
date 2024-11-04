import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MianLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-578px)]">
                <Outlet />
            </div>
            
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MianLayout;