import React, { Component } from 'react';
import { FaKiwiBird } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/styles';

export default class Contato extends Component {

  render() {

    return (
      <Footer>

        <footer className="footer">
          <div className="footer-left">
            <div className="logo">
              <img className="logoImg" src="/images/logo.png" alt="logo" />
              {/* <FaKiwiBird className="joaoBarro" color="#fff" size={45} /> */}
              <span>IJB</span>
            </div>
            <p>
              O Instituto João de Barro é uma associação sem fins lucrativos que tem como objetivo principal proporcionar
              moradia digna a famílias de baixa renda. Deste modo toda
              ajuda é bem-vinda! Fique a vontade para entrar no time de <strong>
                <a className="membro" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScxnO3xYnl3fob40dW3eO3WRkAwWtlaFh0YP_-3z_VqtEGOjw/viewform">Voluntários!</a>
              </strong>
            </p>
            <div className="socials">
              <a target='_blank' href="https://www.facebook.com/joao.de.barro.franca/"><i className="fab fa-facebook-square icone"></i></a>
              {/* <a href=""><i className="fab fa-pinterest-square icone"></i></a>
              <a href=""><i className="fab fa-youtube-square icone"></i></a>
              <a href=""><i className="fab fa-tumblr-square icone"></i></a> */}
            </div>
          </div>
          <ul className="footer-right">
            <li>
              <h2>Contato</h2>

              <ul className="box">
                <li><a href="">joaodebarro@gmail.com.br</a></li>
                <li><a href="">+55 (16) 99558-9874</a></li>
                <li><a href="">+55 (16) 99558-9998</a></li>
                <li><a href="">+55 (16) 3741-8722</a></li>
              </ul>
            </li>

            <li className="features">
              <h2>Saiba mais</h2>

              <ul className="box">
                <li><Link to="/historia">História </Link></li>
                <li><Link to="/depoimentos">Depoimentos </Link></li>
                <li><Link to="/obras">Construções</Link></li>
                {/* <li><a href="">História</a></li>
                <li><a href="">Parceiros</a></li>
                <li><a href="">Campanhas</a></li>
                <li><a href="">Construções</a></li> */}
              </ul>
            </li>

            <li>
              <h2>Localização</h2>

              <ul className="box">
                <li><a href="">Avenida Ademar de Barros, 12345</a></li>
                <li><a href="">Franca - São Paulo</a></li>
                <li><a href="">Brasil</a></li>
              </ul>
            </li>
          </ul>

          <div className="footer-bottom">
            <p>Todos direitos reservados por &copy; Fatec 2021</p>
          </div>
        </footer>
      </Footer>
    );

  }
}

