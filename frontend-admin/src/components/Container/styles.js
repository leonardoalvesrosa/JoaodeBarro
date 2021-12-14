import styled from 'styled-components';

const Conteudo = styled.div`
  font-family: "Nunito sans", sans-serif;
  background-color: #fff;
  border-radius: 5px;

  max-width: 1200px;
  margin: 0 auto;

  margin-top: 2em;
  padding: 0px;

  .titulo {
    font-size: 2em;
  }

  @media (max-width: 900px){
    background-color: #EEE;
  }

  @media (max-width: 500px){
    background-color: #EEE;
    max-width: 500px;
  }
`;

export default Conteudo;