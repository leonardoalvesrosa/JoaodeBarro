import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  max-width: 40em !important;
  margin: 0 auto;
  margin-top: 3em !important;
  margin-bottom: 6em;

  background-color: #eee;
  padding: 30px;
  border-radius: 5px;

  box-shadow: 5px 5px 5px #9999;

  .messageError {
    display: block;
    color: #F00;
    font-size: 1.1em;
    margin-top: 0em;
    margin-bottom: 1em;
  }

  .prodInfo {
    display: flex;
    align-items: center;
    gap: 20px;

    .quantity {
      flex: 1;
    }

    .unities {
      flex: 1;
    }
  }

  h2 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  label {
    text-align: left;
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    font-size:1.2em;
  }

  input.phone {
    width: 100%;
    margin-bottom: 15px;
    padding: 14px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 16px;
    color: #444;
    transition: border-color 0.2s;

    :focus {
      border-color: #111;
    }
  }

  option,select {
    cursor: pointer !important;
    font-size: 1.1em;
  }

  .divBotoes{
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  button {
    margin: 0;
    align-items: center;
    font-family: "Roboto", sans-serif;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1.4em;
    font-weight: bold;
    color: #EEE;
    transition: 0.2s;
  }

  .disponivel, .analisar, .rejeitar {
    width: 7em;
    height: 50px;
  }

  .disponivel{
    background-color: #309300;

    :hover{
      background-color: #38ae00;
    }
  }

  .analisar{
    background-color: #f88f03;
    /* background-color: #ffff00; */
    /* color: black; */
    

    :hover{
      background-color: #fca42c;
    }
  }

  .rejeitar{
    background-color: #e71818;

    :hover{
      background-color: #ed4e4e;
    }
  }

  

  @media(max-width:600px){
    .disponivel, .analisar, .rejeitar {
      width: 5.5em;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 14px 16px;
  border-radius: 4px;
  border: 2px solid #ddd;
  font-size: 16px;
  color: #444;
  transition: border-color 0.2s;

  :focus {
    border-color: #111;
  }
`;

export const InputFile = styled.div`

  display: flex;
  justify-content:center;
  align-self: center;
  align-items: center;

  background-color: #343a40;

  font-family: "Nunito Sans", sans-serif !important;
  cursor: pointer;

  input[type="file"]{
    display:none;
  }

  label{
    cursor: pointer;
    padding: 15px;
  }

  width: 100%;
  margin-bottom: 25px;
  margin-top: 20px;
  border-radius: 8px;
  border: 2px solid #ddd;
  font-size: 16px;
  color: #f7f7f7;
  transition: border-color 0.2s;
  
  :focus {
    border-color: #111;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 15px;
  padding: 14px 16px;
  border-radius: 4px;
  border: 2px solid #ddd;
  font-size: 16px;
  color: #444;
  transition: border-color 0.2s;
  
  :focus {
    border-color: #111;
  }

`;

export const PosterImg = styled.div`
  width:100%;
  margin: 0 3%;
  margin-top: 10px;
  margin-bottom: 40px;

  img {
    margin-top: 20px;
  }
`;