import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { Box, Name, Avatar } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <Box>
      <Avatar src={avatar} alt="avatar" width="32" />
      <Name>Добро пожаловать, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Box>
  );
};
