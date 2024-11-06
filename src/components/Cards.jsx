import { useNavigate } from "react-router-dom";

const Cards = ({card}) => {

    const { product_id, product_title,product_image, category, price,description,rating,specification,availability} = card || {}
    const navigate = useNavigate();
    return (
        <div>
            <div className=" bg-white rounded-2xl p-5">
            <div className="h-[180px] mb-6 border border-[#1313131A] rounded-xl">
                    <img className="h-full w-full object-fit rounded-xl overflow-hidden " src={product_image} alt="" />
                </div>
            <h2 className="text-2xl text-[#09080F] font-semibold mb-3">{product_title}</h2>
            {/* // convert dollar to tk (1$ = 100tk)  */}
            <h3 className="text-xl text-[#09080F99] font-medium mb-4">Price: {price / 10}k</h3>
            <button onClick={() => navigate(`/card/${product_id}`)} className="text-[#9538E2] rounded-[32px] py-4 px-5 text-lg border border-[#9538E2] shadow-md">View Details</button>
            </div>
        </div>
    );
};

export default Cards;