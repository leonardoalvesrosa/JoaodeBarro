import React, { useState, useContext, useEffect } from 'react';
// import { Modal } from '@material-ui/core';

import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
// import ModalPosters from '../../components/ModalPosters';

import { ButtonAdd, Container, Titulo } from './styles';
import Poster from '../../components/Poster';
import api from '../../services/api';



const Postagens = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  // const [open, setOpen] = useState(false);
  const [posters, setPosters] = useState([]);


  useEffect(() => {
    const getData = async () => {
      let { data } = await api.get(`/postersWhere/files`)
      setPosters(data);
      console.log(data);
    }
    getData();
  }, []);

  const fetchData = async () => {
    let { data } = await api.get(`/postersWhere/files`);
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

      <Titulo>
        <div className="container">
          <h2 className="titulo">Precisando de algum desses materias?</h2>
          <h3 className="subtitulo">Entre em contato conosco!</h3>
        </div>
      </Titulo>

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