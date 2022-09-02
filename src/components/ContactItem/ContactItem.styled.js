import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
// import ListItem from '@mui/material/ListItem';

export const Item = styled.li`
  list-style: none;
  background-color: rgba(0, 21, 255, 0.05);
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #fff;
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

export const AvatarIcon = styled(Avatar)`
  margin-right: 10px;
`;

export const Delete = styled(DeleteIcon)`
  margin-right: -10px;
  margin-left: 4px;
`;

export const Edit = styled(EditIcon)`
  margin-right: -10px;
  margin-left: 4px;
`;

// export const Button = styled.button`
//   border-radius: 5px;
//   margin-left: 10px;
//   font-size: 15px;
//   cursor: pointer;
//   :hover {
//     background-color: blueviolet;
//     color: white;
//   }
// `;

export const BtnDelete = styled(Button)`
  min-width: 30px;
  margin-right: 5px;
`;
export const BtnEdit = styled(Button)`
  min-width: 30px;
`;
