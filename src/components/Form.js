import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';


class Form extends Component {
    render() {
        return (
            <div className="row">                <form onSubmit={this.props.handleSubmit}>
<br/>
<br/>
<br/>

<input      

            type="text" 
            placeholder=" enter a city name"
            onChange={this.props.handleLocation}

            />            
              {/* <Button variant="warning">Warning</Button>{' '} */}
<br/>
<br/>


              <Button  type ="submit" variant="warning">Explore!</Button>

            
            
            
                </form>
</div>

)
    }
}

export default Form


