import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAdInfo } from '../actions/advertsAction'
import LoadingIndicator from './LoadingIndicator'

export class Advert extends Component {

    componentWillMount(){
        this.props.getAdInfo();

   }

    render() {
        let myStringArray = this.props.advertObj.data;

        // console.log(typeof(myStringArray));
        // console.log(myStringArray);
        
        if (myStringArray) {
            // const x = myStringArray.map((y) => {
            //   console.log(y.id);
            // });

            const propertyObj = myStringArray.map(propertyFeature => (
                <div key={propertyFeature.id}>
                    <div className="ad-body">
                        <div className="ad-img"><img src={propertyFeature.imageurl} /></div>
                        <div className="ad-details">
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
                    <div className="container">
                        { propertyObj }
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

const mapStateToProps = state => ({
    advertObj: state.adverts.item
});

export default connect(mapStateToProps, { getAdInfo })(Advert);
