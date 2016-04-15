import React, { Component } from 'react';

export default class Attractions extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title h1-rspnsv'>Attractions</h1>
        <iframe className='map' src="https://www.google.com/maps/d/embed?mid=z0VkULqHLclg.kJgCSGPjP4TY" frameBorder="0"></iframe>
        <div className='break-heartknot'></div>
      </div>
    );
  }
}