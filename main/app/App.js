import React, {Component} from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import {render} from 'react-dom';
import Reception from './reception.js';
import Home from './home.js';
import Ourstory from './ourstory.js';
import OurWeddingParty from './ourweddingparty.js';
import Wrapper from './wrapper.js'
import Registry from './registry.js'
import Rsvp from './rsvp.js'
import Accomodations from './accomodations.js'
import Attractions from './attractions.js'
import Photos from './photos.js'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Wrapper}>
          <Route path="/" component={Home} />
          <Route path="/ourstory" component={Ourstory} />
          <Route path="/ourweddingparty" component={OurWeddingParty} />
          <Route path="/details" component={Reception} />
          <Route path="/rsvp" component={Rsvp} />
          <Route path="/accomodations" component={Accomodations} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/registry" component={Registry} />
          <Route path="/photos" component={Photos} />
        </Route>
      </Router>
    )
  }
}


render(<App />, document.getElementById('wrapper'));