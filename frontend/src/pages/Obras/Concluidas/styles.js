import styled from 'styled-components';

export const Obras = styled.div`
  font-family: "Nunito sans", sans-serif;

  .container {
    border: 3px solid #ddd;
    border-radius: 5px;
    background-color: white;

    max-width: 1000px;
    margin: 0 auto;
    margin-top: 40px;
    padding-bottom: 20px;

    display: flex;
    flex-wrap: wrap;

    .conteudo {
      max-width: 800px;
      margin: 0 auto;
      margin-top: 20px;

      li {
        list-style: none;
      }

      h1 {
        margin-bottom: 20px;
      }

      h3, p, ul {
        margin-bottom: 15px;
      }

      h3 {
        font-size: 1.3em;
      }

      p,li {
        font-size: 1.2em;
      }

      .images {
        max-width: 600px;

        img {
          width: 600px;
          height: 380px;
          margin-top: 30px;
          border-radius: 5px;
        }
      }
    }
  }

  @media(max-width:800px) {
    .conteudo {
      max-width: 420px !important;
    }
    .images img {
      width: 370px !important;
      height: 200px !important;
    }
  }
`;