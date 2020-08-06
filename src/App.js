import React, {Component} from "react";
import "./App.css";
import './index.css';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const mapStyles = {
  width: '100%',
  height: '75%',
};

const parisMarker = {
  position: 'absolute',
  border: '2px solid black',
  background: 'white',
  height: '25px',
  width: 'auto',
  marginLeft : '405px',
  marginTop : '95px'
}

const ambalaMarker = {
  position: 'absolute',
  border: '2px solid black',
  background: 'white',
  height: '25px',
  width: 'auto',
  marginLeft : '840px',
  marginTop : '240px'
}

const general = {
  position : 'absolute',
  zIndex : '100',
  marginLeft : '405px',
  marginTop : '120px'
}

const status = {
  position : 'absolute',
  zIndex : '100',
  bottom : '15%',
  fontSize: '30px',
  fontWeight: 'bold'
}

const animateBtn = {
  position : 'absolute',
  zIndex : '100',
  bottom : '15%',
  right: '10%',
  fontSize: '18px',
  padding: '10px'

}

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers : [
        {
          lat : 48.8566,
          lng : 2.3522
        },    
        {
          lat : 30.3752,
          lng : 76.7821
        }
      ],
      animate:'no-animation',
      statusNow: ''
    }
  }

  markIt = () => {
    return this.state.markers.map((points, index) => {
      return <Marker key={index} id={index} position={{
       lat: points.lat,
       lng: points.lng
     }} />
    })
  }

  animate = () => {
    this.setState({animate: 'dot', statusNow: 'Shipping rafale'});
    setTimeout(() => {
      this.setState({statusNow: 'Rafale successfully delivered to India'});
    }, 12500)
  }

  render(){
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{
            lat: 25.2048,
            lng: 55.2708
          }}>
          {this.markIt()}
        </Map>
        <img alt="Plane image" className={this.state.animate} style={general} src="https://img.icons8.com/ios-filled/50/000000/airplane-take-off.png"/>
        <button style={animateBtn} onClick={this.animate}>Launch Rafale</button>
        <p style={status}>
          {this.state.statusNow}
        </p>
        <div style={ambalaMarker}>Ambala</div>
        <div style={parisMarker}>Paris</div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBLW2AwSn9kIWTzt3434nZSibqeRflGxeE'
})(MapContainer);
