import React, { Component, useContext, useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import { FaKiwiBird } from 'react-icons/fa'
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import { Link, Redirect } from 'react-router-dom';
import { Container, Conteudo, Form, PlanoFundo } from './styles';
import { boolean } from 'yup';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

export default function Usuario() {

  const initialFormData = Object.freeze({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errName, setErrName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPhone, setErrPhone] = useState('');
  const [errPass, setErrPass] = useState('');

  const [formData, updateFormData] = useState(initialFormData);
  const [phone, updatePhone] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });

    if (e.target.name == "phone") {
      const phone = onlyNumbers(e.target.value);
      updateFormData({
        ...formData,
        "phone": phone
      });
    }

    if (e.target.name == 'name') {
      setErrName('');
      let name = e.target.value.trim();
      if (!name) {
        setErrName('O campo nome é obrigatório.')
      }
    }

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
    console.log(formData);

    if (errName || errEmail || errPass || !formData.name || !formData.email || !formData.password) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error");
      return;
    }

    try {
      const dados = await api.post(`/users`, formData);
      const user = dados.data.id;

      if (user) {
        return history.push('/login');
      }

      // console.log(formData);
      // return history.push('/');
    } catch (e) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error");
      return;
    }

  }


  return (
    <>
      <PlanoFundo>
        <Container>
          <div className="image">
            <div className="conteudo">
              <img className="logo" src="/images/logo.png" alt="logo" />
              {/* <FaKiwiBird className="logo" color="#fff" size={35} /> */}
              <h4>Bem-vindo!</h4>
              <h5>Estamos quase lá...</h5>
            </div>
          </div>

          <Conteudo>
            <h4 className="titulo">Crie uma conta</h4>
            <Form onSubmit={handleSubmit}>

              <input
                type="text"
                className="user"
                name="name"
                placeholder="Informe seu nome"
                onChange={handleChange}
              />
              {errName && <span className="messageError">{errName}</span>}

              <input
                type="email"
                className="email"
                name="email"
                placeholder="Informe seu melhor email"
                onChange={handleChange}
              />
              {errEmail && <span className="messageError">{errEmail}</span>}

              <InputMask
                mask="(99) 99999-9999"
                type="text"
                className="phone"
                name="phone"
                // value={phone}
                placeholder="Informe seu celular"
                onChange={handleChange}
              />

              <input
                type="password"
                className="pass"
                name="password"
                placeholder="Informe uma senha para o acesso"
                onChange={handleChange}
              />
              {errPass && <span className="messageError">{errPass}</span>}

              <Link to="/login"
                className="torneMembro">
                Já é membro do projeto ? Clique aqui
              </Link>

              <button
                type="submit"
                className="btn"
              >
                CADASTRAR-SE
              </button>
            </Form>



          </Conteudo>
        </Container>
      </PlanoFundo>
    </>
  );

}