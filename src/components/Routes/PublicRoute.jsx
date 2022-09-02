import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn && restricted ? <Navigate to="/contacts" /> : children;
};

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
};
