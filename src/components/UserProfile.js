import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserProfile extends Component {
    render() {

        return (
            <div className="home-left-sticky-component">
                <div className="profile-left">
                   <img src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg" alt="user-dp"/>
                </div>
               <div className="user-feature-box">
                    <div className="m-1">
                            <Link to="#"><FontAwesomeIcon icon={"user"}/>   Update profile</Link>
                        </div>
                    <div className="m-1">   
                            <Link to="#"><FontAwesomeIcon icon={"key"}/>    Change password</Link>
                    </div>
                    <div className="m-1">  
                            <Link to="#"> <FontAwesomeIcon icon={"ad"}/>    My adverts </Link>
                    </div>                 
               </div>
               <div className="socials-feature-box text-center">
                    Access exclusive tools & insights <br/>
                    <Link to="#"> Try Premium Free for 1 Month </Link> 
               </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    data: state.authentication.userInfo
});
export default connect(mapStateToProps, null )(UserProfile);
