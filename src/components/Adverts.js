import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAdverts } from '../actions/advertsAction';

class Adverts extends Component {
    
    componentWillMount(){
         this.props.fetchAdverts();
    }

    render() {
        const advertContent = this.props.adverts.map(advert => (
            <div key={advert.id}>
                <div className="card p-2" style={style}>
                    <img src={advert.Image} alt="property image" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{advert.Title}</h5>
                        <p className="card-text">{advert.Description}</p>
                        <p className="card-text"><small className="text-muted">created on {advert.created_on}</small></p>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="main">
                {/* <h1>Adverts</h1> */}
                {
                    advertContent
                }
            </div>
        )
    }
}

Adverts.propTypes = {
    fetchAdverts: PropTypes.func.isRequired,
    adverts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    adverts: state.adverts.items
});

const style ={
    width: '100%'
}

export default connect(mapStateToProps, { fetchAdverts })(Adverts);
