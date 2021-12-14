import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import swal from 'sweetalert';

import { Container } from './styles';

function ModalPosters({ id, isUpdate }) {

  const initialFormData = Object.freeze({
    title: "",
    description: "",
    file: {}
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [poster, setPoster] = useState({});

  const data = new FormData();

  const [errTitle, setErrTitle] = useState('');
  const [errDesc, setErrDesc] = useState('');
  const [errFile, setErrFile] = useState('');

  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/posters/${id}`);
      setPoster(data);
      console.log(poster);
    }
    getData();
  }, []);

  const initialPosters = Object.freeze({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });

    if (e.target.name == 'title') {
      setErrTitle('');
      let title = e.target.value.trim();
      if (!title) {
        setErrTitle('Informe um título para sua campanha.');
      }
    }

    if (e.target.name == 'description') {
      setErrDesc('');
      let desc = e.target.value.trim();
      if (!desc) {
        setErrDesc('Informe uma descrição para sua campanha.');
      }
    }

    if (e.target.name == 'file') {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.files
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let title = formData.title;
    let description = formData.description;

    setErrTitle('');
    setErrDesc('');
    setErrFile('');

    if (!formData.title && !poster.title) {
      setErrTitle('Informe um título para sua camapanha.');
    }

    if (!formData.description && !poster.description) {
      setErrDesc('Informe uma descrição para sua camapanha.');
    }

    if (!formData.file[0]) {
      setErrFile('Faça upload de pelo menos uma imagem.');
    }

    if (!title) {
      title = poster.title;
    }
    if (!description) {
      description = poster.description;
    }

    data.append('title', title);
    data.append('description', description);
    data.append('file', formData.file[0]);


    if (
      (!formData.title && !poster.title) ||
      (!formData.description && !poster.description) ||
      !formData.file[0]
    ) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error");
      return;
    }

    if (isUpdate) {
      console.log(data);
      try {
        await api.put(`/posters/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal("Enviado!", "Seu anúncio foi editado com sucesso!", "success");
      } catch (e) {
        swal("Ops!", "Não foi possível editar seu anúncio...verifique os dados", "error");
        return;
      }
    }
    else {
      try {
        await api.post(`/posters`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal("Enviado!", "Seu anúncio foi cadastrado com sucesso!", "success");
      } catch (e) {
        swal("Ops!", "Não foi possível cadastrar seu anúncio...verifique os dados", "error");
        return;
      }
    }

    updateFormData(initialFormData);
  }


  return (
    <Container>
      <h2>Anúncio</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Nome *</label>
          <input
            type="text"
            name="title"
            defaultValue={poster.advertiser_name}
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>

        <div>
          <label for="title">E-mail *</label>
          <input
            type="text"
            name="email"
            defaultValue={poster.email}
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>

        <div>
          <label for="title">Telefone *</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            className="phone"
            defaultValue={poster.phone}
            name="phone"
            // value={phone}
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>

        <div>
          <label htmlFor="">Tipo do Anúncio *******</label>
          {/* <Select
            ref={selectRef}
            // {...register("type_post")}
            id="type_post"
            value="produto"
            name="type_post"
            onBlur={postType}
            id="typePost"
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="produto">Material</option>
            <option value="servico">Trabalho Voluntário</option>
          </Select>
          {errType && <span className="messageError">{errType}</span>} */}
        </div>

        <div>
          <label htmlFor="">Modo de Negociação ********</label>
          {/* <Select
            // {...register("mode_post")}
            value={formData.mode_post}
            name="mode_post"
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="doacao">Doação</option>
            <option value="negociacao">Possível Negociação</option>
          </Select>
          {errMode && <span className="messageError">{errMode}</span>} */}
        </div>

        <div>
          <label for="title">Título do Anúncio *</label>
          <input
            type="text"
            name="posterName"
            defaultValue={poster.poster_name}
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>


        <div>
          <label for="description">Descrição *</label>
          <textarea
            name="description"
            onChange={handleChange}
          />
          {errDesc && <span className="messageError">{errDesc}</span>}
        </div>

        <div>
          <label for="file">Upload da Imagem *</label>
          <input
            type="file"
            name="file"
            accept='image/jpeg,image/png'
            onChange={handleChange}
          />
          {errFile && <span className="messageError">{errFile}</span>}
        </div>

        <button type="submit">
          Confirmar
        </button>
      </form>
    </Container>
  );
}

export default ModalPosters;