import React, { Component } from 'react';
import Story from './story';

import Rebase from 're-base'
var base = Rebase.createClass('https://celeste-matt.firebaseio.com');

export default class Ourstory extends Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
  }

  componentDidMount(){
    this.storyRef = base.bindToState('ourstory', {
      context: this,
      state: 'stories',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.storyRef);
  }

  render() {
    var stories = this.state.stories.map(function(details) {
        return <Story {...details} />
    })

    return (
      <div className='main'>
        <h1 className='main-title'>OUR STORY</h1>
        <div className='story'>
          <img className='img-large' src='https://lh3.googleusercontent.com/cmzZD4gHd5hBIGl5qPt5zhTgR6qnikhANa7JxTLcptZYWuj8y_nFxeekK403g-vEIJgkLQKWrsSsMmicjp5t-nGGbrd7xqWMHdXURMyd_pl5eEmcDrwzhsP3cx56FSpNOFGiv8lr_hkCsiQOYNtT9e18SoTDArdT4yoMOD3lVz4ytZ3fmLN6L9iF3Z5qGySiImX5E64eqeIr2C7TgnjL2AKqDvrPsZNZqjYKuE7icg-chq2uBlOraTfVz58UoPtxSgCXsjBV9aLEhCWHKbyBpi4WpgLoBd1HKuGYPE5kqqa4FBFB76N9s6BtYW4lubi2eS08FwEqp_k6zGiCyWmzTC81WW26zfmQQfq2hZE-B4CQ-8gCsI9KwBwk7Ne-Oqrd4OJh9JoOlog8lwSbCVdLjHm1vn8KFfx6ob-Eym6JXiecsqesfbnLOaly2H0Fw5ZEqXY4vbOqX77P01HVgpTSvtfw2scyS5em-TDUG3wp4kHfgjglKwd9KnjMu_IZUadicAvaVeIlh9xWKG7OSMSuW_YVgKv2HtS2aAV6uQaJ4QmoUaAtySKT3u5-8JtOzA5mJWsR=w1966-h980-no' />
        </div>
        {stories}
        <div className='break-heartknot'></div>
      </div>
    );
  }
}
