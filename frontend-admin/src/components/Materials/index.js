import React, { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import swal from 'sweetalert';
import api from '../../services/api';

import { Modal } from '@material-ui/core';
import ModalMaterials from '../ModalMaterials';

import { Container } from './styles';

function MaterialsComp({ data, getData }) {

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

  const deleteMaterial = async () => {
    const id_material = data.id_materials;

    try {
      await api.delete(`/materials/${id_material}`);
      getData();
      swal("Publicação excluida!", "Sua publicação foi excluída com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível excluir sua publicação!", "error");
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
                onClick={() => deleteMaterial()}
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
        <ModalMaterials id={data.id_materials} isUpdate={isUpdate} />
      </Modal>
    </>
  );
}

export default MaterialsComp;