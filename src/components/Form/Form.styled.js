import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(244, 244, 246, 0.5);
  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.4);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 220px;
  height: 25px;
  margin-top: 10px;
  border: 1px solid #030e1845;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px;
`;

export const Error = styled.p`
  margin: 0;
  color: red;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const BtnSubmit = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #212529;
    color: #fff;
  }
`;
