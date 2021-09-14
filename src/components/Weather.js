import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'

export class Weather extends Component {
    render() {
        return (
            <>
                <Accordion>
  <Accordion.Item eventKey="0" >
    <Accordion.Header > Check the  Weather </Accordion.Header>
    <Accordion.Body>

      <h1>{this.props.display_name}</h1>
      <br/>
              {this.props.weatherData.map((i) => {
                return (
                    <>
                    <h3>Date</h3>
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
