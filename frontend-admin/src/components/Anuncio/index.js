import React, { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import swal from 'sweetalert';
import api from '../../services/api';

import { Modal } from '@material-ui/core';
import ModalAnuncio from '../ModalAnuncios';

import { Container } from './styles';

function Anuncio({ data, getData }) {

  const [isUpdate, setIsUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [icons, setIcons] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsUpdate(true);
    getData();
  };

  const handleClose = () => {
    setOpen(false);
    getData();
  };



  const deleteAdvertise = async () => {
    const idAdvertise = data.id_advertise;

    try {
      await api.delete(`/advertises/${idAdvertise}`);
      getData();
      swal("Anúncio excluido!", "Seu anúncio foi excluido com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível excluir seu anúncio!", "success");
    }
  }

  return (
    <>
      <Container
        background={data.url}
      >
        <div
          onMouseEnter={() => setIcons(true)}
          onMouseLeave={() => setIcons(false)}
        >
          {icons ?
            <>
              <FaTrashAlt
                className="icone" cl
                color="#fb8500"
                size={25}
                onClick={() => deleteAdvertise()}
              />
              <FaPen
                className="icone"
                color="#ccc"
                size={25}
                onClick={handleOpen}
              />
            </>
            : <div></div>
          }
        </div>
        <h2>{data.title}</h2>
        <p>
          {data.description}
        </p>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalAnuncio id={data.id_advertise} isUpdate={isUpdate} />
      </Modal>
    </>
  );
}

export default Anuncio;