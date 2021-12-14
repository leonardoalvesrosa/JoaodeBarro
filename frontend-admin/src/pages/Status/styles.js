import styled from 'styled-components';


export const StatusContainer = styled.div`
  font-family: "Nunito sans", sans-serif;
  max-width: 920px; 
  padding: 15px;
  padding-bottom: 40px;
  margin: 60px auto;

  border: 3px solid #ddd;
  border-radius: 5px;


  .conteudo {
    background: #fdfffc;
    padding: 15px;
    
    span {
      display: block;
      font-size: 0.9rem;
      font-weight: 800;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

  }
`;



export const BarraStatus = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #333;
  margin-top: 45px;

  img {
    width: 75px;
    margin-bottom: 1.2rem;
    z-index:10;
  }
    
  ul {
    text-align: center;
  }

  ul li {
    display: inline-block;
    width: 200px;
    position: relative;
  }
  
  ul li .fa {
    background-color: #ccc;
    padding: 0.3rem;
    color: #fff;
    border-radius: 50%;
  }

  ul li .fa::after {
    content: '';
    background: #ccc;
    height: 5px;
    width: 215px;
    display: block;
    position: absolute;
    left: 0;
    top: 7.2rem;
    /* transform: translateX(8px); */
    z-index: -1;
  }

  ul li:nth-child(3) .fa{
    background: #ff8b51;
  }

  ul li:nth-child(3) .fa::after {
    background: #ff8b51;
  }

  ul li:nth-child(1) .fa,
  ul li:nth-child(2) .fa {
    background: rgb(73, 223, 73);
  }

  ul li:nth-child(1) .fa::after,
  ul li:nth-child(2) .fa::after {
    background: rgb(73, 223, 73);
  }

  ul li:first-child .fa::after {
    width: 105px;
    left: 100px;
  }

  ul li:last-child .fa::after {
    width: 105px;
    right: 100px;
  }

  @media(max-width:600px) {

    img {
      width: 50px;
    }

    ul li {
      width: 100px;
    }
  }

`;

