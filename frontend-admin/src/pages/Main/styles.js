import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InsereAnuncio = styled.div`
  font-family: "Nunito sans", sans-serif;
  background-color: #fff;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 6.5em;
  padding: 20px;
  padding-bottom: 60px;
  border-radius: 5px;

  .container {
    text-align: center;

    h2 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    p {
      line-height: 1.6em;
      font-size: 1.3em;
      margin-bottom: 0.8em;
    }
  }

  @media(max-width: 600px) {
    .container {
      h2 {
        font-size: 1.7em;
      }

      p{
        font-size: 1.2em;
      }

      button {
        font-size: 1.2em;
      }
    }
  }

`;

export const Button = styled(Link)`
  text-decoration: none;
  position: relative;
  top: 1em;
  border: none;
  cursor: pointer;
  padding: 15px 60px;
  font-size: 1.2em;
  background-color: #fa7958;
  color: #fff;
  font-size: 1.3em;
`;