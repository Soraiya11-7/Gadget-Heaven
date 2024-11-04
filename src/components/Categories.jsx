import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    //  console.log(typeof categories,categories);
    return (
        <div className="bg-white text-center p-3 rounded-lg">
            <div className="bg-slate-500 mb-3 rounded-xl">
                <Link to='/category/:category' >All</Link>
            </div>
            {
                categories.map((category, index) => (
                    <div key={index} className="bg-gray-400 my-3 rounded-xl" >
                        <Link to={`/category/${category.category}`}> {category.category}</Link>
                        
                    </div>
                 ) )
            }
        
        </div>
    );
};

export default Categories;