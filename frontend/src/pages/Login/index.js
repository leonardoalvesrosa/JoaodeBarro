import React, { Component, useContext, useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import { FaKiwiBird } from 'react-icons/fa'
import swal from 'sweetalert';

import { Link, Redirect } from 'react-router-dom';

import { Container, Conteudo, Form, PlanoFundo, Inicio } from './styles';
import { boolean } from 'yup';

export default function Login() {

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  }


  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [errEmail, setErrEmail] = useState('');
  const [errPass, setErrPass] = useState('');

  const [formData, updateFormData] = useState(initialFormData);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const handleChange = (e) => {

    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });

    if (e.target.name == 'email') {
      setErrEmail('');
      let email = e.target.value.trim();
      if (!email) {
        setErrEmail('O campo email é obrigatório.')
      }
    }

    if (e.target.name == 'password') {
      setErrPass('');
      let password = e.target.value.trim();
      let passArray = password.split('');
      if (passArray.length < 6) {
        setErrPass('A senha deve ter no mínimo 6 dígitos.')
      }
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    if (errEmail || errPass || !formData.email || !formData.password) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error");
      return;
    }

    try {
      const dados = await api.post(`/session`, formData);
      const token = dados.data.token;

      if (dados.data.token) {
        setToken(token);
        armazenar('ls_name', dados.data.user.name);
        armazenar('ls_token', dados.data.token);

        return history.push('/');
      }

      // console.log(formData);
      // return history.push('/');
    } catch (e) {
      swal("Ops!", "Usuário não foi encontrado...mas você pode criar sua conta!", "error");
    }
  }


  return (
    <>
      <PlanoFundo>
        <Inicio>
          <Link to='/'><h2>Acesso sem conta</h2></Link>
        </Inicio>

        <Container>
          <div className="image">
            <div className="conteudo">
              <img className="logo" src="/images/logo.png" alt="logo" />
              {/* <FaKiwiBird className="logo" color="#fff" size={35} /> */}
              <h4>Bem-vindo!</h4>
            </div>
          </div>

          <Conteudo>
            <h4>Login</h4>
            <Form onSubmit={handleSubmit}>

              <div className="input-form">
                <input
                  type="text"
                  className="user"
                  name="email"
                  placeholder="Informe seu email"
                  onChange={handleChange}
                />
                {errEmail && <span className="messageError">{errEmail}</span>}

                <input
                  type="password"
                  className="pass"
                  name="password"
                  placeholder="Informe sua senha"
                  onChange={handleChange}
                />
                {errPass && <span className="messageError">{errPass}</span>}
              </div>

              <Link to="/membro"
                className="torneMembro">
                Não possuí login ? Torne-se um membro IJB
              </Link>

              <button
                type="submit"
                className="btn"
              >
                ENTRAR
              </button>
            </Form>



          </Conteudo>
        </Container>
      </PlanoFundo>
    </>
  );

}