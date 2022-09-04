import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const Item = styled.li`
  list-style: none;
  background-color: rgba(0, 21, 255, 0.05);
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
  border: 1px solid #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #f0efed;
    border: 2px solid #acfc00;
  }
`;

export const ContactsInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const AvatarIcon = styled(Avatar)`
  margin-right: 10px;
`;

export const Contact = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonDel = styled.button`
  padding: 5px 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #212529;
    color: #fff;
  }
`;

export const ButtonEdit = styled.button`
  padding: 5px 5px;
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
