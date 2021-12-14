import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import swal from 'sweetalert';

import { Container } from './styles';

function ModalMaterials({ id, isUpdate }) {

  const initialFormData = Object.freeze({
    title: "",
    description: "",
    file: {}
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [material, setMaterial] = useState({});

  const data = new FormData();

  const [errTitle, setErrTitle] = useState('');
  const [errDesc, setErrDesc] = useState('');
  const [errFile, setErrFile] = useState('');


  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/materials/${id}`);
      setMaterial(data);
      console.log(material);
    }
    getData();
  }, []);


  const initialMaterials = Object.freeze({
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
        setErrTitle('Informe um título para seu anúncio.');
      }
    }

    if (e.target.name == 'description') {
      setErrDesc('');
      let desc = e.target.value.trim();
      if (!desc) {
        setErrDesc('Informe uma descrição para seu anúncio.');
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

    if (!formData.title && !material.title) {
      setErrTitle('Informe um título para seu anúncio.');
    }

    if (!formData.description && !material.description) {
      setErrDesc('Informe uma descrição para seu anúncio.');
    }

    if (!formData.file[0] && !isUpdate) {
      setErrFile('Faça upload de pelo menos uma imagem.');
    }

    if (!title) {
      title = material.title;
    }
    if (!description) {
      description = material.description;
    }

    data.append('title', title);
    data.append('description', description);
    data.append('file', formData.file[0]);

    // console.log(data);

    if (
      (!formData.title && !material.title) ||
      (!formData.description && !material.description) ||
      (!formData.file[0] && !isUpdate)
    ) {
      swal("Ops!", "Por favor, verifique os dados novamente...", "error",);
      return;
    }

    if (isUpdate) {
      console.log(data);
      try {
        await api.put(`/materials/${id}`, data, {
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
        await api.post(`/materials`, data, {
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
  };



  return (
    <Container>
      <h2>O que o IJB precisa?</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Título do anúncio *</label>
          <input
            type="text"
            name="title"
            defaultValue={material.title}
            onChange={handleChange}
          />
          {errTitle && <span className="messageError">{errTitle}</span>}
        </div>

        <div>
          <label for="description">Descrição *</label>
          <textarea
            name="description"
            defaultValue={material.description}
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

export default ModalMaterials;