import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { getAllCarts, getAllWishList, removeCart, removeWishCards } from "../utilities";
import Carts from "../components/Carts";
// import Wishlist from "../components/WishlistAllCards";
import { Cart, Wishlist } from "../layouts/MianLayout";
import WishlistAllCards from "../components/WishlistAllCards";
import { useNavigate } from "react-router-dom";
// import { GiMoebiusStar } from "react-icons/gi";
import { GiMoebiusStar } from "@react-icons/all-files/gi/GiMoebiusStar";

const Dashboard = () => {

    const [cart, setCart] = useContext(Cart);
    const [wishlist, setWishlist] = useContext(Wishlist);

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const [carts, setCarts] = useState([]);
    const [wishCard, setWishCard] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [cost, setCost] = useState(0);
    const [tcost, setTCost] = useState(0);


    const handleShowCards = (value) => {
        if (value === 'Carts') {
            setIsActive(true);
        }
        else if (value === 'WishLists') {
            setIsActive(false);
        }
    };


    const removeAllData = () => {
        const allCarts = getAllCarts();
        const totalCost = allCarts.reduce((acc, cart) => acc + cart.price, 0);
        setTCost(totalCost);
        localStorage.removeItem('Carts');
        setCarts([]);
        setCost(0);
        setCart(0);

        setModal(true);
    }

    useEffect(() => {
        const allCarts = getAllCarts();
        setCarts(allCarts);
        const totalCost = allCarts.reduce((acc, cart) => acc + cart.price, 0);
        setCost(totalCost);
        const allWishCard = getAllWishList();
        setWishCard(allWishCard);
    }, [])

    const handleModal = () => {
        setModal(false);
        navigate('/');  // Navigate to home page after closing modal
    };
    const handleRemove = (id, price) => {
        console.log(price, cost);
        removeCart(id);
        const allCarts = getAllCarts();
        setCarts(allCarts);
        // const totalCost = allCarts.reduce((acc, cart) => cart - cart.price, 0);
        setCost(cost - price);
        setCart(allCarts.length)
    }

    const handleRemoveFromWishList = id => {
        removeWishCards(id);
        const allWishCard = getAllWishList();
        setWishCard(allWishCard);
        setWishlist(allWishCard.length)

    }

    const handleSortByCost = (sortBy) => {
        const sorted = [...carts].sort((a, b) => b.price - a.price)
        setCarts(sorted);
    }


    return (
        <div className="">
            <div className="container text-center">
                <div className="container mx-auto bg-[#9538E2] w-full h-[300px] mb-12">
                    <div className="container w-[80%] mx-auto pt-8 text-center ">
                        <h2 className="text-white font-bold text-3xl mb-4">Dashboard</h2>
                        <p className="text-base font-normal w-[55%] text-center mx-auto text-white mb-8">Explore top gadgets on the dashboard, from innovative smart devices to must-have accessories, all designed to elevate your experience!</p>

                        <div className="flex justify-center items-center gap-3 my-7">
                            <div>
                                <button onClick={() => handleShowCards('Carts')} className={
                                    `py-4 px-14 rounded-[32px] ${isActive ? ' text-[#9538E2] text-lg font-extrabold bg-white' : 'text-white border border-white font-medium'}`
                                } >Cart</button>
                            </div>
                            <div>
                                <button onClick={() => handleShowCards('WishLists')} className={
                                    `py-4 px-14 rounded-[32px] ${!isActive ? ' text-[#9538E2] text-lg font-extrabold bg-white' : 'text-white border border-white font-medium'}`
                                }>Wishlist</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="container w-[80%] mx-auto mb-10">
                    {/* Cart area.... */}
                    {
                        isActive && (<div>
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <h2 className="text-[#0B0B0B] text-2xl font-bold">Cart</h2>
                                </div>
                                <div className="flex justify-between items-center gap-3">
                                <div><button className="text-[#0B0B0B] text-2xl font-bold">Total cost : {cost}</button></div>
                                    <div><button onClick={() => handleSortByCost('price')} className="text-[#9538E2] rounded-[32px] py-3 px-5 text-lg font-semibold border border-[#9538E2]">Sort by Price</button></div>
                                    
                                    <div><button onClick={removeAllData} className="text-white rounded-[32px] py-3 px-6 text-lg font-medium  bg-[#9538E2] shadow-lg">Purchase</button></div>
                                </div>
                            </div>


                            <div>
                                {
                                    modal && (<div>

                                        <dialog open id="detailsModal" className="modal text mx-0 px-0 w-[25%] mx-auto ">
                                            <div className="modal-box">
                                                <div id="modal-content" className="mb-3">
                                                   <div className="flex justify-center items-center mb-7"> <h2 className=" text-[#3EB655]"><GiMoebiusStar className=" text-center text-7xl "/></h2></div>
                                                    <h2 className="text-2xl text-[#09080F] font-bold mb-3">Payment Successfully</h2>
                                                    <hr />
                                                    <h3 className="mt-3 text-base text-[#09080F99] font-medium mb-4">Thanks for purchasing.</h3>
                                                    <h3 className="mt-3 text-base text-[#09080F99] font-medium mb-4">Total: {tcost}</h3>
                                                </div>
                                                <div className="modal-action w-full py-2 px-5 bg-[#11000008] rounded-[32px] flex justify-center shadow-md">
                                                    <form method="dialog">
                                                        <button onClick={handleModal} className="w-full text-[#09080F] text-base md:text-base font-bold">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>)
                                }

                            </div>
                            {/* Show Carts..... */}
                            <div>
                                <div className="">
                                    {
                                        carts.map((card, i) => <Carts key={i} card={card} handleRemove={handleRemove}></Carts>)
                                    }
                                </div>

                            </div>
                        </div>

                            // Modal...................



                        )


                    }
                    {/* Wishlist Area... */}
                    {
                        !isActive && (<div>
                            <h2 className="text-[#0B0B0B] text-2xl font-bold mb-2 text-left">WishList</h2>

                            <div>
                                <div className="">
                                    {
                                        wishCard.map((card, i) => <WishlistAllCards key={i} card={card} handleRemoveFromWishList={handleRemoveFromWishList}></WishlistAllCards>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Dashboard;