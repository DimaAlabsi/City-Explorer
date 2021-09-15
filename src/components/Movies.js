import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'


export class Movies extends Component {
    render() {
        return (
            <>
                 <Accordion>
  <Accordion.Item eventKey="0" >
    <Accordion.Header > Check the movies </Accordion.Header>
    <Accordion.Body>

      <h1>{this.props.display_name}</h1>
      <br/>
              {this.props.moviesData.map((i) => {
                return (
                    <>
                          <h3>Title</h3>
                    <p> {i.title}</p>
                  <h3> OverView</h3>
                        
                   <p>  { i.overview}</p>
                   <h3> released date</h3>
                        
                   <p>  { i.date}</p>
                   <h3>Vote Average</h3>
                    <p> {i.voteAvg}</p>
                    <h3>Vote Count</h3>
                    <p> {i.votCount}</p>
                               <br/>
                               <br/>
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

export default Movies
