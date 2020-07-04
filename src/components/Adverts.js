import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { fetchAdverts } from "../actions/advertsAction";
import UserProfile from "./UserProfile";
import CompanyAds from "./CompanyAds";

class Adverts extends Component {
  componentDidMount() {
    this.props.fetchAdverts();
  }

  defaultComponent =  [1,2,3,4,5,6].map(() => (
    <div className="card p-2">
    <div className="card-body">
      <h6 className="text-center">{<Skeleton count={2} />}</h6>
      <p className="text-center">{<Skeleton count={5} />}</p>
      <p className="text-center">
        <small className="text-muted">{<Skeleton count={1} />}
        </small>
      </p>
    </div>
  </div>
  ))

  render() {
    const advertContent = this.props.adverts.map((advert) => (
      <div key={advert.id}>
        <Link to={`/advert/?propertyId=${advert.id}`} className="card-link">
          <div className="card p-2">
            <img
              src={advert.Image}
              alt="property-visual"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="text-center">{advert.Title}</h6>
              <p className="text-center">{advert.Description}</p>
              <p className="text-center">
                <small className="text-muted">
                  posted on {advert.created_on}
                </small>
              </p>
            </div>
          </div>
        </Link>
      </div>
    ));

    return (
      <div className="row parent">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 pr-0">
          <UserProfile />
        </div>
        <div className="main col-xs-12 col-sm-12 col-md-8 col-lg-8">
          {!this.props.adverts || this.props.adverts.length === 0 ? (
            this.defaultComponent
          ) : (
            advertContent
          )}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 pl-0">
          <CompanyAds />
        </div>
      </div>
    );
  }
}

Adverts.propTypes = {
  fetchAdverts: PropTypes.func.isRequired,
  adverts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  adverts: state.adverts.items,
  userData: state.authentication.userInfo,
});

export default connect(mapStateToProps, { fetchAdverts })(Adverts);
