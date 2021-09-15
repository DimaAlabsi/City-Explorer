import React, { Component } from 'react';
import Form from './components/Form';
import Location from './components/Location';
import axios from 'axios';
import Header from './components/Header';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Movies from './components/Movies';
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
      errHandle: false,
      weatherData: [],
      moviesData:[]

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
     .then(() => {
      let locationName = this.state.display_name.split(',')[0];

      let config = {
        method: "GET",
        baseURL: `http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&key=${process.env.WEATHER_API_KEY}&city=${locationName}`
      }

      console.log( `http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&key=${process.env.WEATHER_API_KEY}&city=${locationName}`
      )
      axios(config).then((res) => {

          this.setState({
            
             weatherData : res.data
        });
          })
     })
     .then(() => {
      let locationName = this.state.display_name.split(',')[0];

      let config = {
        method: "GET",
        baseURL: `http://${process.env.REACT_APP_BACKEND_URL}/movies?query=${locationName}` 
           }
     console.log(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${this.state.display_name}` )
      axios(config).then((res) => {

        console.log(res)
          this.setState({
            
             moviesData : res.data
        });
          })
     })

    

  
      }     

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
       

<Weather 

  display_name={this.state.display_name}
weatherData={this.state.weatherData}/>

<Movies
display_name={this.state.display_name}
moviesData={this.state.moviesData}
/>


      </>
    );
  }

  
}
export default App



























