import React, { Component, useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
// import { useForm } from "react-hook-form";
// import Select from 'react-select'
import { useParams } from 'react-router-dom';

import swal from 'sweetalert';
import * as Yup from 'yup';
import api from '../../services/api';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { Container, Input, Select, InputFile } from './styles';

import { FaUpload } from 'react-icons/fa';




export default function Postagens() {

  const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');
  // const inputPhone = (props) => (
  //   <InputMask
  //     mask="(99) 99999-9999"
  //     type="text"
  //     className="phone"
  //     value={Number(poster.phone)}
  //     // value={Number(poster.phone)}
  //     name="phone"
  //     onChange={props.onChange}

  //   />
  // );

  const { id } = useParams();

  const [situation, setSituation] = useState('');
  const [images, setImages] = useState([]);
  const [poster, setPoster] = useState({});

  useEffect(() => {
    const getData = async () => {
      let { imagesData } = await api.get(`/posters/files/${id}`);
      await setImages(imagesData)
      // console.log(images);

      let { data } = await api.get(`/posters/${id}`);
      await setPoster(data);
      // console.log('poster ' + poster.poster);
    }
    getData();
  }, []);

  // console.log(poster.posters[0].id);~
  // console.log(poster);


  const initialFormData = Object.freeze({
    advertiser_name: poster.advertiser_name,
    email: poster.email,
    phone: poster.phone,
    type_post: poster.type_post,
    mode_post: poster.mode_post,
    poster_name: poster.poster_name,
    product: poster.product,
    service: poster.service || " ",
    quantity: poster.quantity,
    unities: poster.unities,
    description: poster.description,
    situation: '',
    file: [{}],
  });

  // const initialFormData = Object.freeze({
  //   advertiser_name: "",
  //   email: "",
  //   phone: "",
  //   type_post: "",
  //   mode_post: "",
  //   poster_name: "",
  //   product: "",
  //   service: "",
  //   quantity: "",
  //   unities: "",
  //   description: "",
  //   situation: "",
  //   file: [{}],
  // });


  const [formData, updateFormData] = React.useState(initialFormData);
  const data = new FormData();

  // console.log(initialFormData.advertiser_name);
  // console.log(initialFormData.email);
  // console.log(initialFormData.phone);
  // console.log(initialFormData.type_post);
  // console.log(initialFormData.mode_post);
  // console.log(initialFormData.poster_name);
  // console.log(initialFormData.product);
  // console.log(initialFormData.quantity);
  // console.log(initialFormData.unities);
  // console.log(initialFormData.description);

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


    // if (e.target.name == 'advertiser_name') {
    //   setErrName('');
    //   let name = e.target.value.trim();
    //   if (!name) {
    //     setErrName('Digite um nome válido.');
    //   }
    // }

    // if (e.target.name == 'email') {
    //   setErrEmail('');
    //   let email = e.target.value.trim();
    //   if (!email) {
    //     setErrEmail('Digite seu email de contato');
    //   }
    // }

    // if (e.target.name == 'type_post') {
    //   setErrType('');
    //   let typePost = e.target.value.trim();
    //   if (!typePost) {
    //     setErrType('Tipo de anúncio não selecionado.');
    //   }
    // }

    // if (e.target.name == 'mode_post') {
    //   setErrMode('');
    //   let modePost = e.target.value.trim();
    //   if (!modePost) {
    //     setErrMode('Modalidade de publicação não selecionado.');
    //   }
    // }

    // if (e.target.name == 'poster_name') {
    //   setErrPost('');
    //   let title = e.target.value.trim();
    //   if (!title) {
    //     setErrPost('Digite um Título para o anúncio.');
    //   }
    // }

    // if (anuncioType == 'produto') {
    //   if (e.target.name == 'product') {
    //     setErrProd('');
    //     let product = e.target.value.trim();
    //     if (!product) {
    //       setErrProd('Digite o nome do seu produto anunciado.');
    //     }
    //   }
    //   if (e.target.name == 'quantity') {
    //     setErrQtde('');
    //     let qtde = e.target.value.trim();
    //     if (!qtde) {
    //       setErrQtde('Digite a quantidade do produto.');
    //     }
    //   }
    //   if (e.target.name == 'unities') {
    //     setErrUnit('');
    //     let unit = e.target.value.trim();
    //     if (!unit) {
    //       setErrUnit('Selecione uma unidade de medida.');
    //     }
    //   }

    // }

    // if (e.target.name == 'description') {
    //   setErrDesc('');
    //   let description = e.target.value.trim();
    //   if (!description) {
    //     setErrDesc('Digite uma descrição para este anúncio.');
    //   }
    // }

    // if (e.target.name == 'phone') {
    //   const phone = onlyNumbers(e.target.value);
    //   updateFormData({
    //     ...formData,
    //     "phone": phone
    //   });
    // }

    // if (e.target.name == 'file') {
    //   let dados = [];
    //   const upload = e.target.files;
    //   for (let i = 0; i < upload.length; i++) {
    //     dados.push(upload[i]);
    //   }
    //   updateFormData({
    //     ...formData,
    //     [e.target.name]: dados
    //   });
    // }
  }

  const handleButton = async (e) => {
    await setSituation(e.target.value);
  }

  const handleSubmit = async (e) => {


    console.log(formData);

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


    // poster.situation = '';
    await setSituation(situation);
    // updateFormData(...formData, situation);
    // console.log(`situation: ${situation}`);


    let advertiserName = formData.advertiser_name;
    let email = formData.email;
    let phone = formData.phone;
    let description = formData.description;
    let typePost = formData.type_post;
    let modePost = formData.mode_post;
    let posterName = formData.poster_name;
    let product = formData.product;
    let service = formData.service;
    let quantity = formData.quantity;
    let unities = formData.unities;
    // let situation = formData.situation;

    // let situation = document.getElementsByClassName('situation').value;
    // console.log(situation);



    // if (!formData.advertiser_name) {
    //   setErrName('Digite um nome válido.');
    // }

    // if (!formData.email) {
    //   setErrEmail('Digite seu email de contato');
    // }

    // if (!formData.type_post) {
    //   setErrType('Tipo de anúncio não selecionado.');
    // }

    // if (!formData.mode_post) {
    //   setErrMode('Modalidade de publicação não selecionado.');
    // }

    // if (!formData.poster_name) {
    //   setErrPost('Digite um Título para o anúncio.');
    // }

    // if (anuncioType == 'produto') {
    //   if (!formData.product) {
    //     setErrProd('Digite o nome do seu produto anunciado.');
    //   }
    //   if (!formData.quantity) {
    //     setErrProd('Digite a quantidade do produto.');
    //   }
    //   if (!formData.unities) {
    //     setErrProd('Selecione uma unidade de medida.');
    //   }
    // }

    // if (!formData.description) {
    //   setErrDesc('Digite uma descrição para este anúncio.');
    // }

    // // if (!formData.file[0].name) {
    // //   setErrFile('Faça upload de pelo menos uma foto');
    // // }

    // if (formData.file.length > 5) {
    //   setErrFile('Faça upload de no máximo 5 imagens');
    // }

    // console.log(formData);


    if (!formData.advertiser_name) {
      advertiserName = poster.advertiser_name;
    }
    if (!formData.email) {
      email = poster.email;
    }
    if (!formData.description) {
      description = poster.description;
    }
    if (!formData.type_post) {
      typePost = poster.type_post;
    }
    if (!formData.mode_post) {
      modePost = poster.mode_post;
    }
    if (!formData.poster_name) {
      posterName = poster.poster_name;
    }
    if (!formData.product) {
      product = poster.product;
    }
    if (!formData.service) {
      service = poster.service;
    }
    if (!formData.quantity) {
      quantity = poster.quantity;
    }
    if (!formData.unities) {
      unities = poster.unities;
    }


    /*
    data.append('advertiser_name', advertiserName);
    // data.append('advertiser_name', formData.advertiser_name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('type_post', typePost);
    data.append('mode_post', modePost);
    data.append('poster_name', posterName);

    data.append('product', product);
    data.append('service', service);
    data.append('quantity', quantity);
    data.append('unities', unities);

    data.append('description', description);
    data.append('situation', situation);

    */

    // formData.file.map(file => {
    //   data.append('file', file);
    // })

    // if (
    //   (!formData.advertiser_name && !advertiserName) ||
    //   (!formData.email && !email) ||
    //   (!formData.type_post && !typePost) ||
    //   (!formData.mode_post && !modePost) ||
    //   (!formData.poster_name && !posterName) ||
    //   (!formData.description && !description) ||
    //   errProd
    // ) {
    //   swal("Ops!", "Não foi possível publicar o anúncio...verifique os dados 1", "error");
    //   return;
    // }

    //console.log(data);



    /*
    try {
      
      const response = await api.put(`/posters/${poster.id}`, formData);
      console.log(response.data);
      // , {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
      swal("Enviado!", "Seu anúncio foi publicado com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível publicar o anúncio...verifique os dados 2", "error");
      return;
    }
    */

    updateFormData(initialFormData);

  }



  function postType() {
    const typePost = (document.getElementById('typePost').value);

    setAnuncioType(typePost);
    // console.log('typePost: ' + typePost);
    // console.log('anuncioType: ' + anuncioType);
  }

  // console.log('images ' + images[0])
  // console.log('poster ' + poster.situation)
  return (

    <>
      <Navbar />

      <Container>
        <div>

        </div>
        <h2>Anúncio IJB</h2>

        <form
          ref={formRef}
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >



          <div>
            <label htmlFor="">Nome *</label>
            <Input
              // {...register("advertiser_name")}
              defaultValue={poster.advertiser_name}
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
              defaultValue={poster.email}
              name="email"
              type="email"
              onChange={handleChange}
            />
            {errEmail && <span className="messageError">{errEmail}</span>}
          </div>

          <label htmlFor="">Telefone</label>

          {/* {inputPhone(Number(poster.phone))} */}
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            value={Number(poster.phone)}
            name="phone"
          // value={phone}

          // onChange={handleChange}

          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          <label htmlFor="">Tipo do Anúncio *</label>
          <Select
            ref={selectRef}
            // {...register("type_post")}
            id="type_post"
            value={poster.type_post}
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
            value={poster.mode_post}
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
            defaultValue={poster.poster_name}
            name="poster_name"
            type="text"
            onChange={handleChange}
          />
          {errPost && <span className="messageError">{errPost}</span>}

          {
            poster.type_post == "produto" ? (
              <>
                <label htmlFor="">Produto *</label>
                <Input
                  // {...register("product")}
                  defaultValue={poster.product}
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
                      value={poster.quantity}
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
                      value={poster.unities}
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
            defaultValue={poster.description}
            name="description"
            type="text"
            onChange={handleChange}
          />
          {errDesc && <span className="messageError">{errDesc}</span>}

          {/* <InputFile>
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
          {errFile && <span className="messageError">{errFile}</span>} */}


          <div>
            {/* Colocando primeira letra maiúscula */}
            {/* <label htmlFor="">Status Atual: {poster.situation[0].toUpperCase() + poster.situation.substr(1)}</label> */}
            <label htmlFor="">Status Atual: {poster.situation}</label>
          </div>
          <br></br>

          <div className="divBotoes">
            <div>
              <button
                onClick={handleButton}
                name="situation"
                className="disponivel"
                id="situation"
                value="disponivel"
                type="submit"
              >
                Disponível
              </button>
            </div>

            <div>
              <button
                onClick={handleButton}
                name="situation"
                value="analisar"
                id="situation"
                className="analisar"
                type="submit"
              >
                Analisar
              </button>
            </div>

            <div>
              <button
                onClick={handleButton}
                name="situation"
                value="rejeitar"
                id="situation"
                className="rejeitar"
                type="submit"
              >
                Rejeitar
              </button>
            </div>
          </div>



        </form>

      </Container>

      <Contato />

    </>

  );
}