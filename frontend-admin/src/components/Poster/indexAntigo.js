import React, { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import swal from 'sweetalert';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Situacao } from './styles';

function Poster({ data, getData }) {

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

  const deletePoster = async () => {
    const id = data[0].poster.id;
    // console.log(id)

    try {
      await api.delete(`/posters/${id}`);
      getData();
      swal("Anúncio excluído!", "O Anúncio foi excluido com sucesso!", "success");
    } catch (e) {
      swal("Ops!", "Não foi possível excluir o anúncio!", "error");
    }
  }
  // console.log({ 'data ': data[0] });

  const situationFunction = () => {
    if (data[0].poster.situation == 'disponivel') {
      // setSitutation("Disponível")
      return '#309300'
    } else if (data[0].poster.situation == 'analisar') {
      // setSitutation("Analisar")
      return '#f88f03'
    } else if (data[0].poster.situation == 'rejeitado') {
      // setSitutation("Rejeitado")
      return '#e71818'
    }
  }

  // const situationColor = () => {
  //   if(data[0].poster.situation == 'disponivel'){

  //   }
  // }

  return (
    <>
      <Container
        background={data[0].url}
      >
        <div
          onMouseEnter={() => setIcons(true)}
          onMouseLeave={() => setIcons(false)}
        >
          {icons ?
            <>
              <FaTrashAlt
                // id={data.id_campaigns}
                className="icone"
                color="#fb8500"
                size={25}
                onClick={() => deletePoster()}
              />
              {/* <FaPen
                className="icone"
                color="#ccc"
                size={25}
                onClick={handleOpen}
              /> */}
            </>
            : <div></div>
          }
        </div>


        <h2><Link to={`/editarPostagem/${data[0].poster.id}`}>{data[0].poster.poster_name[0].toUpperCase() + data[0].poster.poster_name.substr(1)}</Link></h2>
        {/* Colocando primeira letra maiúscula */}
        <Situacao color={situationFunction(data[0].poster.situation)}>
          <h4>{data[0].poster ? data[0].poster.situation[0].toUpperCase() + data[0].poster.situation.substr(1) : null}</h4>
        </Situacao>


        <p>
          {/* Colocando primeira letra da descrição em maiúscula */}
          {data[0].poster.description[0].toUpperCase() + data[0].poster.description.substr(1)}
        </p>
      </Container>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalPosters id={data.id} isUpdate={isUpdate} />
      </Modal> */}
    </>

  );
}

export default Poster;