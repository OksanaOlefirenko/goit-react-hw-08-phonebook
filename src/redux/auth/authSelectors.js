const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUserError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getUserError,
};

export default authSelectors;
