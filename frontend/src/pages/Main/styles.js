import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InsereAnuncio = styled.div`
  font-family: "Nunito sans", sans-serif;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3em;
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

    .bottom{
      font-weight: 700;
      /* letter-spacing: 5px; */
    }

    .bottom:hover {
      background-color: #f9481c;
      
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
  margin: 0 20px;
  top: 1em;
  border-Radius: 5px;
  cursor: pointer;
  padding: 15px 60px;
  font-size: 1.2em;
  background-color: #fa7958;
  color: #fff;
  font-size: 1.3em;
  transition: all ease 0.5s;
`;