import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';

import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
import ModalMaterials from '../../components/ModalMaterials';

import { ButtonAdd, Container, Mensagem } from './styles';
import MaterialsComp from '../../components/Materials';

import api from '../../services/api';

import CampanhaImg from '../../icons/campanha.png';


const MaterialsPage = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [materials, setMaterials] = useState([]);


  const handleOpen = () => {
    setOpen(true);
    fetchData();
  };

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };



  // useEffect(() => {
  //   api.get(`/campaigns`)
  //     .then((res) => {
  //       setCampaigns(res.data);
  //     });
  //   console.log(campaigns);
  // }, [campaigns]);

  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/materials`)
      setMaterials(data);
      console.log(data);
    }
    getData();
  }, []);

  const fetchData = async () => {
    let { data } = await api.get(`/materials`);
    setMaterials(data);
  }

  return (
    <>
      <Navbar />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalMaterials />
      </Modal>

      {!materials.length && (
        <Mensagem>
          <h1>Nesta página você pode cadastrar serviços e produtos que precisam de doação!</h1>
          <h2>Clique no ícone ( + ) para adicionar </h2>
          <img src={CampanhaImg} alt="adicione-campanha" />
        </Mensagem>
      )}



      <Container>
        {
          materials.length ?
            materials.map(materials => (
              <MaterialsComp data={materials} getData={fetchData} />
            ))
            : null
        }
      </Container>

      <ButtonAdd
        className="button-add"
        title="Inserir Campanha"
        onClick={handleOpen}
      >
        +
      </ButtonAdd>

      <Contato />
    </>
  );

}

export default MaterialsPage;