import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Cart, Wishlist } from "../layouts/MianLayout";
import toast, { Toaster } from 'react-hot-toast';
import { addCart, addWishList, getAllCarts, getAllWishList } from "../utilities";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
// import { addCart, addWishList, getAllCarts } from "../utilities";
// import { FaRegStar } from "react-icons/fa";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
const Details = () => {
    const notify = (product_title) => toast.success(`"${product_title}"  Item successfully added to the cart!`);
    const notify2 = (product_title) => toast.success(`"${product_title}"  Item successfully added to the wishlist!`);

    const [cart, setCart] = useContext(Cart);
    console.log(cart);
    const [wishlist, setWishlist] = useContext(Wishlist);
    // console.log(typeof cart, cart);
    const data = useLoaderData();
    const { id } = useParams();  // id is a string
    const [card, setCard] = useState({});  //single card(object)

    const [IsWish, setIsWish] = useState(false);

    const handleCart = (card) => {
        addCart(card);
        setCart(cart + 1);
        notify(product_title);

    }

    const handleWishList = (card) => {
        addWishList(card);
        setWishlist(wishlist + 1);
        notify2(product_title);
        setIsWish(true);
    }

    useEffect(() => {
        const singleCard = data.find((card) => card.product_id == id)    // data.find((card) => card.product_id === parseInt(id)) 
        setCard(singleCard);
        const wishListCard = getAllWishList();
        const isExist = wishListCard.find(item =>
            item.product_id == singleCard.product_id)
        if (isExist) { setIsWish(true) }
    }, [data, id]);

    const { product_id, product_title, product_image, category, price, description, rating, availability } = card || {}
    const specification = card.specification || [];

    return (
        <div>
            <div className="container mx-auto bg-[#9538E2] w-full h-[430px]">
                <div className="container w-[80%] mx-auto pt-8 text-center">
                    <h2 className="text-white font-bold text-3xl mb-4">Product Details</h2>
                    <p className="text-base font-normal w-[60%] text-center mx-auto text-white">Discover this must-have gadget, designed to elevate your experience with its innovative features and sleek design!</p>
                </div>
            </div>
            <div className='container bg-transparent mx-auto  w-[60%] overflow-hidden  mt-[-250px] transform  z-10 flex items-center justify-center border-[3px] border-white rounded-[24px] p-8 bg-white mb-20'>
                <div className="flex gap-8">
                    <div className="rounded-2xl h-[500px] w-[40%] ">
                        <img className="rounded-2xl h-full w-full object-fit overflow-hidden" src={product_image} alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#09080F] mb-3">{product_title}</h2>
                        <h2 className="text-xl text-[#09080FCC] font-semibold mb-4">Price: $ {price} </h2>
                        <button className={`px-3 py-2 font-medium text-sm rounded-[32px] mb-4 ${availability ? 'bg-[#309C081A] text-[#309C08] border border-[#309C08]' : 'bg-red-300 text-white border border-red-400'}`}>
                            {availability ? 'In Stock' : 'Stock Out'}
                        </button>
                        <h2 className="text-base text-[#09080F99] font-normal mb-4">{description}</h2>
                        <h2 className="text-lg font-bold mb-3 text-[#09080F]">Specification:</h2>
                        <div className="mb-4">
                            <ol className="list-decimal list-inside text-lg text-[#09080F99] font-normal">
                                {specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ol>

                        </div>
                        <h2 className="text-lg font-bold mb-3 text-[#09080F]">Rating ⭐ </h2>
                        <div className="flex text-[#F9C004] items-center gap-1 text- mb-6">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar className="text-black mr-3" /> <h2 className="text-[#09080FCC] text-sm font-medium px-3 py-2 bg-[#09080F0D] rounded-[32px] ">{rating}</h2>
                        </div>


                        <div className="flex items-center gap-5">
                            <div>
                                <button onClick={() => handleCart(card)} className="text-white rounded-[32px] py-4 px-5 text-lg font-bold shadow-md bg-[#9538E2] flex items-center gap-2">Add To Card <AiOutlineShoppingCart/> </button>
                            </div>
                            <div>
                                <button disabled={IsWish} className={
                        `py-4 px-5 rounded-full ${IsWish ? ' text-black border-none' : 'border'}`
                    }
                                    onClick={() => handleWishList(card)} > {!IsWish ? (
                                        <IoHeartOutline className="text-2xl" />
                                      ) : (
                                        <FaHeart className="text-2xl" />
                                      )}</button>
                            </div>
                        </div>
                        <Toaster />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;