import {  useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const ShowCategories = () => {
    const data = useLoaderData()
    const {category} = useParams();
    console.log( data);
    return (
        
        <div className="border border-red-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
           {
            data.map((card) => <Cards key={card.product_id} card={card}></Cards>)
           }
        </div>
    );
};

export default ShowCategories;