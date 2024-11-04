
const Cards = ({card}) => {
    const { product_id, product_title,product_image, category, price,description,rating,specification,availability} = card || {}
    return (
        <div>
            <h2>{product_title}</h2>
        </div>
    );
};

export default Cards;