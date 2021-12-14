import styled from 'styled-components';

export const PlanoFundo = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  background-color: #000;
  font-family: 'Roboto', sans-serif;
  background: url('./images/login/fundo.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Inicio = styled.h2`

  h2{
    margin: 10px 30px;
    font-size: 30px;
  }
  
  a{
    text-decoration: none;
    color: #eeeeee;
    size: 100px;
  }

  a:hover {
    color: #c1c1c1;
  }

`;


export const Container = styled.div`
  border-radius: 10px;
  position: fixed;
  background-color: #f7f7f7;
  margin-top: 4%;
  margin-left: 10%;
  width: 80%;
  height: 75%;
  border-radius: 7px;

  display: grid;

  grid-template-columns: 2fr 3fr;

  .image {
    background: url('/images/homepage/casa1.jpg');
    /* background-attachment: fixed; */
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    display: flex;

    .conteudo {
      width: 100%;
      background: rgba(0,0,0,0.7);
      border-radius: 0px;
      color: #f7f7f7;

      h4 {
        margin-left: 22%;
        font-size: 3em;
      }
      h5 {
        margin-top: 0.5em;
        margin-left: 22%;
        font-size: 1.8em;
      }

      .logo {
        margin-top: 33%;
        margin-left: 32%;
        padding: 10px;
        width: 140px;
        height: 130px;

      }      
    }
  }

  @media(max-width:600px) {
    .image {
      display:none;
    }
  }

  @media(min-width:1400px) {
    .logo {
      width: 170px !important;
      height: 150px !important;
      margin-left: 36% !important;
    }
    h4 {
      font-size: 4em !important;
      margin-left: 25% !important;
    }
  }

`;

export const Conteudo = styled.div`

  h4 {
    color: #df9356;
    font-size: 3em;
    margin-top: 100px;
    margin-left: 1em;
    margin-bottom: 40px;
  }

  @media(max-width:600px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media(min-width:1400px) {
    h4 {
      margin-left: 40% !important;
      margin-bottom: 12% !important;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 6px;

  .input-form {
    margin-left: 3em;
  }

  input {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2em;
    font-size: 1.3em !important;
    border:none;
    border-bottom: 2px solid #b7b7a4;
    background: transparent;
    outline: none;
    height:40px;
    color:#354f52;
    font-size: 16px;
    transition: border-bottom 0.3s;

    :focus {
      border-bottom: 2px solid #000;
    }
  }

  .messageError {
    display: block;
    color: #F00;
    font-size: 1.1em;
    margin-top: -1em;
    margin-bottom: 5px;
  }

  .torneMembro{
    display: block;
    text-decoration:none;
    margin-top: 0.6em;
    font-size: 1em;
    color: #333;
    text-align: center;
    transition: 0.2s;

    :hover {
      color: #000;
      text-decoration: underline;
    }
  }

  .btn {

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
    margin-top: 3em;
    font-family: 'Roboto', sans-serif !important;
    cursor: pointer;
    border:none;
    outline: none;
    height:50px;
    font-weight: bold;
    font-size: 18px;
    background-color: #df9356;
    color: aliceblue;
    letter-spacing: 2px;
    transition: 0.2s;

    :hover {
      background-color: #c8854e;
    }
  }

  @media(max-width: 600px) {
    .btn {
      margin: 0 auto;
      margin-top: 2em;
      width: 70%
    }
  }

  @media(min-width: 1400px) {

    .input-form {
      margin-left: 20%;
      width: 70%;
    }

    .btn {
      margin: 0 auto;
      margin-top: 5em;
      width: 50%
    }
  }

`;