import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";
import LinesEllipsis from 'react-lines-ellipsis';

function Product({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product-info">
                <LinesEllipsis
                    text={title}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                <p className="product-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {
                    Array(rating)
                        .fill()
                        .map((_) => (  
                            <p>★</p>
                    ))
                    }
                </div>
            </div>    
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
