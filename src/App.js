import React, { Component } from 'react';
import Form from './components/Form';
import Location from './components/Location';
import axios from 'axios';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
// import { Row,col,container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      lon: '',
      lat: '',
      showData: false,
      mapShow: false,
      error: {},
      errHandle: false
    }
  }
  handleLocation = (e) => {

    let display_name = e.target.value;

    this.setState({
      display_name: display_name
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`
    }


    axios(config).then(res => {
      let responseData = res.data[0];
      this.setState({
        display_name: responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        showData: true,
        mapShow: true,

      })
    }
    ).catch(err => this.setState({
      error: err.toString(), errHandle: true
    }))

  }
  // alertError=()=>{
  //   this.setState({
  //     alert:true
  //   })
  //     }     

  render() {
    return (
      <>
        <Header />
        <Form handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        <Location display_name={this.state.display_name}
          lat={this.state.lat}
          lon={this.state.lon} />

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-5`}
          style={{ width: 550 }}
          variant="top"
          width='300px' height='300px'
          alt="map" />
{
  this.state.errHandle && <Alert>
    {this.state.error}
  </Alert>
}
       


      </>
    )
  }
}

export default App



























