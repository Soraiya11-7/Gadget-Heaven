import { useNavigate } from "react-router-dom";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";
const Carts = ({ card ,handleRemove}) => {
    const { product_id, product_title, product_image, category, price, description, rating, specification, availability } = card || {}
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex items-center gap-3 my-7 border bg-slate-500 relative">
                <div>
               
                    <img src={product_image} alt="" />
                   
                </div>
                <div className="text-left">
                    <h2>Name:{product_title}</h2>
                    <h3>Description: {description}</h3>
                    <h2>Value: ${price}</h2>
                    {/* <button className="btn">Add to Card</button> */}
                </div>
                <div className="absolute z-10  right-4 top-3 text-right"><button onClick={() =>handleRemove(product_id,price)} className=" text-red-600 text-4xl font-thin"> <TiDeleteOutline /></button></div>
            </div> 
            
        </div>
    );
};

export default Carts;