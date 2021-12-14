import styled from 'styled-components';

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 60px;
  bottom: 100px;
  font-size: 40px !important;
  background-color: #ee6c4d;
  color: white;
  border: none;
  width: 65px;
  height: 65px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
`;


export const Container = styled.div`
  color: black;
  width: 85%;
  max-width: 1200px;
  margin: 3em auto;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4%;
`;

export const Titulo = styled.div`
  font-family: "Nunito sans", sans-serif;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 3em;
  padding: 20px;
  /* padding-bottom: 60px; */
  border-radius: 5px;
  .container {
    text-align: center;
    
    
    h2 {
      font-size: 2em;
      margin-bottom: 1em;
      
    }
    h3{
      color: gray;
    }
  }
`