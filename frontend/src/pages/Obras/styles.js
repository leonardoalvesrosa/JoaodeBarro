import styled from 'styled-components';

export const Construcoes = styled.div`
  font-family: "Nunito sans", sans-serif;

  .container {
    /* border: 2px solid black; */
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 35px;
    width: 100% !important;
    padding: 20px;


    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


    .obrasAndamento {

      /* flex: 1; */
      padding: 30px 0px;
      padding-top: 0px;
      background-color: white;


      /* border: 3px solid #9999; */
      border-radius: 5px;

      box-shadow: 5px 5px 5px #9999;

      max-width: 425px;

    }

    .obrasConcluidas {
      padding: 30px 0px;
      padding-top: 0px;
      background-color: white;


      box-shadow: 5px 5px 5px #9999;
      border-radius: 5px;


      max-width: 425px;


    }

    .obrasConcluidas img {
      width: 425px;
      height: 250px;
    }

    .obrasAndamento img {
      width: 425px;
      height: 250px;
    }

    .image {
      filter: brightness(0.7);
      transition: 0.2s;
      cursor: pointer;
    }
    .image:hover {
      filter: brightness(0.6);
    }

    .conteudo {
      margin: 0 20px;
      margin-top: 20px;

      h1 {
        margin-bottom: 10px;
      }

      p {
        margin-top: 5px;
        margin-bottom: 25px;
        font-size: 1.2em;
        line-height: 1.5rem;
      }

      .btn {
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
        list-style: none;

        font-family: "Nunito sans", sans-serif;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 1.4em;
        font-weight: bold;
        padding: 10px 50px;
        background-color: #ee6c4d;
        color: #EEE;
        transition: 0.2s;

        /* margin-top: 555px; */
      }

      .btn:hover {
        background-color: #da6446;
      }
    }

    @media(max-width:800px) {
      .obrasConcluidas {
        margin-top: 30px;
      }
    }

  }

  
`;