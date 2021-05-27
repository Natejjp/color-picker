import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lighting: 0,
  }

  handleHueChange = event => {
    this.setState({ hue: event.target.value })
  }
  handleNewColor = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lighting: Math.floor(Math.random() * 50),
    })
  }
  handleSaturationChange = event => {
    this.setState({ saturation: event.target.value })
  }

  handleLightingChange = event => {
    this.setState({ lighting: event.target.value })
  }

  render() {
    const color = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lighting}%)`
    return (
      <div className="everything">
        <h1>Color Picker</h1>
        <div className="box" style={{ backgroundColor: color }}></div>
        <p>H: {this.state.hue}</p>
        <input
          type="range"
          value={this.state.hue}
          max="360"
          onChange={this.handleHueChange}
        />

        <p>S: {this.state.saturation}</p>
        <input
          type="range"
          value={this.state.saturation}
          max="100"
          onChange={this.handleSaturationChange}
        />

        <p>L: {this.state.lighting}</p>
        <input
          type="range"
          value={this.state.lighting}
          max="50"
          onChange={this.handleLightingChange}
        />

        <button onClick={this.handleNewColor}>Random Color</button>
      </div>
    )
  }
}
