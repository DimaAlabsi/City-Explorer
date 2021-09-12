import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
 class Location extends Component {
    render() {
        return (
            <Col>

                       <h3>{this.props.display_name}</h3>
                
                <h4>{this.props.lat} 
                <br/>
                {this.props.lon}</h4>

                {/* <h4> <alert>
                    oh 
                   
      }     
                    </alert>
                    {this.props.alertError}</h4> */}
                </Col >
        )
    }
}



export default Location
