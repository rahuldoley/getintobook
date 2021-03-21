import React from 'react';
import Product from './Product';
import "./Home.css";


function Home() {
    return (
        <div className="home-row">
            <Product 
               id="1"
               title= "Sapiens: A Brief History of Humankind"
               price={450}
               rating={5}
               image="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/088/9780099590088.jpg"
            />
            <Product 
               id="2"
               title="Think And Grow Rich"
               price={120}
               rating={4}
               image="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/918/9788192910918.jpg"
            />
            <Product 
               id="3"
               title="The Power Of Your Subconscious Mind"
               price={180}
               rating={5}
               image="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/963/9788192910963.jpg"
            />
            <Product 
               id="4"
               title="Harry Potter and the Philosopher's Stone
               (PAPERBACK)"
               price={180}
               rating={5}
               image="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/652/9781408855652.jpg"
            />
        </div>
    )
}

export default Home