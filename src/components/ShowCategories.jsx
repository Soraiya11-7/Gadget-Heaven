import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";
import { createContext, useContext, useEffect, useState } from "react";
import { AllCards } from "../pages/Home";


const ShowCategories = () => {
    const data = useLoaderData()
    const { category } = useParams();
    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useContext(AllCards); 
    console.log(showAll);

    useEffect(() => {
        console.log("Show all status:", showAll);  
        if (category) {
            const filteredCategory = [...data].filter(card => card.category === category);
            setCards(filteredCategory);
            // setShowAll(false);
        }
        else if (showAll) {
            setCards(data); 
            console.log("Showing all items");
        }
        else {
            setCards(data.slice(0, 7));
        }
    }, [data, category,showAll])
    // console.log( data);
    return (

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {
            cards.map((card) => <Cards key={card.product_id} card={card}></Cards>)
        }
    </div>
        

    );
};

export default ShowCategories;