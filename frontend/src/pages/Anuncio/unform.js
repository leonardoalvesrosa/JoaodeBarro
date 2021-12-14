import React, { Component, useRef, useEffect, useState } from 'react';

import { Form } from '@unform/web';

import * as Yup from 'yup';
import api from '../../services/api';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { Container } from './styles';

import Input from '../../components/Form/input';
import InputFile from '../../components/Form/file';
import Select from '../../components/Form/select';

export default function InsereAnuncio() {

  const [anuncio, setAnuncio] = useState({});
  const formRef = useRef(null);

  const selectRef = useRef(null);
  const { fieldName, registerField } = useField("type_post");

  const optionsType = [
    { value: "produto", label: "Material" },
    { value: "servico", label: "Trabalho Voluntário" }
  ];

  const optionsMode = [
    { value: "doacao", label: "Doação" },
    { value: "negociacao", label: "Possível Negociação" }
  ];

  async function handleSubmit(data) {
    const anuncio = data;

    console.log(anuncio);
    //await api.post(`/posters`, anuncio);
  }

  return (

    <>
      <Navbar />

      <Container>
        <h2>Cadastro Anúncio JB</h2>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <label htmlFor="">Tipo do Anúncio</label>
          <Select
            ref={selectRef}
            type="select"
            name="type_post"
            options={optionsType}
          />

          <label htmlFor="">Modo de Negociação</label>
          <Select
            type="select"
            name="mode_post"
            options={optionsMode}
          />

          <label htmlFor="">Tìtulo do Anúncio</label>
          <Input type="text" name="poster_name" />

          <label htmlFor="">Nome</label>
          <Input type="text" name="advertiser_name" />

          <label htmlFor="">E-mail</label>
          <Input type="email" name="email" />

          <label htmlFor="">Telefone</label>
          <Input type="text" name="phone" />

          <label htmlFor="">Descrição</label>
          <Input type="text" name="description" />

          {/* <label htmlFor="">ID imagem</label>
          <Input type="text" name="image_id" /> */}

          <label htmlFor="">ID imagem</label>
          <InputFile type="file" name="image_id" />


          <button type="submit">
            Publicar
          </button>
        </Form>

      </Container>

      <Contato />

    </>

  );
}