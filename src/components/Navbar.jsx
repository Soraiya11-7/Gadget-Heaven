import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Cart, Wishlist } from "../layouts/MianLayout";


const Navbar = () => {
    const [cart, setCart] = useContext(Cart);
    const [wishlist, setWishlist] = useContext(Wishlist);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className={`container mx-auto z-20 ${isHomePage ? 'bg-transparent z-50 absolute  ' : 'bg-white'}`}>
            <div className={`navbar container w-[80%] mx-auto border border-red-500  `}>
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
                            } to='/extra'>Extra</NavLink>

                        </ul>
                    </div>
                    <h2 className={`text-xl font-bold text-[#0B0B0B] ${isHomePage ? 'text-white  ' : 'text-[#0B0B0B] '}`}>Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#0B0B0BB3] text-base font-medium">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'mr-3 text-white' : 'mr-3 text-[#0B0B0BB3]'
                        } to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/dashboard'>Dashboard</NavLink>
                        <NavLink className={({ isActive }) =>
                            `${isActive ? 'mr-3 text-[#9538E2]' : 'mr-3 text-[#0B0B0BB3]'} ${isHomePage ? 'text-white' : 'text-[#0B0B0BB3]'}`
                        } to='/extra'>Extra</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='/dashboard' className="btn">{cart > 0 ? `Cart - ${cart}` : 'Cart'}</NavLink>
                    <Link className="btn">{wishlist > 0 ? `wishlist - ${wishlist}` : 'wishlist'}</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;