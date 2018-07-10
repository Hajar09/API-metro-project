import React, { Component } from 'react';
import './App.css';
import Background from './components/Background.js'
class App extends Component {
  state = {
    stations: [{
      numberLine:"9",
      station:"croix-de-chavaux",
      direction: "A",
      image: "../images/imagec.jpeg"
    },{
      numberLine:"11",
      station:"republique",
      direction: "A",
      image: "../images/imagerep.jpeg"
    }
  ]
  }
  render() {
    const afficheStation = this.state.stations.map((station, i)=>{
      return <Background key={i} stations={this.state.stations[i]} station={this.state.stations[i].station} images={this.state.stations[i].image}/>
    })
    return (
      <div className='card'>{afficheStation}</div>
    )
  }
}

export default App;
