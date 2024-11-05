import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Cart, Wishlist } from "../layouts/MianLayout";
import toast, { Toaster } from 'react-hot-toast';

const Details = () => {
    const notify = (product_title) => toast.success(`"${product_title}"  Item successfully added to the cart!`);
    const notify2 = (product_title) => toast.success(`"${product_title}"  Item successfully added to the wishlist!`);

    const [cart, setCart] = useContext(Cart);
    const [wishlist, setWishlist] = useContext(Wishlist);
    console.log(typeof cart, cart);
    const data = useLoaderData();
    const { id } = useParams();  // id is a string
    const [card, setCard] = useState({});  //single card(object)
    

    useEffect(() => {
        const singleCard = data.find((card) => card.product_id == id)    // data.find((card) => card.product_id === parseInt(id)) 
        setCard(singleCard);
    }, [data, id]);

    const { product_id, product_title, product_image, category, price, description, rating, availability } = card || {}
    const specification = card.specification || [];
     console.log("available",availability);
    console.log(specification);
    return (
        <div className="container w-[80%] mx-auto my-10">
            <h2>Details section : {description}</h2>
            <img src={product_image} alt="" />
            <h2>{category}</h2>
            <h2>{price}</h2>
            <h2>{rating}</h2>
            <button className={`mt-2 px-4 py-2 rounded-xl ${availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {availability ? 'In Stock' : 'Stock Out'}
            </button>
            <div>
                <ol className="list-decimal list-inside pl-4">
                    {specification.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ol>
            
            </div>
            <div className="flex justify-center gap-5">
                <div>
                    <button onClick={() => {setCart(cart + 1); notify(product_title)} } className="btn btn-accent">cart</button>
                </div>
                <div>
                    <button onClick={() => {setWishlist(wishlist + 1); notify2(product_title)} } className="btn btn-success">wishlist</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Details;