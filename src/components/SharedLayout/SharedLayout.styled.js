import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 2px solid black;
  background-color: #171818;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-size: 30px;
  font-weight: 900;
  color: white;
  padding-left: 25px;
`;
