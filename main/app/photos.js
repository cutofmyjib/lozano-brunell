import React, { Component } from 'react';
import Photo from './photo';
import Rebase from 're-base';
var base = Rebase.createClass('https://celeste-matt.firebaseio.com');

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    this.photosRef = base.bindToState('photos', {
      context: this,
      state: 'photos',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.photosRef);
  }

  render() {
    var photosArray = this.state.photos.map(function(data){
        return <Photo {...data} />
    })

    return (
      <div>
        <div className='main'>
          <div className='story details'>
            <p className='p-note'>Take photos at our wedding events using WedPics under wedding Id: CELESTEMATTWED</p>
            <div className='download'><a href="https://appsto.re/us/ZBZVG">Download it now</a></div>
          </div>
          <ul className='gallery'>
            {photosArray}
          </ul>
        </div>
      </div>
    );
  }
}