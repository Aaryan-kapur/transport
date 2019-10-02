import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import '../styles/Main.scss';
class Main extends Component {
        state = {  }
    render() { 
        return ( <React.Fragment>
            <div className="Nav">
                <span className="title"><b>Bu</b>transport</span>
            </div>
            <div className="container">

            <div className="addressing">Hello,<br /> <div className="name">Bhavya</div>

            
            </div>
        <div className="rideDetails">
            <span className="details">You have 0 rides scheduled for today</span>
        </div>
        <div className="buttonSet">

        <MDBBtn className="button" color="white">Book A Ride </MDBBtn><br/>
        <MDBBtn className="button" color="white">Check into A Ride</MDBBtn>
        <MDBBtn className="buttonBottom button" color="white">Contact Us</MDBBtn>


        </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Main;