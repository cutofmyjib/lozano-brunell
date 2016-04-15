import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className='story profile'>
        <div className='profile-pic-container'>
          <div className='profile-pic'><img src={this.props.url1} /></div>
          <div className='profile-pic'><img src={this.props.url2} /></div>
        </div>
        <div className='profile-content'>
          <h2>{this.props.name}</h2>
          <h2><i>{this.props.title}</i></h2>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}