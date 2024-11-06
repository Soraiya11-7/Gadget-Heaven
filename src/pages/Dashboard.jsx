import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { getAllCarts, getAllWishList, removeCart, removeWishCards } from "../utilities";
import Carts from "../components/Carts";
// import Wishlist from "../components/WishlistAllCards";
import { Cart, Wishlist } from "../layouts/MianLayout";
import WishlistAllCards from "../components/WishlistAllCards";
import { useNavigate } from "react-router-dom";


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
        <div className="container w-[80%] mx-auto my-10 text-center">
            <h2>Dashboard</h2>

            <div className="flex justify-center items-center gap-3 my-7">
                <div>
                    <button onClick={() => handleShowCards('Carts')} className="btn btn-outline">Cart</button>
                </div>
                <div>
                    <button onClick={() => handleShowCards('WishLists')} className="btn btn-success">Wishlist</button>
                </div>
            </div>

            <div>
                {/* Cart area.... */}
                {
                    isActive && (<div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h2>Carts</h2>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><button onClick={() => handleSortByCost('price')} className="btn">Sort By Costing Des</button></div>
                                <div><button className="btn">Total Cost :{cost}</button></div>
                                <div><button onClick={removeAllData} className="btn">purchase</button></div>
                            </div>
                        </div>


                        <div>
                            {
                                modal && (<div>
                                    
                                    <dialog open id="detailsModal" className="modal text mx-0 px-0">
                                        <div className="modal-box">
                                            <div id="modal-content" className="mb-3">
                                                <h2>Successful</h2>
                                                <h3>cost {tcost}</h3>
                                            </div>
                                            <div className="modal-action w-full py-3 bg-[#0E7A811A] border border-[#0E7A8133] rounded-lg flex justify-center">
                                                <form method="dialog">
                                                    <button onClick={handleModal} className="w-full text-[#0E7A81] text-base md:text-lg font-bold">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>)
                            }

                        </div>
                        {/* Show Carts..... */}
                        <div>
                            <div className="border border-red-600">
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
                        <h2 className="text-left">Wishlist...</h2>

                        <div>
                            <div className="border border-red-600">
                                {
                                    wishCard.map((card, i) => <WishlistAllCards key={i} card={card} handleRemoveFromWishList={handleRemoveFromWishList}></WishlistAllCards>)
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Dashboard;