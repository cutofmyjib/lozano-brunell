import React, { Component } from 'react';

export default class Story extends Component {
  render() {
    //break huge block of text into paragraphs
    var story = this.props.story.split("\n")
    var paragraphs = story.map(function(paragraph) {
      return <p className='para-break'>{paragraph}</p>
    })
    return (
      <div className='story'>
        <h2>{this.props.heading}</h2>
        {paragraphs}
      </div>
    );
  }
}