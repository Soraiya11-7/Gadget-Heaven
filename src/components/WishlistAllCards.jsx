// import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";

const WishlistAllCards = ({card,handleRemoveFromWishList}) => {
    const { product_id, product_title, product_image, category, price, description, rating, specification, availability } = card || {}
    // const navigate = useNavigate();
    return (
        <div>
            <div className="flex gap-8 my-6 bg-white relative rounded-2xl p-8">
                <div className="w-[20%] h-[190px] rounded-xl">
               
                    <img className="w-full h-full rounded-xl object-fit overflow-hidden" src={product_image} alt="" />
                   
                </div>
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-[#09080F] mb-5">{product_title}</h2>
                    <h2 className="text-base text-[#09080F99] font-normal mb-4"><span className="text-[#09080F]">Description: </span> {description}</h2>
                    <h2 className="text-xl text-[#09080FCC] font-semibold mb-4">Price: $ {price} </h2>
                    <button className="text-white rounded-[32px] py-3 px-6 text-lg font-medium  bg-[#9538E2] shadow-lg">Add to Card</button>
                </div>
                <div className="absolute z-10  right-16 top-8 text-right"><button onClick={() => handleRemove(product_id, price)} className=" text-red-600 text-4xl font-thin"> <TiDeleteOutline /></button></div>
            </div> 
            
        </div>
    );
};

export default WishlistAllCards;