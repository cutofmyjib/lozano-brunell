import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      position                   : 'absolute',
      margin                     : '30 auto',
      border                     : '1px solid #ccc',
      overflow                   : 'hidden',
      background                 : '#fff',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '0',
      outline                    : 'none',
      padding                    : '6px'
  }
}
export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <div>
          <li onClick={ this.openModal.bind(this) } ><img src={this.props.url} /></li>
        </div>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal.bind(this) }
          style={ customStyles } >
          <img className='img-modal' src={this.props.url} />
        </Modal>
      </div>
    );
  }
}