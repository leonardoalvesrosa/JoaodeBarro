import styled from 'styled-components';

export const Obra = styled.div`
  font-family: "Nunito sans", sans-serif;

  .obras {
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    // margin: 20px 80px;
    background-color: white;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 3em;

    box-shadow: 0px 0px 15px 0px rgba(154,154,154,0.46);
    
  }

  .post {
    flex: 1;
  }

  img {
    width: 520px;
    height: 280px;
    border-radius: 5px;
    
  }



  .infoObras {
    margin: 20px 10px;
    flex: 2 1 500px;

    padding: 0px 25px;

    max-width:700px;
    background-color: #fff;
    

  }

  .infoObras h2 {
    font-size: 2.2em;
    margin-bottom: 1em;
    color: #333;
    font-weight: 800;
    
  }

  .infoObras p {
    font-size: 1.2em;
    text-align: justify;
    margin-bottom: 1.5em;
    
  }

  .infoObras button {
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

  .infoObras a{
    text-decoration: none;
    color: #fff;
  }

  .infoObras button:hover {
      background-color: #f9481c;
      
    }

  @media (max-width: 600px){
    .infoObras {
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
      .infoObras button {
        margin-left: 200px;
      }
    }
  }
`;