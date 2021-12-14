import React, { Component, useState } from 'react';
import { FaKiwiBird } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

import { Menu, Logo } from '../../components/Menu/styles';
import UserImg from '../../icons/user2.png';
import LogoffImg from '../../icons/sair.png';

export default function Navbar() {


  function apagar(chaves) {
    chaves.map((chave) => {
      localStorage.removeItem(chave);
    })
  }



  return (
    <Menu>
      <nav>
        <input type="checkbox" id="check" />

        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <img className="logoImg" src="/images/logo.png" alt="logo" />
        {/* <FaKiwiBird className="joaoBarro" color="#fff" size={35} /> */}
        <Logo to="/" className="logo">IJB</Logo>



        <ul>
          <li>{localStorage.getItem('ls_name') ? <h3>Olá, {localStorage.getItem('ls_name')[0].toUpperCase() + localStorage.getItem('ls_name').substr(1)}!</h3> : null}</li>
          <div className="logon">
            {localStorage.getItem('ls_name') ? <img className="icone" src={LogoffImg} alt="user" /> : <img className="icone" src={UserImg} alt="user" />}
            <li className="itemsRestritos"><NavLink to="/login" onClick={() => apagar(['ls_name', 'ls_token', 'token'])}>{localStorage.getItem('ls_name') ? "Sair" : "Entrar"} </NavLink></li>
          </div>
        </ul>


        <ul className="menu">
          <li><NavLink to="/historia" activeStyle={{ color: 'white', fontWeight: 'bold' }}>História </NavLink></li>
          <li><NavLink to="/depoimentos" activeStyle={{ color: 'white', fontWeight: 'bold' }}>Depoimentos </NavLink></li>
          <li><NavLink to="/obras" activeStyle={{ color: 'white', fontWeight: 'bold' }}>Obras</NavLink></li>
          <li className="EntrarSair">{localStorage.getItem('ls_name') ? <NavLink to="/postagens" activeStyle={{ color: 'white', fontWeight: 'bold' }}>Anúncios </NavLink> : null}</li>

          {(!localStorage.getItem('ls_name')) &&
            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScxnO3xYnl3fob40dW3eO3WRkAwWtlaFh0YP_-3z_VqtEGOjw/viewform">
              Torne-se um membro
            </a>}
        </ul>


      </nav>
    </Menu>
  );

}
