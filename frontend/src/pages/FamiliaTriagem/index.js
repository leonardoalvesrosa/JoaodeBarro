import React, { Component, useRef, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
// import { useForm } from "react-hook-form";
// import Select from 'react-select'

import * as Yup from 'yup';
import api from '../../services/api';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { Container, Input, Select, InputFile } from './styles';

import { FaUpload } from 'react-icons/fa';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');


export default function InsereAnuncio() {

  const initialFormData = Object.freeze({
    //indicadores
    // data_indicacao: "",
    // data_preenchimento: "",
    name: "",
    visit_date: "",
    register_number: "",
    knows_family: "",
    indicator_phone: "",


    //indicados
    //idindicador, salvar após o insert do indicador
    indicated_name: "",
    rg: "",
    cpf: "",
    birth_date: "",
    age: "",
    schooling: "",
    income_amount: "",
    income_origin: "",
    health_problems: "",
    address: "",
    number: "",
    complement: "",
    district: "",
    zip_code: "",
    phone_1: "",
    phone_2: "",
    phone_3: "",

    //Composição familiar
    //idindicado, salvar após o insert do indicado
    family_quantity: "",
    name_fcomp: "",
    birth_date_fcomp: "",
    age_fcomp: "",
    kinship_fcomp: "",
    schooling_fcomp: "",
    income_amount_fcomp: "",
    income_origin_fcomp: "",
    health_problems_fcomp: "",

    //Dados do Imóvel
    id_type_fk: "",
    id_condition_fk: "",
    rent_amount: "",
    owner_name: "",
    imo_deed_contract: "",
    has_land: "",
    land_owner_name: "",
    land_deed_contract: "",
    address_land: "",
    number_land: "",
    complement_land: "",
    district_land: "",
    zip_code_land: "",
    id_necessity_fk: "",
    how_long_live_franca: "",
    where_they_lived: "",
    details: "",

    


    //Verificar como fazer
    //inserir outros dados do formulário

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

  const [anuncio, setAnuncio] = useState({});
  const [anuncioType, setAnuncioType] = useState();
  const [familyQuantity, setfamilyQuantity] = useState(0);

  const formRef = useRef(null);
  const selectRef = useRef(null);
  var isProduct = false;

  const optionsType = [
    { value: "produto", label: "Material" },
    { value: "servico", label: "Trabalho Voluntário" }
  ];

  const optionsMode = [
    { value: "doacao", label: "Doação" },
    { value: "negociacao", label: "Possível Negociação" }
  ];

  const handleChange = (e) => {

    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
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

    if (e.target.name == 'product' && anuncioType == 'produto') {
      setErrProd('');
      let product = e.target.value.trim();
      if (!product) {
        setErrProd('Digite o nome do seu produto anunciado.');
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

    if (!formData.product && anuncioType == 'produto') {
      setErrProd('Digite o nome do seu produto anunciado.');
    }

    if (!formData.description) {
      setErrDesc('Digite uma descrição para este anúncio.');
    }

    if (!formData.file[0].name) {
      setErrFile('Faça upload de pelo menos uma foto');
    }

    // console.log(formData);

    data.append('advertiser_name', formData.advertiser_name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('type_post', formData.type_post);
    data.append('mode_post', formData.mode_post);
    data.append('poster_name', formData.poster_name);
    data.append('product', formData.product);
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
      setErrProd
    ) {
      swal("Ops!", "Não foi possível publicar o anúncio...verifique os dados", "error");
      return;
    }

    // console.log(data);
    try {
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
  }

  // async function onSubmit(data) {
  //   const anuncio = data;

  //   console.log(anuncio);
  //   await api.post(`/posters`, anuncio);
  // }


  function postType() {
    const typePost = (document.getElementById('typePost').value);

    setAnuncioType(typePost);
    // console.log('typePost: ' + typePost);
    // console.log('anuncioType: ' + anuncioType);
  }

  function postFamilyQuantity() {
    const postFamilyQuantity = (document.getElementById('familyQuantityPost').value);

    setfamilyQuantity(postFamilyQuantity);
    console.log(familyQuantity)
    // console.log('typePost: ' + typePost);
    // console.log('anuncioType: ' + anuncioType);
  }

  // function createFamilyComposition(){
   
  //   for(let i = 0; i <= familyQuantity; i++){
  //     return (
  //       <>
  //         <h3>Familiar {i + 1}</h3>
  //         <div>
  //           <label htmlFor="">Nome</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="name_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Data de Nasc.:</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="birth_date_fcomp"
  //             type="date"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Idade</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="age_fcomp"
  //             type="number"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Parentesco</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="kinship_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Escolaridade</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="schooling_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Valor da renda</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="income_amount_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Origem da renda</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="income_origin_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>

  //         <div>
  //           <label htmlFor="">Possui problemas de saúde ou necessidades pessoais? (se sim, descrever)</label>
  //           <Input
  //             // {...register("advertiser_name")}
  //             name="health_problems_fcomp"
  //             type="text"
  //             onChange={handleChange}
  //           />
  //           {/* {errName && <span className="messageError">{errName}</span>} */}
  //         </div>
  //       </>
  //     )
  //   }
    
  // }

  function createFamilyComposition(familyQuantity){

    console.log('familyQuantity ' + familyQuantity)
  
    for(let i = 0; i < familyQuantity; i++){
      console.log('i = ' + i)
      return (
        <>
          <h3>Familiar {i + 1}</h3>
          <div>
            <label htmlFor="">Nome</label>
            <Input
              // {...register("advertiser_name")}
              name="name_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Data de Nasc.:</label>
            <Input
              // {...register("advertiser_name")}
              name="birth_date_fcomp"
              type="date"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Idade</label>
            <Input
              // {...register("advertiser_name")}
              name="age_fcomp"
              type="number"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Parentesco</label>
            <Input
              // {...register("advertiser_name")}
              name="kinship_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Escolaridade</label>
            <Input
              // {...register("advertiser_name")}
              name="schooling_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Valor da renda</label>
            <Input
              // {...register("advertiser_name")}
              name="income_amount_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Origem da renda</label>
            <Input
              // {...register("advertiser_name")}
              name="income_origin_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Possui problemas de saúde ou necessidades pessoais? (se sim, descrever)</label>
            <Input
              // {...register("advertiser_name")}
              name="health_problems_fcomp"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>
        </>
      )
    }
    
  }

  
  return (

    
    <>
      <Navbar />

      <Container>
        <h2>Cadastro de Famílias para Triagem</h2>

        <form
          ref={formRef}
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >

          {/* Início da primeira linha */}
          <div>
            {/* <div>
              <label htmlFor="">Data da indicação *</label>
              <Input
                // {...register("advertiser_name")}
                name="data_indicacao"
                type="date"
                onChange={handleChange}
              />
              {errName && <span className="messageError">{errName}</span>}
            </div> */}

            {/* <div>
              <label htmlFor="">Data do Preenchimento *</label>
              <Input
                // {...register("advertiser_name")}
                name="data_preenchimento"
                type="date"
                onChange={handleChange}
              />
             {errName && <span className="messageError">{errName}</span>}
            </div> */}

            <div>
              <label htmlFor="">Data da Visita</label>
              <Input
                // {...register("advertiser_name")}
                name="visit_date"
                type="date"
                onChange={handleChange}
              />
              {/* {errName && <span className="messageError">{errName}</span>} */}
            </div>

            <div>
              <label htmlFor="">Cadasro Nº</label>
              <Input
                // {...register("advertiser_name")}
                name="register_number"
                type="number"
                onChange={handleChange}
              />
              {/* {errName && <span className="messageError">{errName}</span>} */}
            </div>

          </div>
          {/* Fim da primeira linha */}

          <div>
            <h2>Dados do Indicador</h2>
          </div>
          <div>
            <label htmlFor="">Nome*</label>
            <Input
              // {...register("advertiser_name")}
              name="name"
              type="text"
              placeholder="Digite o nome do indicador"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Como conheceu a família?</label>
            <Input
              // {...register("advertiser_name")}
              name="knows_family"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <label htmlFor="">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            name="indicator_phone"
            // value={phone}
            onChange={handleChange}
          />
          {errPhone && <span className="messageError">{errPhone}</span>}


          <div>
            <h2>Dados do Indicado(a)</h2>
          </div>

          <div>
            <label htmlFor="">Nome</label>
            <Input
              // {...register("advertiser_name")}
              name="indicated_name"
              type="text"
              placeholder="Digite o nome do indicador"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">RG</label>
            <Input
              // {...register("advertiser_name")}
              name="rg"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">CPF</label>
            <Input
              // {...register("advertiser_name")}
              name="cpf"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Data de Nasc.:</label>
            <Input
              // {...register("advertiser_name")}
              name="birth_date"
              type="date"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Idade</label>
            <Input
              // {...register("advertiser_name")}
              name="age"
              type="number"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Escolaridade</label>
            <Input
              // {...register("advertiser_name")}
              name="schooling"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Valor da renda</label>
            <Input
              // {...register("advertiser_name")}
              name="income_amount"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Origem da renda</label>
            <Input
              // {...register("advertiser_name")}
              name="income_origin"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Possui problemas de saúde ou necessidades pessoais? (se sim, descrever)</label>
            <Input
              // {...register("advertiser_name")}
              name="health_problems"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Endereço</label>
            <Input
              // {...register("advertiser_name")}
              name="address"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Número</label>
            <Input
              // {...register("advertiser_name")}
              name="number"
              type="number"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Complemento</label>
            <Input
              // {...register("advertiser_name")}
              name="complement"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Bairro</label>
            <Input
              // {...register("advertiser_name")}
              name="district"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">CEP</label>
            <Input
              // {...register("advertiser_name")}
              name="zip_code"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>


          <label htmlFor="">Telefone 1</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            name="phone_1"
            // value={phone}
            onChange={handleChange}
          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          <label htmlFor="">Telefone 2</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            name="phone_2"
            // value={phone}
            onChange={handleChange}
          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          <label htmlFor="">Telefone 3</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            name="phone_3"
            // value={phone}
            onChange={handleChange}
          />
          {errPhone && <span className="messageError">{errPhone}</span>}

          <div>
            <h2>Composição familiar</h2>
          </div>

          {/* De acordo com a quantidade de pessoas abrir os blocos para preencimento dos dados dos moradores */}
          <div>
            <label htmlFor="">Quantas pessoas moram no imóvel sem considerar o indicado?</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="family_quantity"
              onBlur={postFamilyQuantity}
              id="familyQuantityPost"
              // onChange={postFamilyQuantity}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </Select>
            {errType && <span className="messageError">{errType}</span>}
          </div>

            
          {createFamilyComposition(familyQuantity)}
          {/* começa o if */}
          
         

            
            
          

          {/* fim do if da composição familiar */}

          <div>
            <h2>Dados do Imóvel</h2>
          </div>

          <div>
            <label htmlFor="">Tipo do Imóvel</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="id_type_fk"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">Condição do Imóvel</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="id_condition_fk"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="casa">Alugado</option>
              <option value="apartamento">Próprio</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">Valor do Aluguel</label>
            <Input
              // {...register("advertiser_name")}
              name="rent_amount"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Nome do Proprietário do imóvel</label>
            <Input
              // {...register("advertiser_name")}
              name="owner_name"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">O imóvel tem escritura ou contrato</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="imo_deed_contract"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="escritura">Escritura</option>
              <option value="contrato">Contrato</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">A família possui terreno</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="has_land"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">Nome do Proprietário do terreno</label>
            <Input
              // {...register("advertiser_name")}
              name="land_owner_name"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">O terreno tem escritura ou terreno?</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="land_deed_contract"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="escritura">Escritura</option>
              <option value="contrato">Contrato</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">Endereço</label>
            <Input
              // {...register("advertiser_name")}
              name="address_land"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Número</label>
            <Input
              // {...register("advertiser_name")}
              name="number_land"
              type="number"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Complemento</label>
            <Input
              // {...register("advertiser_name")}
              name="complement_land"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Bairro</label>
            <Input
              // {...register("advertiser_name")}
              name="district_land"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">CEP</label>
            <Input
              // {...register("advertiser_name")}
              name="zip_code_land"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Qual a necessidade da família?</label>
            <Select
              ref={selectRef}
              // {...register("type_post")}
              name="id_necessity_fk"
              onBlur={postType}
              // id="typePost"
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="construcao">Construção</option>
              <option value="reforma">Reforma</option>
              <option value="reforma_ampliacao">Reforma e Ampliação</option>
              <option value="materiais">Doação de materiais de construção</option>
            </Select>
            {/* {errType && <span className="messageError">{errType}</span>} */}
          </div>

          <div>
            <label htmlFor="">Há quanto tempo a família mora em Franca?</label>
            <Input
              // {...register("advertiser_name")}
              name="how_long_live_franca"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Onde moravam anteriormente?</label>
            <Input
              // {...register("advertiser_name")}
              name="where_they_lived"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>

          <div>
            <label htmlFor="">Relatar detalhes da família e onde moram</label>
            <Input
              // {...register("advertiser_name")}
              name="details"
              type="text"
              onChange={handleChange}
            />
            {/* {errName && <span className="messageError">{errName}</span>} */}
          </div>



          <label htmlFor="">Tipo do Anúncio *</label>
          <Select
            ref={selectRef}
            // {...register("type_post")}
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
                  name="product"
                  type="text"
                  onChange={handleChange}
                />
                {errProd && <span className="messageError">{errProd}</span>}
              </>
            ) : ''
          }
          
          <label htmlFor="">Descrição *</label>
          <Input
            // {...register("description")}
            name="description"
            type="text"
            onChange={handleChange}
          />
          {errDesc && <span className="messageError">{errDesc}</span>}

          <InputFile>
            <FaUpload className="" color="#f7f7f7" size={35} />
            <label htmlFor="file">Anexar fotos da família e do imóvel!</label>
            <input
              // {...register("file")}
              name="file"
              type="file"
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