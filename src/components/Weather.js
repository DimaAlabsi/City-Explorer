import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'

export class Weather extends Component {
    render() {
        return (
            <>
                <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>{this.props.city_name}</Accordion.Header>
    <Accordion.Body>
              {this.props.weatherData.map((i) => {
                return (
                    <>
                    <h1>Date</h1>
                    <p> {i.date}</p>
                  <h3> Description</h3>
                        
                   <p>  {i.description}</p>
                  </>
                );
              })}
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
            </>
        )
    }
}

export default Weather
