import styled from 'styled-components';

export const Material = styled.div`
  font-family: "Nunito sans", sans-serif;

  .materiais {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 80px;
    background-color: white;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 3em;
    
  }

  .post {
    flex: 1;
  }

  img {
    width: 520px;
    height: 280px;
  }



  .infoMateriais {
    margin: 20px 10px;
    flex: 2 1 500px;

    padding: 0px 25px;

    max-width:700px;
    background-color: #fff;
    

  }

  .infoMateriais h2 {
    font-size: 2.2em;
    margin-bottom: 1em;
    color: #333;
    font-weight: 800;
    
  }

  .infoMateriais p {
    font-size: 1.2em;
    text-align: justify;
    margin-bottom: 1.5em;
    
  }

  .infoMateriais button {
    height: 50px;
    width: 170;
    border: none;
    cursor: pointer;
    padding: 15px 60px;
    font-size: 1.2em;
    background-color: #fa7958;
    color: #fff;
    margin-left: 380px;
    display: flex;
    align-items: center;
  }

  .infoMateriais button:hover {
      background-color: #f9481c;
      
    }

  .bottom {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 600px){
    .infoMateriais {
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
      .infoMateriais button {
        margin-left: 200px;
      }
    }
  }
`;