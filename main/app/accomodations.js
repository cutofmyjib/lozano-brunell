import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Accomodations extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='main-title h1-rspnsv'>HOTEL ACCOMODATIONS</h1>
        <div className='story details'>
            <p className='p-note'>The hotels listed below are specifically blocked out at a discounted rate less than the regular price and will expire Sept. 29,2016. We would love for you stay at either of them since is it really close to the reception venue. Feel free to book your own accommodation elsewhere.</p>
            <h2><a className='main-a' href="https://www.starwoodmeeting.com/events/start.action?id=1601155590&key=17CDAE87" target="_blank">Aloft Hotel</a></h2>
            <p>1230 N Old World 3rd St,</p>
            <p>Milwaukee, Wisconsin 53212</p>
            <p><a className='main-a-tel' href="tel:+1-414-290-0347">(414) 290-0347</a></p>
            <div className='break-fig8'></div>
            <h2><a className='main-a' href=" https://reservations.brewhousesuites.com/IRMNet/(S(thhrluzicjtczhsnl4barohn))/login.aspx" target="_blank">THE BREWHOUSE INN &amp; SUITES</a></h2>
            <h2 className='h2-italic'>Group id: LOZBRU</h2>
            <p>1215 N. 10th Street, <br/> Milwaukee, WI 53205</p>
            <p className='p-note'>You will be able to add on discounted valet parking of $23 at the time of booking instead of $26 at the time of check in.</p>
        </div>
        <div className='break-heartknot'></div>
      </div>
    );
  }
}