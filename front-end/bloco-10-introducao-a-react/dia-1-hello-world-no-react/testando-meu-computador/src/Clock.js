import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return <h2>{setInterval(new Date().toLocaleTimeString('pt', { hour12: true }), 1000)}</h2>;
  }
}

export default Clock;