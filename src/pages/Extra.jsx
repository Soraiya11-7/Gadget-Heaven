import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Extra = () => {
    const data = useLoaderData();

    const [products, setProducts] = useState([]);
    const [filteredStockProducts, setFilteredProducts] = useState([]);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const ratedProducts = data.filter(product => product.rating >= 4.6);
        setProducts(ratedProducts);
        const inStockProducts = data.filter(product => product.availability == true);
        setFilteredProducts(inStockProducts);

    }, [data]);

    const filterByRating = () => {
        setIsActive(true);
    };

    const filterByAvailability = () => {
        setIsActive(false);
    };


    return (
        <div className="container mx-auto">
            <div className="container mx-auto bg-[#9538E2] w-full h-[300px] mb-12">
                <div className="container w-[80%] mx-auto pt-8 text-center ">
                    <h2 className="text-white font-bold text-3xl mb-4">Top-Rated & In Stock</h2>
                    <p className="text-base font-normal w-[55%] text-center mx-auto text-white mb-8">Explore the Best of Both route to find your next must-have gadget without delay. Perfect for discerning shoppers who value quality and convenience!</p>

                    <div className="flex justify-center items-center gap-3 my-7">
                        <div>
                            <button onClick={filterByRating} className={
                                `py-4 px-14 rounded-[32px] ${isActive ? ' text-[#9538E2] text-lg font-extrabold bg-white' : 'text-white border border-white font-medium'}`
                            } >Show High-Rated Items</button>
                        </div>
                        <div>
                            <button onClick={filterByAvailability} className={
                                `py-4 px-14 rounded-[32px] ${!isActive ? ' text-[#9538E2] text-lg font-extrabold bg-white' : 'text-white border border-white font-medium'}`
                            }>Show In-Stock Items</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="buttons">
                <button onClick={filterByRating} className="btn">Show High-Rated Items</button>
                <button onClick={filterByAvailability} className="btn">Show In-Stock Items</button>
                
            </div> */}

            {isActive && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 w-[80%] container mx-auto">
                
                {products.map(product => (
                    <div key={product.product_id} className="product-card">
                        <div className=" bg-white rounded-2xl p-5">
                    <div className="h-[180px] mb-6 border border-[#1313131A] rounded-xl">
                        <img className="h-full w-full object-fit rounded-xl overflow-hidden " src={product.product_image} alt="" />
                    </div>
                    <h2 className="text-2xl text-[#09080F] font-semibold mb-3">{product.product_title}</h2>
                    <h3 className="text-xl text-[#09080F99] font-medium mb-3">Price: ${product.price}</h3>
                    <h3 className="text-xl text-[#09080F99] font-medium mb-4">Rating: {product.rating}</h3>
                    <button className={`px-3 py-2 font-medium text-sm rounded-[32px] mb-4 ${product.availability ? 'bg-[#309C081A] text-[#309C08] border border-[#309C08]' : 'bg-red-300 text-white border border-red-400'}`}>
                            {product.availability ? 'In Stock' : 'Stock Out'}
                        </button>
                </div>
                    </div>
                ))}
            </div>
            )}
            {!isActive && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 w-[80%] container mx-auto">
                
                {filteredStockProducts.map(product => (
                    <div key={product.product_id} className="product-card">
                        <div className=" bg-white rounded-2xl p-5">
                    <div className="h-[180px] mb-6 border border-[#1313131A] rounded-xl">
                        <img className="h-full w-full object-fit rounded-xl overflow-hidden " src={product.product_image} alt="" />
                    </div>
                    <h2 className="text-2xl text-[#09080F] font-semibold mb-3">{product.product_title}</h2>
                    <h3 className="text-xl text-[#09080F99] font-medium mb-3">Price: ${product.price}</h3>
                    <h3 className="text-xl text-[#09080F99] font-medium mb-4">Rating: {product.rating}</h3>
                    <button className={`px-3 py-2 font-medium text-sm rounded-[32px] mb-4 ${product.availability ? 'bg-[#309C081A] text-[#309C08] border border-[#309C08]' : 'bg-red-300 text-white border border-red-400'}`}>
                            {product.availability ? 'In Stock' : 'Stock Out'}
                        </button>
                </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
};

export default Extra;