import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Nunito sans", sans-serif;

  
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 5em;
  margin-bottom: 2em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* background-color: red; */
  /* justify-content: right; */
  

  .imagem {
    display: flex;
    align-items: center;
    margin-right: 30px;
    /* flex-direction: column; */
    /* flex: 1; */

    /* background-color: green; */


    img {
      width: 160px;
      height: 160px;
      border-radius: 100%;
      margin: 15px;
    }
  }

  .conteudo {
    flex: 1;
    padding-left: 40px;
    text-align: justify;

    h2 {
      margin-bottom: 1em;
    }

    p {
      font-size: 1.1em;
    }

  }
`;

export const Separacao = styled.hr`
  margin: 60px auto;
  width: 60%;
  height: 5px;
  border: none;
  border-radius: 10px;
  background-color: #dddddd;
`;