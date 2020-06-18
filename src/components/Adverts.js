import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAdverts } from '../actions/advertsAction';
import UserProfile from './UserProfile';
import CompanyAds from './CompanyAds';

class Adverts extends Component {
    
    componentWillMount(){
         this.props.fetchAdverts();
    }

    render() {
        const advertContent = this.props.adverts.map(advert => (
            <div key={advert.id}>
                <Link to={`/advert/?propertyId=${advert.id}`} className="card-link" >
                    <div className="card p-2">                
                        <img src={advert.Image} alt="property-visual" className="card-img-top"/>
                        <div className="card-body">
                            <h6 className="text-center">{advert.Title}</h6>
                            <p className="text-center">{advert.Description}</p>
                            <p className="text-center"><small className="text-muted">posted on {advert.created_on}</small></p>
                        </div>                    
                    </div>
                </Link>
            </div>
        ));
        return (
            <div className="row parent">
                <div className="col-2 pr-0">
                    <UserProfile />
                </div>
                <div className="main col-8">
                    {
                        advertContent
                    }
                </div>
                <div className="col-2 pl-0">
                    <CompanyAds />
                </div>
            </div>
        )
    }
}

Adverts.propTypes = {
    fetchAdverts: PropTypes.func.isRequired,
    adverts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    adverts: state.adverts.items,
    userData: state.authentication.userInfo
});

export default connect(mapStateToProps, { fetchAdverts })(Adverts);
