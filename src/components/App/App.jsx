import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { PublicRoute } from 'components/Routes/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <SharedLayout />
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<PublicRoute restricted>{<RegisterPage />}</PublicRoute>}
            />
            <Route
              path="/login"
              element={<PublicRoute restricted>{<LoginPage />}</PublicRoute>}
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Container>
    )
  );
};
