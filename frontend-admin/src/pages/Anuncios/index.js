import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';

import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
import ModalAnuncio from '../../components/ModalAnuncios';

import { ButtonAdd, Container, Mensagem } from './styles';
import Anuncio from '../../components/Anuncio';
import api from '../../services/api';

import CampanhaImg from '../../icons/campanha.png';


const Anuncios = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [advertises, setAdvertises] = useState([]);


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
      let { data } = await api.get(`/advertises`)
      setAdvertises(data);
      console.log(data);
    }
    getData();
  }, []);

  const fetchData = async () => {
    let { data } = await api.get(`/advertises`);
    setAdvertises(data);
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
        <ModalAnuncio />
      </Modal>

      {!advertises.length && (
        <Mensagem>
          <h1>Nesta página você pode cadastrar seus anuncios!</h1>
          <h2>Clique no ícone ( + ) para adicionar um</h2>
          <img src={CampanhaImg} alt="adicione-campanha" />
        </Mensagem>
      )}



      <Container>
        {
          advertises.length ?
            advertises.map(advertise => (
              <Anuncio data={advertise} getData={fetchData} />
            ))
            : null
        }
      </Container>

      <ButtonAdd
        className="button-add"
        title="Inserir Anúncio"
        onClick={handleOpen}
      >
        +
      </ButtonAdd>

      <Contato />
    </>
  );

}

export default Anuncios;