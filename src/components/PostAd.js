import React, { Component } from 'react'

export class PostAd extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            type: '',
            district: '',
            location: '',
            rooms: '',
            price: '',
            state: '',
            status: '',
            description: '',
            image: ''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit =(event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputFname">Title</label>
                    <input type="title" 
                    name="title" 
                    className="form-control" 
                    id="exampleInputtitle1" 
                    aria-describedby="titleHelp" 
                    placeholder="10 BEDROOMS FURNISHED HOUSE FOR RENTING IN KICUKIRO"
                    value={this.state.title}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputLastname">Type</label>
                    <input type="type" 
                    name="type" 
                    className="form-control" 
                    id="exampleInputtype1" 
                    aria-describedby="typeHelp" 
                    placeholder="Rental/Sale"
                    value={this.state.type}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhonenumber">District</label>
                    <input type="district" 
                    name="district" 
                    className="form-control" 
                    id="exampleInputdistrict1" 
                    aria-describedby="districtHelp" 
                    placeholder="kigali"
                    value={this.state.district}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Location</label>
                    <input type="location" 
                    name="location" 
                    className="form-control" 
                    id="exampleInputlocation1" 
                    aria-describedby="locationHelp" 
                    placeholder="colivile street plot 21, kigali - Rwanda"
                    value={this.state.location}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Number of rooms</label>
                    <input type="rooms" 
                    name="rooms" 
                    className="form-control" 
                    id="exampleInputrooms1" 
                    aria-describedby="roomsHelp" 
                    placeholder="3"
                    value={this.state.rooms}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputprice1">Price</label>
                    <input type="price" 
                    name="price" 
                    className="form-control" 
                    id="exampleInputprice1" 
                    placeholder="1000000"
                    value={this.state.price} 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputprice1">State</label>
                    <input type="state" 
                    name="state" 
                    className="form-control" 
                    id="exampleInputState1" 
                    placeholder="New/Old"
                    value={this.state.state} 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputStatus1">Status</label>
                    <input type="status" 
                    name="status" 
                    className="form-control" 
                    id="exampleInputstatus1" 
                    placeholder="New/Old"
                    value={this.state.status} 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputprice1">Description</label>
                    <input type="description" 
                    name="description" 
                    className="form-control" 
                    id="exampleInputDescription1" 
                    placeholder="property description"
                    value={this.state.description} 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputImage1">Property Image</label>
                    <input type="url" 
                    name="image" 
                    className="form-control" 
                    id="exampleInputImage1" 
                    placeholder="htps://someimage.jpg"
                    value={this.state.image} 
                    onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default PostAd
