import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.span`
  font-weight: 700;
  margin-right: 20px;
  color: white;
`;

export const Avatar = styled.img`
  margin-right: 6px;
`;

export const ButtonLogOut = styled.button`
  border: none;
  outline: none;
  padding: 2px 10px;
  border-radius: 10px;
  margin-right: 20px;
  font-size: 15px;
  font-weight: 700;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #212529;
    color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;
