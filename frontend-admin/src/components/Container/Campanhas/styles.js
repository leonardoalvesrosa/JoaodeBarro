import styled from 'styled-components';

const Campanha = styled.div`
  font-family: "Nunito sans", sans-serif;

  .campanha {
    /* border: 3px solid blue;  */

    display: flex;
    flex-wrap: wrap;

  }

  .post {
    flex: 1;

    /* border: 3px solid red; */
  }

  img {
    width: 520px;
    height: 280px;
  }



  .infoCampanha {
    /* margin: 2em 5em; */
    margin: 20px 10px;
    flex: 2 1 500px;

    padding: 0px 25px;

    max-width:700px;
    /* min-width:500px; */
    background-color: #fff;

    /* border: 10px solid orange; */
  }

  .infoCampanha h2 {
    font-size: 2.2em;
    margin-bottom: 1em;
    color: #333;
    font-weight: 800;
  }

  .infoCampanha p {
    font-size: 1.2em;
    text-align: justify;
    margin-bottom: 1.5em;
  }

  .infoCampanha button {
    border: none;
    cursor: pointer;
    padding: 15px 60px;
    font-size: 1.2em;
    background-color: #fa7958;
    color: #fff;
    margin-left: 400px;
  }

  @media (max-width: 600px){
    .infoCampanha {
      margin: 0px;
      padding: 20px 15px;
      max-width: 100%;
    }
    div {
      img {
        width: 100%;
        height: 220px;
        margin: 0px 5px;
      }
      .infoCampanha button {
        margin-left: 200px;
      }
    }
  }
`;

export default Campanha;