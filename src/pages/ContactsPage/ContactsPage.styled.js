import styled from 'styled-components';
import img from 'images/cell-phones.jpg';

export const Container = styled.div`
  background: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;
