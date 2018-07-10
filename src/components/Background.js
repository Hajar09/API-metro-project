import React, { Component } from 'react'

class Background extends Component{
  state = {
    message: ""
  }

  componentDidMount(){
    fetch(`https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/${this.props.stations.numberLine}/${this.props.stations.station}/${this.props.stations.direction}`)
    .then(results =>{
      return results.json()
    }).then(data=> {
      let time = data.result.schedules.map((metro, i)=>{
        return(
          <div key={metro.message}>
            <h1>Train {i+1}: {metro.message}</h1>
          </div>
        )
      })
      console.log(data.result.schedules);
      this.setState({
        message:time
      })
    })
  }
  render(){
    return(
      <div className="stati">
        <img  alt="" src={this.props.images}/>
        <h3>{this.props.station}</h3>
        {this.state.message}</div>
    )
  }
}

export default Background
