import { Header, Logo } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu';
import { UserNav } from 'components/Navigation/UserNav';
import { AuthNav } from 'components/Navigation/AuthorizationNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Logo>Phonebook</Logo>
      <UserNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
