import styled from 'styled-components';
import background from '../../images/telephone.jpg';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  position: absolute;
  text-align: center;
  font-size: 55px;
  font-weight: 700;
  color: white;
  top: 250px;
  text-shadow: 8px 5px 8px #8d9599;
`;

export const TitleAccent = styled.span`
  position: relative;
  top: 150px;
  right: 300px;
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  color: white;
  text-shadow: 8px 5px 8px #8d9599;
`;
