import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 5% auto;
  width: 50%;
  /* height: 500px; */
  background-color: #f4f4f4;
  border-radius: 10px;

  h2 {
    position: relative;
    top: 30px;
    left: 20%
  }

  form {
    display: block;
    margin-left: 20%;
    margin-top: 7%;
  }

  label {
    text-align: left;
    display: block;
    /* font-weight: bold; */
    font-size:1.2em;
  }

  .messageError {
    display: block;
    color: #F00;
    font-size: 1.1em;
    margin-top: -0.5em;
    margin-bottom: 5px;
  }

  input, textarea {
    font-family: "Roboto", sans-serif;
    display:block;
    max-width: 70%;
    width: 70%;
    padding: 14px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 16px;
    margin-bottom: 1.5em;
    color: #444;
    transition: border-color 0.2s;

    :focus {
      border-color: #111;
    }
  }

  button {
    font-family: "Roboto", sans-serif;
    border: none;
    cursor: pointer;
    padding: 15px 35px;
    font-size: 1.2em;
    font-weight: bold;
    background-color: #fa7958;
    color: #EEE;
    margin-top: 1em;
    margin-bottom: 2em;
    transition: 0.2s;

    :hover {
      background-color: #da6446;
    }
  }
`;

