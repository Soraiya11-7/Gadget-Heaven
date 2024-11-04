import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import ShowCategories from "./ShowCategories";

const AllGadgets = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <div>
                <h1 className="text-center mb-6">Gadgets</h1>
                <div className=" container w-[80%] mx-auto flex justify-between items-center gap-5">
                    <div className="border border-red-600 rounded-lg">
                        <Categories categories={categories}></Categories>
                    </div>
                    <div className="border border-red-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        <ShowCategories></ShowCategories>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllGadgets;