import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
import History from '../../components/Container/Historia/index';
import Obras from '../../components/Container/Obras/index';
import Campanhas from '../../components/Container/Campanhas/index';
import Materials from '../../components/Container/Materiais/index';
import Title from '../../components/Titulo/index';
import { InsereAnuncio, Button } from './styles';
import { Separacao } from '../Depoimentos/styles';

import api from '../../services/api';

const Main = ({ component: Component, ...rest }) => {

  const [campaigns, setCampaigns] = useState([]);
  const [materials, setMaterials] = useState([]);


  useEffect(async () => {
    await api.get(`/campaigns`).then(({ data }) => {
      setCampaigns(data);
    })

    await api.get(`/materials`).then(({ data }) => {
      console.log(data);
      setMaterials(data);
    })

  }, []);

  const fetchCampaigns = async () => {
    let { data } = await api.get(`/campaigns`);
    setCampaigns(data);
  }

  const fetchMaterials = async () => {
    let { data } = await api.get(`/materials`);
    setMaterials(data);
  }

  return (
    <>
      <Navbar />

      <InsereAnuncio>
        <div className="container">
          <h2>Gostaria de ajudar este projeto ?</h2>
          {/* <p>
            Você pode publicar aqui no nosso portal <strong>qualquer material </strong>
               que esteja sobrando em sua residência.<br />
               Mas fique tranquilo, o Instituto também precisa de ajuda em <strong>
              trabalhos voluntários!</strong>
          </p>
          <p>Clique abaixo em publique seu anúncio ao Instituto João de Barro</p> */}
          <Button to="/anuncio/novo" className="bottom">
            {/* <FaArrowRight className="seta" color="#fff" size={25} /> */}
            Doe seu material de construção!!
          </Button>



          {/* <Button to="/familia/novo" className="bottom">
            <FaArrowRight className="seta" color="#fff" size={25} /> 
            Cadastrar família
          </Button> */}

        </div>
      </InsereAnuncio>

      <Title value="Quem somos?" />
      <History/>

      <Separacao />

      <Title value="Obras realizadas!" />
      <Obras/>

      <Separacao />

      {materials.length ? <Title value="Do que estamos precisando?" /> : null}
      {
        materials.length ?
          materials.map((material) => (
            <Materials data={material} getData={fetchMaterials} />
          ))
          : null
      }

      <Separacao />

      {campaigns.length ? <Title value="Campanhas" /> : null}
      {
        campaigns.length ?
          campaigns.map((campaign) => (
            <Campanhas data={campaign} getData={fetchCampaigns} />
          ))
          : null
      }

      <Contato />
    </>
  );

}

export default Main;