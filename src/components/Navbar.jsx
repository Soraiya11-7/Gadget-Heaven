
const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 container w-[80%] mx-auto border border-red-500 ">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Navbar to='/'>Home</Navbar>
                            <Navbar to='/statistics'>Statistics</Navbar>
                            <Navbar to='/dashboard'>Dashboard</Navbar>
                            <Navbar to='/extra'>Extra</Navbar>

                        </ul>
                    </div>
                    <h2 className="text-xl font-bold text-[#0B0B0B]">Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Navbar to='/'>Home</Navbar>
                        <Navbar to='/statistics'>Statistics</Navbar>
                        <Navbar to='/dashboard'>Dashboard</Navbar>
                        <Navbar to='/extra'>Extra</Navbar>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;