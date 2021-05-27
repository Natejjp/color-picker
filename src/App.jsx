import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: 0,
    lighting: 0,
    alpha: 0,
  }

  handleSaturationChange = event => {
    this.setState({ saturation: event.target.value })
  }

  handleLightingChange = event => {
    this.setState({ lighting: event.target.value })
  }

  handleAlphaChange = event => {
    this.setState({ alpha: event.target.value })
  }

  render() {
    return (
      <>
        <h1
          className="box"
          style={{ backgroundColor: `hsl(${this.state.hue},100%,50%)` }}
        >
          Color Picker
        </h1>
        <p>H: {this.state.hue}</p>
        <input
          type="range"
          value={this.state.hue}
          max="360"
          onChange={event => {
            this.setState({ hue: event.target.value })
          }}
        />

        {/* <p>S: {this.state.saturation}</p>
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

        <p>A: {this.state.alpha}</p>
        <input
          type="range"
          value={this.state.alpha}
          max="360"
          onChange={this.handleAlphaChange}
        /> */}
      </>
    )
  }
}
