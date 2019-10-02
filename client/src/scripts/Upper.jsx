import React, { Component } from 'react';
import '../styles/Upper.scss';
import { MDBInput, MDBBtn } from "mdbreact";

class Upper extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div className="Upper">
                <div className="mainUpper">
                <span className="Uppertext"><strong>BU</strong>transport</span>
                <p className="textUpper">Use Bennett ID</p>
                <MDBInput className="UpperInput text-white" label="Enter Username"/>
                <MDBInput className="UpperInput" label="Enter Password" />
                <MDBBtn classname = "submitUpper" color="white">SUBMIT</MDBBtn>

                </div>
            </div>

        </React.Fragment> );
    }
}
 
export default Upper;