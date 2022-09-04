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
