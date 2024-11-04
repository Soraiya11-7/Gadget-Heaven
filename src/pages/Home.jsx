// import AllGadgets from "../components/AllGadgets";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ShowCategories from "../components/ShowCategories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories.category);
    return (
        <div className="bg-gray-100 mb-10">
            <Banner></Banner>
            <Heading></Heading>
            {/* <AllGadgets></AllGadgets> */}

            <div className=" container w-[80%] mx-auto flex justify-between items-center gap-5">
                <Categories categories={categories}></Categories>
                <Outlet />
            </div>



        </div>
    );
};

export default Home;