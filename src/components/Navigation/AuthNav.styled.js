import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding-right: 25px;
  font-weight: 700;
  color: #a5acaf;
  &.active {
    color: white;
  }
`;
