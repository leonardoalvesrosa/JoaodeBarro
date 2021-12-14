import React, { useState, useContext, useEffect } from 'react';
// import { Modal } from '@material-ui/core';

import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
// import ModalPosters from '../../components/ModalPosters';

import { ButtonAdd, Container, Mensagem } from './styles';
import Poster from '../../components/Poster';
import api from '../../services/api';

import PosterImg from '../../icons/campanha.png';



const Postagens = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  // const [open, setOpen] = useState(false);
  const [posters, setPosters] = useState([]);


  // const handleOpen = () => {
  //   setOpen(true);
  //   fetchData();
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   fetchData();
  // };



  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/posters/files`)
      setPosters(data);
    }
    getData();
  }, []);

  const fetchData = async () => {
    let { data } = await api.get(`/posters/files`);
    setPosters(data);
  }

  return (
    <>
      <Navbar />

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalPosters />
      </Modal> */}

      {/* <Container>
        
              <Poster data={posters} getData={fetchData} />
        
      </Container> */}

      {!posters.length && (
        <Mensagem>
          <h1>Tudo calmo por aqui!</h1>
          <h2>Ainda não temos anúncios para aprovação...</h2>
          <img src={PosterImg} alt="adicione-poster" />
        </Mensagem>
      )}

      <Container>
        {
          posters.length ?
            posters.map(posters => (
              <Poster data={posters} getData={fetchData} />
            ))
            : null
        }
      </Container>

      {/* <ButtonAdd
        className="button-add"
        title="Inserir Campanha"
        onClick={handleOpen}
      >
        +
      </ButtonAdd> */}

      <Contato />
    </>
  );

}

export default Postagens;