import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useEffect, useState } from "react";
import { getAllCarts, getAllWishList } from "../utilities";

const allCart = getAllCarts();
const allWishData = getAllWishList();
// console.log(allCart.length);
export const Cart = createContext(allCart.length);
export const Wishlist = createContext(allWishData.length);
const MianLayout = () => {

  const location = useLocation();

  useEffect(() => {
    // Update the website title based on the current path
    switch (location.pathname) {
      case '/':
        document.title = 'Gadget Heaven';
        break;
      case '/extra':
        document.title = 'Best in Stock | Gadget Heaven';
        break;
      case '/dashboard':
        document.title = 'Dashboard | Gadget Heaven';
        break;
      case '/statistics':
        document.title = 'Statistics | Gadget Heaven';
        break;
      default:
        document.title = 'Gadget Heaven';
    }
  }, [location]);


  const [cart, setCart] = useState(allCart.length);
  const [wishlist, setWishlist] = useState(allWishData.length);
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