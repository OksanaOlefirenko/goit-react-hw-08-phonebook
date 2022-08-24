import { Container, Header, Logo } from './SharedLayout.styled';
// import { Outlet } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';
// import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu';
import { UserNav } from 'components/Navigation/UserNav';
import { AuthNav } from 'components/Navigation/AuthorizationNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="phone icon">
            <MdContactPhone size={40} color={'red'} />
          </span>
          Phonebook
        </Logo>
        <UserNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      {/* <Suspense fallback="">
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
