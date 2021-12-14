import React, { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import swal from 'sweetalert';
import api from '../../services/api';

import { Modal } from '@material-ui/core';
import ModalCampanha from '../ModalCampanha';

import { Container } from './styles';

function Campanha({ data, getData }) {

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

  const deleteCampaign = async () => {
    const idCampaign = data.id_campaigns;

    try {
      await api.delete(`/campaigns/${idCampaign}`);
      getData();
      swal("Campanha excluida!", "Sua campanha foi excluida com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível excluir sua campanha!", "success");
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
                className="icone"
                color="#fb8500"
                size={25}
                onClick={() => deleteCampaign()}
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
        <ModalCampanha id={data.id_campaigns} isUpdate={isUpdate} />
      </Modal>
    </>
  );
}

export default Campanha;