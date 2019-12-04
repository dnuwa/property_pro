import React, { Component } from 'react'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Advert extends Component {
    render() {
        return (
            <div className="container">
                <div className="ad-body">
                    <div className="ad-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMmb78M6JJYLi4Nvnc-O0KMueV07C6KQuX9Qi-RPnEcHkWxheA" /></div>
                    <div className="ad-details">
                        <h3>10 BEDROOMS FURNISHED HOUSE FOR RENTING IN KICUKIRO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi, reiciendis nihil quidem voluptatem facilis exercitationem maiores unde vero molestiae deleniti magnam commodi sapiente minus possimus cumque beatae repellendus? Vero?</p>
                        <div className="ad-body">
                            <div className="detail"><FontAwesomeIcon icon={"coffee"}/>    Status: Available</div>
                            <div className="detail"><FontAwesomeIcon icon={"coffee"}/> State: New</div>
                        </div>
                        <div className="ad-body">
                            <div className="detail">Type: Residential</div>
                            <div className="detail">District: Kampala</div>
                        </div>
                        <div>Location: 31 street Industrial Area Kampala</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advert
