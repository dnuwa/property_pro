import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';

class CompanyAds extends Component {
    render() {
        return (
            <div className="home-left-sticky-component">
                <div className="adverts-feature-box">
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                </div>
                <div className="adverts-feature-box mt-2 img-container">
                    <Carousel autoPlay={3000} animationSpeed={2000} infinite>
                        <img src="https://q-cf.bstatic.com/images/hotel/max1024x768/491/49199532.jpg" alt="hotel_img" />
                        <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/136/136334355.jpg" alt="hotel_img" />
                    </Carousel>
                    <div className="centered-caption">
                        Top destinations for Uganda city trips
                    </div>
                </div>
                <div className="adverts-feature-box mt-2 ad">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5LcWtkPhqCK8JiVQcSP3IEb0iCddz5pcx3w&usqp=CAU" alt="hotel_img"/>
                </div>
            </div>
        )
    }
}

export default CompanyAds;
