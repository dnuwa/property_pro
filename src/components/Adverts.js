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
                <h3>{advert.Title}</h3>
                <p>{advert.Description}</p>
            </div>
        ));
        return (
            <div>
                <h1>Adverts</h1>
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

export default connect(mapStateToProps, { fetchAdverts })(Adverts);
