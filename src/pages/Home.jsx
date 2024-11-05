// import AllGadgets from "../components/AllGadgets";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ShowCategories from "../components/ShowCategories";
import Heading from "../components/Heading";
import { createContext, useState } from "react";

export const AllCards = createContext(false);
const Home = () => {
    const [showAll, setShowAll] = useState(false); 
    const categories = useLoaderData();
    // console.log(categories.category);
    return (
        <div className="bg-gray-100 mb-10">
            <Banner></Banner>
            <Heading></Heading>
            {/* <AllGadgets></AllGadgets> */}
            <AllCards.Provider value={[showAll, setShowAll]}>
            <div className=" container w-[80%] mx-auto flex justify-between gap-5">
                <Categories categories={categories}></Categories>
                <Outlet />
            </div>
           </AllCards.Provider>
        </div>
    );
};

export default Home;