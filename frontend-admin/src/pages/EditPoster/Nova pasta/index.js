import React, { Component, useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'

import swal from 'sweetalert';
import * as Yup from 'yup';
import api from '../../../services/api';

import Navbar from '../../../components/Menu';
import Contato from '../../../components/Footer';
import { Container, Input, Select, InputFile, PosterImg } from '../styles';

import { FaUpload } from 'react-icons/fa';


export default function Postagens() {

  const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');
  
  const { id } = useParams();

  

  const data = new FormData();

  const [images, setImages] = useState([]);
  const [poster, setPoster] = useState({});
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [typePost, setTypePost] = useState();
  const [modePost, setModePost] = useState();
  const [title, setTitle] = useState();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  const [unities, setUnities] = useState();
  const [description, setDescription] = useState();

  const [situation, setSituation] = useState();
 

  useEffect(() => {
    const getData = async () => {
      let response = await api.get(`/posters/files/${id}`);
      await setImages(response.data);

      let { data } = await api.get(`/posters/${id}`);
      setPoster(data);
      setName(data.advertiser_name);
      setEmail(data.email);
      setPhone(data.phone);
      setTypePost(data.type_post);
      setModePost(data.mode_post);
      setTitle(data.poster_name);
      setProduct(data.product);
      setQuantity(data.quantity);
      setUnities(data.unities);
      setDescription(data.description);
      setSituation(data.situation);
      
    }
    getData();
  }, []);

  // const initialFormData = ({
  //   advertiser_name: name,
  //   email: email,
  //   phone: phone,
  //   type_post: typePost,
  //   mode_post: modePost,
  //   poster_name: title,
  //   product: product,
  //   quantity: quantity,
  //   unities: unities,
  //   description: description,
  //   file: [{}],
  // });

  const [formData, updateFormData] = useState(
    {"advertiser_name": name,
    "email": email,
    "phone": phone,
    "type_post": typePost,
    "mode_post": modePost,
    "poster_name": title,
    "product": product,
    "quantity": quantity,
    "unities": unities,
    "description": description,
    "situation": situation,
    "file": [{}],}
  );

  console.log('formData' + formData.advertiser_name);
  
 
  const handleInputName = ({ target: { value } }) => setName(value);
  const handleInputEmail = ({ target: { value } }) => setEmail(value);
  const handleInputPhone = ({ target: { value } }) => setPhone(value);
  const handleInputTypePost = ({ target: { value } }) => setTypePost(value);
  const handleInputModePost = ({ target: { value } }) => setModePost(value);
  const handleInputTitle = ({ target: { value } }) => setTitle(value);
  const handleInputProduct = ({ target: { value } }) => setProduct(value);
  const handleInputQuantity = ({ target: { value } }) => setQuantity(value);
  const handleInputUnities = ({ target: { value } }) => setUnities(value);
  const handleInputDescription = ({ target: { value } }) => setDescription(value);

  // const initialFormData = ({
  //   advertiser_name: name,
  //   email: email,
  //   phone: phone,
  //   type_post: typePost,
  //   mode_post: modePost,
  //   poster_name: title,
  //   product: product,
  //   quantity: quantity,
  //   unities: unities,
  //   description: description,
  //   file: [{}],
  // });


  // const [data, updateData] = useState(initialFormData);

  // const [formData, updateFormData] = React.useState(initialFormData);
  // var data = new FormData();
  

  // console.log('data ' + data);
  

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

  const erro = (e) => {
    if (e.target.name == 'advertiser_name') {
      setErrName('');
      let name = e.target.value.trim();
      if (!name) {
        setErrName('Digite um nome v??lido.');
      }
    } 

    if (e.target.name == 'email') {
      setErrEmail('');
      let email = e.target.value.trim();
      if (!email) {
        setErrEmail('Digite seu email de contato.');
      }
    }

    if (e.target.name == 'phone') {
        setErrPhone('');
        let phone = e.target.value.trim();
        if (!phone) {
          setErrPhone('Digite um telefone.');
        }
      }

    if (e.target.name == 'type_post') {
      setErrType('');
      let typePost = e.target.value.trim();
      if (!typePost) {
        setErrType('Tipo de an??ncio n??o selecionado.');
      }
    }

    if (e.target.name == 'mode_post') {
      setErrMode('');
      let modePost = e.target.value.trim();
      if (!modePost) {
        setErrMode('Modalidade de publica????o n??o selecionado.');
      }
    }

    if (e.target.name == 'poster_name') {
      setErrPost('');
      let title = e.target.value.trim();
      if (!title) {
        setErrPost('Digite um T??tulo para o an??ncio.');
      }
    }

    
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

       if (e.target.name == 'description') {
      setErrDesc('');
      let description = e.target.value.trim();
      if (!description) {
        setErrDesc('Digite uma descri????o para este an??ncio.');
      }
    }

    updateFormData({
      // ...formData,
      [e.target.name]: e.target.value.trim()
    });
    // console.log('name ' + formData.name)

    // updateFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value
    // });
    // console.log('name ' + formData.name)
    
  }

  const handleButton = async (e) => {
    await setSituation(e.target.value);
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

    // if (!data.advertiser_name) {
    //   setErrName('Digite um nome v??lido.');
    // }

    // if (!data.email) {
    //   setErrEmail('Digite seu email de contato');
    // }

    // if (!data.type_post) {
    //   setErrType('Tipo de an??ncio n??o selecionado.');
    // }

    // if (!data.mode_post) {
    //   setErrMode('Modalidade de publica????o n??o selecionado.');
    // }

    // if (!data.poster_name) {
    //   setErrPost('Digite um T??tulo para o an??ncio.');
    // }

    // if (anuncioType == 'produto') {
    //   if (!data.product) {
    //     setErrProd('Digite o nome do seu produto anunciado.');
    //   }
    //   if (!data.quantity) {
    //     setErrProd('Digite a quantidade do produto.');
    //   }
    //   if (!data.unities) {
    //     setErrProd('Selecione uma unidade de medida.');
    //   }
    // }

    // if (!data.description) {
    //   setErrDesc('Digite uma descri????o para este an??ncio.');
    // }

    // if (!formData.file[0].name) {
    //   setErrFile('Fa??a upload de pelo menos uma foto');
    // }

    // if (data.file.length > 5) {
    //   setErrFile('Fa??a upload de no m??ximo 5 imagens');
    // }

    
    // data.append('advertiser_name', name);
    // data.append('email', email);
    // data.append('phone', phone);
    // data.append('type_post', typePost);
    // data.append('mode_post', modePost);
    // data.append('poster_name', title);

    // data.append('product', product);
    // data.append('quantity', quantity);
    // data.append('unities', unities);

    // data.append('description', description);

    //  console.log('data' + data);

    // formData.file.map(file => {
    //   data.append('file', file);
    // })



    // if (
    //   !formData.advertiser_name ||
    //   !formData.email ||
    //   !formData.type_post ||
    //   !formData.mode_post ||
    //   !formData.poster_name ||
    //   !formData.description ||
    //   // !formData.file[0].name ||
    //   errProd
    // ) {
    //   swal("Ops!", "N??o foi poss??vel publicar o an??ncio...verifique os dados 1", "error");
    //   return;
    // }

    console.log(name);
    console.log(email);

    updateFormData(
      {"advertiser_name": name,
      "email": email,
      "phone": phone,
      "type_post": typePost,
      "mode_post": modePost,
      "poster_name": title,
      "product": product,
      "quantity": quantity,
      "unities": unities,
      "description": description,
      "situation": situation,
      "file": [{}],}
    );

    // data.append('situation', situation);


    

    try {
      console.log(formData);
      console.log(situation)
      await api.put(`/posters/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: {"advertiser_name": name,
        "email": email,
        "phone": phone,
        "type_post": typePost,
        "mode_post": modePost,
        "poster_name": title,
        "product": product,
        "quantity": quantity,
        "unities": unities,
        "description": description,
        "situation": situation,
        "file": [{}],}
      });
      swal("Enviado!", "Seu an??ncio foi publicado com sucesso!", "success");
      <Redirect to='/postagens'/>
    } catch (e) {
      swal("Ops!", "N??o foi poss??vel publicar o an??ncio...verifique os dados 2", "error");
      return;
    }

    // updateFormData(initialFormData);

  }


  return (

    <>
      <Navbar />

      <Container>
        <div>

        </div>
        <h2>An??ncio IJB</h2>

        <form
          id="myForm"
          name="myForm"
          ref={formRef}
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >

<PosterImg>
            {
              images.length ?
                images.map(image => (
                  <img src={image.url} alt={'images'} width={500} />
                ))
                : null
            }
          </PosterImg>



          <div>
            <label htmlFor="">Nome *</label>
            <Input
              // {...register("advertiser_name")}
              defaultValue={name}
              name="advertiser_name"
              type="text"
              onChange={handleInputName}
              onBlur={erro}
            />
            {errName && <span className="messageError">{errName}</span>}
          </div>

          <div>
            <label htmlFor="">E-mail *</label>
            <Input
              // {...register("email")}
              defaultValue={email}
              name="email"
              type="email"
              onChange={handleInputEmail}
              onBlur={erro}
            />
            {errEmail && <span className="messageError">{errEmail}</span>}
          </div>

          <div>
          <label htmlFor="">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            value={phone}
            name="phone"
            onChange={handleInputPhone}
            onBlur={erro}
           
          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          </div>
          
          <label htmlFor="">Tipo do An??ncio *</label>
          <Select
            ref={selectRef}
            // {...register("type_post")}
            id="type_post"
            value={typePost}
            name="type_post"
            // onBlur={postType}
            id="typePost"
            onChange={handleInputTypePost}
            onBlur={erro}
          >
            <option value="">Selecione...</option>
            <option value="produto">Material</option>
            <option value="servico">Trabalho Volunt??rio</option>
          </Select>
          {errType && <span className="messageError">{errType}</span>}

          <label htmlFor="">Modo de Negocia????o *</label>
          <Select
            // {...register("mode_post")}
            value={modePost}
            name="mode_post"
            onChange={handleInputModePost}
            onBlur={erro}
          >
            <option value="">Selecione...</option>
            <option value="doacao">Doa????o</option>
            <option value="negociacao">Poss??vel Negocia????o</option>
          </Select>
          {errMode && <span className="messageError">{errMode}</span>}

          <label htmlFor="">T??tulo do An??ncio *</label>
          <Input
            // {...register("poster_name")}
            defaultValue={title}
            name="poster_name"
            type="text"
            onChange={handleInputTitle}
            onBlur={erro}
          />
          {errPost && <span className="messageError">{errPost}</span>}

          {
            typePost == "produto" ? (
              <>
                <label htmlFor="">Produto *</label>
                <Input
                  // {...register("product")}
                  defaultValue={product}
                  name="product"
                  type="text"
                  onChange={handleInputProduct}
                  onBlur={erro}
                />
                {errProd && <span className="messageError">{errProd}</span>}

                <div className="prodInfo">

                  <div className="quantity">
                    <label htmlFor="">Quantidade *</label>
                    <Input
                      // {...register("product")}
                      value={quantity}
                      name="quantity"
                      type="number"
                      onChange={handleInputQuantity}
                      onBlur={erro}
                    />
                    {errQtde && <span className="messageError">{errQtde}</span>}
                  </div>

                  <div className="unities">
                    <label htmlFor="">Unidade de Medida *</label>
                    <Select
                      // {...register("mode_post")}
                      value={unities}
                      name="unities"
                      onChange={handleInputUnities}
                      onBlur={erro}
                    >
                      <option value="">Selecione...</option>
                      <option value="unidades">Unidades</option>
                      <option value="kilos">Kilos</option>
                      <option value="litros">Litros</option>
                      <option value="caixas">Caixas</option>
                      <option value="metros2">Metros ??</option>
                      <option value="metros3">Metros ??</option>
                      <option value="latas">Latas</option>
                      <option value="barris">Barris</option>
                    </Select>
                    {errUnit && <span className="messageError">{errUnit}</span>}
                  </div>
                </div>
              </>
            ) : ''
          }

          <label htmlFor="">Descri????o *</label>
          <Input
            // {...register("description")}
            defaultValue={description}
            name="description"
            type="text"
            onChange={handleInputDescription}
            onBlur={erro}
          />
          {errDesc && <span className="messageError">{errDesc}</span>}


          <div>
            {/* Colocando primeira letra mai??scula */}
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
                Dispon??vel
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
                value="rejeitado"
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
