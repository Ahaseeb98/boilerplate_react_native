import {Home, Login} from './../Screens';

export const HOME_PATH = 'Home';

export const LOGIN_PATH = 'Login';
export const ROUTES = [
  {
    path: HOME_PATH,
    component: Home,
    authRequired: false,
    showInSidebar: true,
  },
  {
    path: LOGIN_PATH,
    component: Login,
    authRequired: false,
    showInSidebar: true,
  },
];
