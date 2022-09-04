import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  font-size: 55px;
  font-weight: 600;
  color: white;
  padding-top: 150px;
  text-shadow: 7px 4px 7px #8d9599;
`;

export const Error = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;
