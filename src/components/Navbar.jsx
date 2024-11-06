import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Cart, Wishlist } from "../layouts/MianLayout";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
// import { IoHeartOutline } from "react-icons/io5";


const Navbar = () => {
    const [cart, setCart] = useContext(Cart);
    const [wishlist, setWishlist] = useContext(Wishlist);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className={`container mx-auto z-20 mt-5 ${isHomePage ? 'bg-transparent z-50 absolute  ' : 'bg-white'}`}>
            <div className={`navbar container w-[80%] mx-auto  `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? ' text-[#9538E2]' : ' text-[#0B0B0BB3]'
                            }>Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? ' text-[#9538E2]' : ' text-[#0B0B0BB3]'
                            } to='/statistics'>Statistics</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? ' text-[#9538E2]' : ' text-[#0B0B0BB3]'
                            } to='/dashboard'>Dashboard</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? ' text-[#9538E2]' : ' text-[#0B0B0BB3]'
                            } to='/extra'>Best in Stock</NavLink>

                        </ul>
                    </div>
                    <h2 className={`text-xl font-bold text-[#0B0B0B] ${isHomePage ? 'text-white  ' : 'text-[#0B0B0B] '}`}>Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#0B0B0BB3] text-base font-medium">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'mr-3 text-white shadow-md' : 'mr-3 text-[#0B0B0BB3]'
                        } to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/dashboard'>Dashboard</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/extra'>Best in Stock</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className={`flex items-center bg-white px-1.5 py-2 rounded-full text-base mr-2 ${isHomePage ? ' border-none' : 'border'}`}><AiOutlineShoppingCart /><sup className="text-xs">{cart}</sup></NavLink>
                    <NavLink className={`flex items-center bg-white px-1.5 py-2 rounded-full text-base mr-2 ${isHomePage ? ' border-none' : 'border'}`}><IoHeartOutline /><sup className="text-xs">{wishlist}</sup></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;