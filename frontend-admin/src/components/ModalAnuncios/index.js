import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import swal from 'sweetalert';

import { Container } from './styles';

function ModalAnuncio({ id, isUpdate }) {

  const initialCampaign = Object.freeze({
    title: "",
    description: "",
  });

  const initialFormData = Object.freeze({
    title: "",
    description: "",
    file: {}
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [advertise, setAdvertise] = useState({});
  const [title, setTitle] = useState('');
  const data = new FormData();

  const [errTitle, setErrTitle] = useState('');
  const [errDesc, setErrDesc] = useState('');
  const [errFile, setErrFile] = useState('');


  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/advertises/${id}`);
      setAdvertise(data);
    }
    getData();
  }, []);


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
    // console.log(formData);
    // console.log(formData.file);

    if (!formData.title && !advertise.title) {
      setErrTitle('Informe um título para seu anúncio.');
    }

    if (!formData.description && !advertise.description) {
      setErrDesc('Informe uma descrição para seu anúncio.');
    }

    if (!formData.file[0] && !isUpdate) {
      setErrFile('Faça upload de pelo menos uma imagem.');
    }

    if (!title) {
      title = advertise.title;
    }
    if (!description) {
      description = advertise.description;
    }

    data.append('title', title);
    data.append('description', description);
    data.append('file', formData.file[0]);

    // console.log(data);

    if (
      (!formData.title && !advertise.title) ||
      (!formData.description && !advertise.description) ||
      (!formData.file[0] && !isUpdate)) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error");
      return;
    }

    if (isUpdate) {
      try {
        await api.put(`/advertises/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal("Enviado!", "Seu anúncio foi editado com sucesso!", "success");
      } catch (e) {
        swal("Ops!", "Não foi possível editar este anúncio...verifique os dados", "error");
        return;
      }
    }
    else {
      try {
        await api.post(`/campaigns`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal("Enviado!", "Seu anúncio foi cadastrado com sucesso!", "success");
      } catch (e) {
        swal("Ops!", "Não foi possível cadastrar este anúncio...verifique os dados", "error");
        return;
      }
    }


    updateFormData(initialFormData);
  }




  // const fetchData = async () => {
  //   let { data } = await api.get(`/campaigns/${id}`);
  //   setCampaign(data);
  // }


  return (
    <Container>
      <h2>Cadastro de Anúncios</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Título do Anúncio *</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>

        <div>
          <label for="description">Descrição *</label>
          <textarea
            name="description"
            // value={campaign.description}
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

export default ModalAnuncio;