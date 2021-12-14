import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #f1f1f1; 
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 350px;
  max-width: 350px;

  div {
    width: 350px;
    max-width: 350px;
    height: 180px;
    background: url(${props => `${props.background}`}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    background-color: red;


    .icone {
      /* flex: 1; */
      /* padding: 5px 0px; */
      margin: 5px 15px;
      align-self: baseline;
      cursor: pointer;
    }

    /* img {
      width: 100%;
      height: 100%;
    } */
  }

  

  p, h2 {
    max-width: 350px;
    margin-top: 0.3em;
    padding: 5px 12px;
  }

`;