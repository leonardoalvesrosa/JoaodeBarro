import React, { Component, useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
// import { useForm } from "react-hook-form";
// import Select from 'react-select'
import swal from 'sweetalert';
import * as Yup from 'yup';
import api from '../../services/api';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { Container, Input, Select, InputFile } from './styles';

import { FaUpload } from 'react-icons/fa';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');


export default function InsereAnuncio() {

  const initialFormData = Object.freeze({
    advertiser_name: "",
    email: "",
    phone: "",
    type_post: "",
    mode_post: "",
    poster_name: "",
    product: "",
    quantity: 0,
    unities: "",
    description: "",
    situation: "analisar",
    file: [{}],
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  const data = new FormData();

  // const { register, handleSubmit } = useForm();
  const [errName, setErrName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPhone, setErrPhone] = useState('');
  const [errType, setErrType] = useState('');
  const [errMode, setErrMode] = useState('');
  const [errPost, setErrPost] = useState('');
  const [errProd, setErrProd] = useState('');
  const [errDesc, setErrDesc] = useState('');
  const [errFile, setErrFile] = useState('');
  const [errQtde, setErrQtde] = useState('');
  const [errUnit, setErrUnit] = useState('');

  const [anuncio, setAnuncio] = useState({});
  const [anuncioType, setAnuncioType] = useState();

  const formRef = useRef(null);
  const selectRef = useRef(null);

  const handleChange = (e) => {

    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.name == 'advertiser_name') {
      setErrName('');
      let name = e.target.value.trim();
      if (!name) {
        setErrName('Digite um nome válido.');
      }
    }

    if (e.target.name == 'email') {
      setErrEmail('');
      let email = e.target.value.trim();
      if (!email) {
        setErrEmail('Digite seu email de contato');
      }
    }

    if (e.target.name == 'type_post') {
      setErrType('');
      let typePost = e.target.value.trim();
      if (!typePost) {
        setErrType('Tipo de anúncio não selecionado.');
      }
    }

    if (e.target.name == 'mode_post') {
      setErrMode('');
      let modePost = e.target.value.trim();
      if (!modePost) {
        setErrMode('Modalidade de publicação não selecionado.');
      }
    }

    if (e.target.name == 'poster_name') {
      setErrPost('');
      let title = e.target.value.trim();
      if (!title) {
        setErrPost('Digite um Título para o anúncio.');
      }
    }

    if (anuncioType == 'produto') {
      if (e.target.name == 'product') {
        setErrProd('');
        let product = e.target.value.trim();
        if (!product) {
          setErrProd('Digite o nome do seu produto anunciado.');
        }
      }
      if (e.target.name == 'quantity') {
        setErrQtde('');
        let qtde = e.target.value.trim();
        if (!qtde) {
          setErrQtde('Digite a quantidade do produto.');
        }
      }
      if (e.target.name == 'unities') {
        setErrUnit('');
        let unit = e.target.value.trim();
        if (!unit) {
          setErrUnit('Selecione uma unidade de medida.');
        }
      }

    }

    if (e.target.name == 'description') {
      setErrDesc('');
      let description = e.target.value.trim();
      if (!description) {
        setErrDesc('Digite uma descrição para este anúncio.');
      }
    }

    if (e.target.name == 'phone') {
      const phone = onlyNumbers(e.target.value);
      updateFormData({
        ...formData,
        "phone": phone
      });
    }

    if (e.target.name == 'file') {
      let dados = [];
      const upload = e.target.files;
      for (let i = 0; i < upload.length; i++) {
        dados.push(upload[i]);
      }
      updateFormData({
        ...formData,
        [e.target.name]: dados
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrName('');
    setErrEmail('');
    setErrType('');
    setErrMode('');
    setErrPost('');
    setErrProd('');
    setErrQtde('');
    setErrUnit('');
    setErrDesc('');
    setErrFile('');

    if (!formData.advertiser_name) {
      setErrName('Digite um nome válido.');
    }

    if (!formData.email) {
      setErrEmail('Digite seu email de contato');
    }

    if (!formData.type_post) {
      setErrType('Tipo de anúncio não selecionado.');
    }

    if (!formData.mode_post) {
      setErrMode('Modalidade de publicação não selecionado.');
    }

    if (!formData.poster_name) {
      setErrPost('Digite um Título para o anúncio.');
    }

    if (anuncioType == 'produto') {
      if (!formData.product) {
        setErrProd('Digite o nome do seu produto anunciado.');
      }
      if (!formData.quantity) {
        setErrProd('Digite a quantidade do produto.');
      }
      if (!formData.unities) {
        setErrProd('Selecione uma unidade de medida.');
      }
    }

    if (!formData.description) {
      setErrDesc('Digite uma descrição para este anúncio.');
    }

    if (!formData.file[0].name) {
      setErrFile('Faça upload de pelo menos uma foto');
    }

    if (formData.file.length > 5) {
      setErrFile('Faça upload de no máximo 5 imagens');
    }

    console.log(formData);

    data.append('advertiser_name', formData.advertiser_name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('type_post', formData.type_post);
    data.append('mode_post', formData.mode_post);
    data.append('poster_name', formData.poster_name);

    data.append('product', formData.product);
    data.append('quantity', formData.quantity);
    data.append('unities', formData.unities);

    data.append('situation', formData.situation);

    data.append('description', formData.description);

    formData.file.map(file => {
      data.append('file', file);
    })



    if (
      !formData.advertiser_name ||
      !formData.email ||
      !formData.type_post ||
      !formData.mode_post ||
      !formData.poster_name ||
      !formData.description ||
      !formData.file[0].name ||
      errProd
    ) {
      swal("Ops!", "Não foi possível publicar o anúncio...verifique os dados", "error");
      return;
    }

    //console.log(data);

    try {
      console.log(data);
      await api.post(`/posters`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      swal("Enviado!", "Seu anúncio foi publicado com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível publicar o anúncio...verifique os dados", "error");
      return;
    }

    updateFormData(initialFormData);

  }


  function postType() {
    const typePost = (document.getElementById('typePost').value);

    setAnuncioType(typePost);
    // console.log('typePost: ' + typePost);
    // console.log('anuncioType: ' + anuncioType);
  }

  return (

    <>
      <Navbar />

      <Container>
        <h2>Cadastro Anúncio IJB</h2>

        <form
          ref={formRef}
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="">Nome *</label>
            <Input
              // {...register("advertiser_name")}
              value={formData.advertiser_name}
              name="advertiser_name"
              type="text"
              onChange={handleChange}
            />
            {errName && <span className="messageError">{errName}</span>}
          </div>

          <div>
            <label htmlFor="">E-mail *</label>
            <Input
              // {...register("email")}
              value={formData.email}
              name="email"
              type="email"
              onChange={handleChange}
            />
            {errEmail && <span className="messageError">{errEmail}</span>}
          </div>

          <label htmlFor="">Telefone</label>

          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            value={formData.phone}
            name="phone"
            // value={phone}
            onChange={handleChange}
          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          <label htmlFor="">Tipo do Anúncio *</label>
          <Select
            ref={selectRef}
            // {...register("type_post")}
            id="type_post"
            value={formData.type_post}
            name="type_post"
            onBlur={postType}
            id="typePost"
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="produto">Material</option>
            <option value="servico">Trabalho Voluntário</option>
          </Select>
          {errType && <span className="messageError">{errType}</span>}

          <label htmlFor="">Modo de Negociação *</label>
          <Select
            // {...register("mode_post")}
            value={formData.mode_post}
            name="mode_post"
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="doacao">Doação</option>
            <option value="negociacao">Possível Negociação</option>
          </Select>
          {errMode && <span className="messageError">{errMode}</span>}

          <label htmlFor="">Tìtulo do Anúncio *</label>
          <Input
            // {...register("poster_name")}
            value={formData.poster_name}
            name="poster_name"
            type="text"
            onChange={handleChange}
          />
          {errPost && <span className="messageError">{errPost}</span>}

          {
            anuncioType == "produto" ? (
              <>
                <label htmlFor="">Produto *</label>
                <Input
                  // {...register("product")}
                  value={formData.product}
                  name="product"
                  type="text"
                  onChange={handleChange}
                />
                {errProd && <span className="messageError">{errProd}</span>}

                <div className="prodInfo">

                  <div className="quantity">
                    <label htmlFor="">Quantidade *</label>
                    <Input
                      // {...register("product")}
                      value={formData.quantity}
                      name="quantity"
                      type="number"
                      onChange={handleChange}
                    />
                    {errQtde && <span className="messageError">{errQtde}</span>}
                  </div>

                  <div className="unities">
                    <label htmlFor="">Unidade de Medida *</label>
                    <Select
                      // {...register("mode_post")}
                      value={formData.unities}
                      name="unities"
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option value="unidades">Unidades</option>
                      <option value="kilos">Kilos</option>
                      <option value="litros">Litros</option>
                      <option value="caixas">Caixas</option>
                      <option value="metros2">Metros ²</option>
                      <option value="metros3">Metros ³</option>
                      <option value="latas">Latas</option>
                      <option value="barris">Barris</option>
                    </Select>
                    {errUnit && <span className="messageError">{errUnit}</span>}
                  </div>
                </div>
              </>
            ) : ''
          }

          <label htmlFor="">Descrição *</label>
          <Input
            // {...register("description")}
            value={formData.description}
            name="description"
            type="text"
            onChange={handleChange}
          />
          {errDesc && <span className="messageError">{errDesc}</span>}

          <InputFile>
            <FaUpload className="" color="#f7f7f7" size={35} />
            <label htmlFor="file">Faça aqui o upload de suas imagens!</label>
            <input
              // {...register("file")}
              name="file"
              type="file"
              accept='image/jpeg,image/png'
              multiple
              id="file"
              onChange={handleChange}
            // onChange={(e) => handleFile(e)}
            />
          </InputFile>
          {errFile && <span className="messageError">{errFile}</span>}


          <button
            type="submit"
          >
            Publicar
          </button>
        </form>

      </Container>

      <Contato />

    </>

  );
}