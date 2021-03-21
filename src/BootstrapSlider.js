import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./BootstrapSlider.css";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image5 from "./image/image5.jpg";
import image6 from "./image/image6.jpg";

class BootstrapSlider extends React.Component{

    render(){
        return(
            <Carousel className="poster">
                <Carousel.Item interval={3200}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item interval={2400}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item interval={1600}>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                <img
                    className="d-block w-100"
                    src={image5}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image6}
                    alt="First slide"
                />
                </Carousel.Item>
            </Carousel>    
        )
    }
    
}

export default BootstrapSlider;