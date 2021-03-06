import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAdInfo } from '../actions/advertsAction'
import LoadingIndicator from './LoadingIndicator'
import UserProfile from './UserProfile';
import CompanyAds from './CompanyAds';
import Gallary from './Gallary'
import Contact from './Contact'

export class Advert extends Component {

    componentWillMount(){
        this.props.getAdInfo();

   }

    render() {
        let myStringArray = this.props.advertObj.data;

        // console.log(myStringArray);
        
        if (myStringArray) {
            const propertyObj = myStringArray.map(propertyFeature => (
                <div key={propertyFeature.id}>
                    <div className="ad-body">
                        <div className="ad-img col-6"><img src={propertyFeature.imageurl}  alt="property_visual"/></div>
                        <div className="ad-details col-6">
                            <h3>{propertyFeature.title}</h3>
                            <p>{propertyFeature.description}</p>
                            <div className="ad-body">
                                <div className="detail"><FontAwesomeIcon icon={"certificate"}/> Status: {propertyFeature.status}</div>
                                <div className="detail"><FontAwesomeIcon icon={"star"}/> State: {propertyFeature.state}</div>
                            </div>
                            <div className="ad-body">
                                <div className="detail"><FontAwesomeIcon icon={"home"}/> Type: {propertyFeature.type}</div>
                                <div className="detail"><FontAwesomeIcon icon={"street-view"}/> City: {propertyFeature.city}</div>
                            </div>
                            <div><FontAwesomeIcon icon={"location-arrow"}/> Location: {propertyFeature.address} </div>
                            <small className="form-text text-muted">posted on {propertyFeature.updatedon}</small>
                        </div>
                    </div>
                </div>
                ));
                return (
                    <div className="row parent">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <UserProfile />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">

                            <div className="main">{ propertyObj }</div>
                            <div className="main">
                                <div className="mini-galary">
                                    <Gallary />
                                </div>
                                <div className="mini-galary">
                                    <Contact />
                                </div>                                
                            </div>                           
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <CompanyAds />
                        </div>
                    </div>
                )
          }
          else{
            return (
                <LoadingIndicator/>
            )
          }

    }
}

Advert.propTypes = {
    advert: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    advertObj: state.adverts.item
});

export default connect(mapStateToProps, { getAdInfo })(Advert);
