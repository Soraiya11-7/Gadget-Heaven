import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AllCards } from "../pages/Home";


const Categories = ({ categories }) => {
    //  console.log(typeof categories,categories);
    const [showAll, setShowAll] = useContext(AllCards); 
   
    return (
        <div>
            <div className="bg-white text-center p-3 rounded-lg">
                <div className="bg-slate-500 mb-3 rounded-xl">
                    <NavLink to='/category/all' 
                    className={({isActive}) => `${isActive? ' bg-teal-500' : ''}`}
                    onClick={() => setShowAll(true)}
                    >All</NavLink>
                    {/* <button className="bg-gray" onClick={() => setShowAll(true)}>
                        All
                    </button> */}
                </div>
                {
                    categories.map((category, index) => (
                        <div key={index} className="bg-gray-400 my-3 rounded-xl" >
                            <NavLink 
                            to={`/category/${category.category}`}
                            className={({isActive}) => `${isActive? 'bg-teal-500' : ''}` }
                            > {category.category}
                            </NavLink>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Categories;