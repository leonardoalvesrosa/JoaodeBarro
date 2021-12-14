import React, { Component } from 'react';

import Titulo from './styles';

export default class Title extends Component {

  state = {
    text: this.props.value
  }

  render() {
    return (
      <Titulo>
        <div>
          <span>{this.state.text}</span>
        </div>
      </Titulo>
    );

  }
}

