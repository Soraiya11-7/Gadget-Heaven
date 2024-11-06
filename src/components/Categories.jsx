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
        setShowAll(true);
        navigate('/category/all');
    }
  

    return (
        <div>

            <div className="bg-white text-center p-3 rounded-lg">
                <div className="border border-red-100">
                    {/* <NavLink to='/category/all' 
                    className={({ isActive }) => 
                        `${isActive ? 'bg-teal-500' : ''}`
                    }
                    onClick={() => setShowAll(true)}
                    >all</NavLink> */}
                    <button className={
                        `${active ? 'bg-teal-500 w-full' : 'bg-gray'}`
                    } onClick={handleCardView}>
                        All
                    </button>
                </div>
                {
                    categories.map((category, index) => (
                        <div key={index} className="bg-gray-400 my-3 rounded-xl" >
                            <button className={`w-full p-3 rounded-lg ${
                            activeItem === category.category ? 'bg-teal-500' : 'bg-gray-400'
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