import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

export const Cart = createContext(0);
export const Wishlist = createContext(0);
const MianLayout = () => {
    const [cart, setCart] = useState(0);
    const [wishlist, setWishlist] = useState(0);
    return (
      <Cart.Provider value={[cart, setCart]}>
        <Wishlist.Provider value={[wishlist, setWishlist]}>
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
        </Wishlist.Provider>
      </Cart.Provider>
    );
};

export default MianLayout;