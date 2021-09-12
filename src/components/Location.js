import React, { Component } from 'react'

 class Location extends Component {
    render() {
        return (
            <div>
                       <h1>{this.props.display_name}</h1>
                
                <h2>{this.props.lat}/{this.props.lon}</h2>

                
            </div>
        )
    }
}



export default Location
