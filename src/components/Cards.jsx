import { useNavigate } from "react-router-dom";

const Cards = ({card}) => {

    const { product_id, product_title,product_image, category, price,description,rating,specification,availability} = card || {}
    const navigate = useNavigate();
    return (
        <div>
            <div className="border border-yellow-100 bg-amber-900">
            <div className="h-[240px] mb-6 border border-[#1313131A] rounded-2xl">
                    <img className="h-full w-full object-fit rounded-2xl overflow-hidden " src={product_image} alt="" />
                </div>
            <h2>{product_title}</h2>
            <button>View details</button>
            <h2>{product_title}</h2>
            <button onClick={() => navigate(`/card/${product_id}`)} className="btn btn-success">View details</button>
            </div>
        </div>
    );
};

export default Cards;