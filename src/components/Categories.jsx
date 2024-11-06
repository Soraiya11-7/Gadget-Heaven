import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AllCards } from "../pages/Home";


const Categories = ({ categories }) => {
    //  console.log(typeof categories,categories);
    const [showAll, setShowAll] = useContext(AllCards);
    const [active, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState(null)
    const navigate = useNavigate();

    const handleCategory = (category) => {
        setActive(false);
        setActiveItem(category)
        navigate(`/category/${category}`);
    };

    const handleCardView = () => {
        setActive(true);
        setActiveItem('')
        setShowAll(true);
        navigate('/category/all');
    }
  

    return (
        <div>
            <div className="bg-white text-center p-6 rounded-2xl border ">
                <div className="">
                
                    <button className={
                        `rounded-[32px] py-4 px-5 w-full text-lg ${active ? 'bg-[#9538E2] text-white font-extrabold shadow-md' : 'bg-[#09080F0D] font-medium text-[#09080F99]'}`
                    } onClick={handleCardView}>
                        All Product
                    </button>
                </div>
                {
                    categories.map((category, index) => (
                        <div key={index} className="mt-6" >
                            <button className={`rounded-[32px] py-4 px-5 w-full text-lg ${
                            activeItem === category.category ? 'bg-[#9538E2] text-white font-extrabold shadow-md' : 'bg-[#09080F0D] font-medium text-[#09080F99]'
                        }`} onClick={() => handleCategory(category.category) }>
                                {category.category}
                            </button>
                            {/* <NavLink
                                to={`/category/${category.category}`}
                                className={({ isActive }) => `${isActive ? 'bg-teal-500' : ''}`}
                            > {category.category}
                            </NavLink> */}

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Categories;