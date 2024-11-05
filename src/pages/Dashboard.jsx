import {  useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { getAllCarts, getAllWishList, removeCart, removeWishCards } from "../utilities";
import Carts from "../components/Carts";
// import Wishlist from "../components/WishlistAllCards";
import { Cart, Wishlist} from "../layouts/MianLayout";
import WishlistAllCards from "../components/WishlistAllCards";


const Dashboard = () => {
    // const notify = (product_title) => toast.success(`"${product_title}"  Item successfully added to the cart!`);

    const [cart, setCart] = useContext(Cart);
    const [wishlist, setWishlist] = useContext(Wishlist);
    // console.log(cart);

    // const data = useLoaderData();
    // const { id } = useParams();  // id is a string
    // const [card, setCard] = useState({});  //single card(object)

    // const [IsWish, setIsWish] = useState(false);

    // const handleCart = (card) => {
    //    addCart(card);
    //    setCart(cart + 1); 
    //    notify(product_title) ; 

    // }

    // useEffect(() => {
    //     const singleCard = data.find((card) => card.product_id == id) 
    //     setCard(singleCard);
    // }, [data, id]);

    const [carts, setCarts] = useState([]);
    const [wishCard, setWishCard] = useState([]);
    const [isActive, setIsActive] = useState(true);

 
    const handleShowCards = (value) => {
        if (value === 'Carts') {
            setIsActive(true);
        }
        else if (value === 'WishLists') {
            setIsActive(false);
        }
    };
    useEffect(() => {
        const allCarts = getAllCarts();
        setCarts(allCarts);
        const allWishCard = getAllWishList();
        setWishCard(allWishCard);
    }, [])

    const handleRemove = id =>{
        removeCart(id);
        const allCarts = getAllCarts();
        setCarts(allCarts);
        setCart(allCarts.length)

    }

    const handleRemoveFromWishList = id =>{
        removeWishCards(id);
        const allWishCard = getAllWishList();
        setWishCard(allWishCard);
        setWishlist(allWishCard.length)

    }



    const handleSortByCost = (sortBy) =>{
        
        const sorted = [...carts].sort((a,b) => b.price - a.price)
        setCarts(sorted);
    }

    // useEffect(() => {
    //     const allWishCard = getAllWishList();
    //     setWishCard(allWishCard);
    // }, [])

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
                                <div><button onClick={() =>handleSortByCost('price')} className="btn">Sort By Costing Des</button></div>
                                <div><button className="btn">Total Cart</button></div>
                                <div><button className="btn">purchase</button></div>
                            </div>
                        </div>

                        {/* Show Carts..... */}
                        <div>
                            <div className="border border-red-600">
                                {
                                    carts.map((card,i) => <Carts key={i} card={card} handleRemove={handleRemove}></Carts>)
                                }
                            </div>

                        </div>
                    </div>)
                }
                {/* Wishlist Area... */}
                {
                    !isActive && (<div>
                        <h2 className="text-left">Wishlist...</h2>

                        <div>
                        <div className="border border-red-600">
                                {
                                    wishCard.map((card,i) => <WishlistAllCards key={i} card={card} handleRemoveFromWishList={handleRemoveFromWishList}></WishlistAllCards>)
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