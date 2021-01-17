import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { getToken } from 'util/api';
// import Loading from 'components/Loading';

function mobileRedirect(os: 'android' | 'ios', code: string) {
  const to = `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
  window.location.replace(to);
}

const Auth: React.FC = () => {
  const location = useLocation();

  type QueryTypes = {
    code?: string;
    isAndroid?: string;
    isiOS?: string;
    to?: string;
  };
  const { code, isAndroid, isiOS, to }: QueryTypes = queryString.parse(location.search);

  if (code) {
    if (isAndroid || isiOS) {
      const os = isAndroid ? 'android' : 'ios';
      mobileRedirect(os, code);
    } else {
      getToken(code).then((token) => {
        sessionStorage.setItem('token', token);
        window.location.replace(to as string);
      });
    }
  } else {
    window.location.replace('/');
  }

  return <div>Loading...</div>; // <Loading />;
};

export default Auth;