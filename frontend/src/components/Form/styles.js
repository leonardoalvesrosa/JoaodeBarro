import styled from 'styled-components';

export const InputComponent = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 60px;
  border-radius: 4px;
  border: 2px solid #ddd;
  font-size: 16px;
  color: #444;
  transition: border-color 0.2s;


  :focus {
    border-color: #111;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  margin-bottom: 18px;
`;