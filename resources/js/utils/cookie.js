import Cookies from 'js-cookie';

export const setCookie = (isLogin) => {
  Cookies.set('isLogin', isLogin, { expires: 1 });
};

export const getCookie = () => {
  const isLogin = Cookies.get('isLogin');
  if (isLogin) return isLogin;
  else return false;
};
