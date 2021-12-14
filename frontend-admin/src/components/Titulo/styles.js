import styled from 'styled-components';

const Titulo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 5em;

  span {
    font-family: 'Fredoka One', cursive;
    font-size: 2.5em;
    color: #333;
  }

  @media(max-width: 900px) {
    margin: 20px 5px;
  }
`;

export default Titulo;