import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Extra = () => {
     const data = useLoaderData();

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        setProducts(data);
        setFilteredProducts(data);
    }, []);

    const filterByRating = () => {
        const ratedProducts = products.filter(product => product.rating >= 4.5);
        setFilteredProducts(ratedProducts);
       
    };

    const filterByAvailability = () => {
        const inStockProducts = products.filter(product => product.availability);
        setFilteredProducts(inStockProducts);
       
    };


    return (
        <div className="container w-[80%] mx-auto my-10"> 
            <h1>Top-Rated & In Stock</h1>
            <div>
            Route Name: /Best in Stock
            Heading: Best of Both: Top-Rated & In Stock
            </div>
            <h5>Explore the Best of Both route to find your next must-have gadget without delay. Perfect for discerning shoppers who value quality and convenience!</h5>
            <div className="buttons">
                <button onClick={filterByRating} className="btn">Show High-Rated Items</button>
                <button onClick={filterByAvailability} className="btn">Show In-Stock Items</button>
                
            </div>
            
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.product_id} className="product-card">
                        <img src={product.product_image} alt={product.product_title} />
                        <h2>{product.product_title}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating} ★</p>
                        <p>{product.description}</p>
                        <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Extra;