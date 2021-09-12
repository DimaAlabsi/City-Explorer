import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Form extends Component {
    render() {
        return (
            <div>
                <form >

<input      

            type="text" 
            placeholder=" enter a city name"
           

            />            
              <Button  type ="submit" variant="warning">Explore!</Button>

            
            
            
                </form>
            </div>
        )
    }
}

export default Form


