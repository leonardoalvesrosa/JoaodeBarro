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


export const Mensagem = styled.div`
  text-align: center;
  background-color: #e8eded;
  border-radius: 10px;
  color: black;
  width: 70%;
  max-width: 1200px;
  margin: 3% auto;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 10px;
  }

  img {
    margin-top: 5%;
    min-width: 100px;
    max-width: 180px;
  }
`;
