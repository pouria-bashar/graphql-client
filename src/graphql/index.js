import currentUser from './queries/currentUser';
import logout from './mutations/logout';
import login from './mutations/login';
import signup from './mutations/signup';

export const queries = {
  currentUser,
};


export const mutations = {
  logout,
  login,
  signup,
};
