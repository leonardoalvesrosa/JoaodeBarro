import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';

import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
import ModalCampanha from '../../components/ModalCampanha';

import { ButtonAdd, Container, Mensagem } from './styles';
import Campanha from '../../components/Campanha';
import api from '../../services/api';

import CampanhaImg from '../../icons/campanha.png';


const Campanhas = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [campaigns, setCampaigns] = useState([]);


  const handleOpen = () => {
    setOpen(true);
    fetchData();
  };

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };



  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/campaigns`)
      setCampaigns(data);
      console.log(data);
    }
    getData();
  }, []);

  const fetchData = async () => {
    let { data } = await api.get(`/campaigns`);
    setCampaigns(data);
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
        <ModalCampanha />
      </Modal>

      {!campaigns.length && (
        <Mensagem>
          <h1>Nesta página você pode cadastrar suas campanhas!</h1>
          <h2>Clique no ícone ( + ) para adicionar uma</h2>
          <img src={CampanhaImg} alt="adicione-campanha" />
        </Mensagem>
      )}



      <Container>
        {
          campaigns.length ?
            campaigns.map(campaign => (
              <Campanha data={campaign} getData={fetchData} />
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

export default Campanhas;