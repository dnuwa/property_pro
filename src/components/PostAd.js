import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewAd } from "../actions/advertsAction";
import UserProfile from "./UserProfile";
import CompanyAds from "./CompanyAds";

export class PostAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      rooms: "",
      price: "",
      state: "",
      status: "",
      description: "",
      imageUrl: "",
      city: "",
      address: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postNewAd(this.state);
  };

  render() {
    return (
      <div className="row parent">
        <div className="col-2 pr-0">
          <UserProfile />
        </div>
        <div className="main col-8">
          <form onSubmit={this.handleSubmit} className="m-5">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="exampleInputFname">Title</label>
                  <input
                    type="title"
                    name="title"
                    className="form-control"
                    id="exampleInputtitle1"
                    aria-describedby="titleHelp"
                    placeholder="10 BEDROOMS FURNISHED HOUSE FOR RENTING IN KICUKIRO"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputLastname">Type</label>
                  <input
                    type="type"
                    name="type"
                    className="form-control"
                    id="exampleInputtype1"
                    aria-describedby="typeHelp"
                    placeholder="Rental/Sale"
                    value={this.state.type}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Number of rooms</label>
                  <input
                    type="rooms"
                    name="rooms"
                    className="form-control"
                    id="exampleInputrooms1"
                    aria-describedby="roomsHelp"
                    placeholder="3"
                    value={this.state.rooms}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputprice1">Price</label>
                  <input
                    type="price"
                    name="price"
                    className="form-control"
                    id="exampleInputprice1"
                    placeholder="1000000"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputprice1">State</label>
                  <input
                    type="state"
                    name="state"
                    className="form-control"
                    id="exampleInputState1"
                    placeholder="New/Old"
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group">
                  <label htmlFor="exampleInputStatus1">Status</label>
                  <input
                    type="status"
                    name="status"
                    className="form-control"
                    id="exampleInputstatus1"
                    placeholder="New/Old"
                    value={this.state.status}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleCity1">City</label>
                  <input
                    type="city"
                    name="city"
                    className="form-control"
                    id="exampleInputstatus1"
                    placeholder="kampala"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputAddress1">Address</label>
                  <input
                    type="address"
                    name="address"
                    className="form-control"
                    id="exampleInputAddress1"
                    placeholder="plot 20, mbuya"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputprice1">Description</label>
                  <input
                    type="description"
                    name="description"
                    className="form-control"
                    id="exampleInputDescription1"
                    placeholder="property description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputimageUrl1">Property Image</label>
                  <input
                    type="url"
                    name="imageUrl"
                    className="form-control"
                    id="exampleInputimageUrl1"
                    placeholder="htps://someimageUrl.jpg"
                    value={this.state.imageUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save and Publish advert 
            </button>
          </form>
        </div>
        <div className="col-2 pl-0">
          <CompanyAds />
        </div>
      </div>
    );
  }
}

export default connect(null, { postNewAd })(PostAd);
