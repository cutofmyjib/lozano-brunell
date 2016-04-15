import React, { Component } from 'react';
import Profile from './profile';

import Rebase from 're-base'
var base = Rebase.createClass('https://celeste-matt.firebaseio.com');

export default class OurWeddingParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brideParty: [],
      groomParty: []
    };
  }

  componentDidMount(){
    this.brideRef = base.bindToState('bride', {
      context: this,
      state: 'brideParty',
      asArray: true
    });

    this.groomRef = base.bindToState('groom', {
      context: this,
      state: 'groomParty',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.brideRef);
    base.removeBinding(this.groomRef);
  }

  render() {
    //map initially returns empty array
    var brideParty = this.state.brideParty.map(function(data){
      return <Profile {...data} />
    })
    var groomParty = this.state.groomParty.map(function(data){
      return <Profile {...data} />
    })

    return (
      <div className='main'>
        <h1 className='main-title'>OUR WEDDING PARTY</h1>
        <div className='main-subdiv'>
          {brideParty}
          <div className='break-fig8'></div>
          {groomParty}
        </div>
        <div className='break-heartknot'></div>
      </div>
    );
  }
}
