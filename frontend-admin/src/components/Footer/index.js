import React, { Component } from 'react';
import { FaKiwiBird } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/styles';

export default class Contato extends Component {

  render() {

    return (
      <Footer>

        <footer className="footer">
          <div className="footer-bottom">
            <p>Todos direitos reservados por &copy; Fatec 2021</p>
          </div>
        </footer>
      </Footer>
    );

  }
}

