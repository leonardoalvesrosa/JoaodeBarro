import React, { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import swal from 'sweetalert';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Poster({ data, getData }) {

  console.log(data.data);

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

 

  return (
    <>
      <Container
        background={data[0].url}
      >
        <div
          onMouseEnter={() => setIcons(true)}
          onMouseLeave={() => setIcons(false)}
        >
          
        </div>
        {/* <h2><Link to={{
          path: "/editarPostagem",
          state:{ data: data }}}>{data.poster_name}</Link></h2> */}
        <h2>{data[0].poster.poster_name[0].toUpperCase() + data[0].poster.poster_name.substr(1)}</h2>
        {/* <h2><Link to={`/editarPostagem/${data[0].poster.id}`}>{data[0].poster.poster_name}</Link></h2> */}
        {/* <h2><Route exact path="/editarPostagem" render={() => (
        <EditPoster data={data}/>)}></Route>{data.poster_name}</h2> */}
        
        <p>
          {data[0].poster.description[0].toUpperCase() + data[0].poster.description.substr(1)}
        </p>
      </Container>

    </>

  );
}

export default Poster;