import ReactGA from 'react-ga';

type PropTypes = {
  to: string,
};

const StaticFileRedirect = ({ to }: PropTypes): null => {
  const redirect = () => window.location.replace(to);

  // Record the pageview to google analytics before redirect
  ReactGA.set({ page: to });
  document.title = to.slice(to.lastIndexOf('/') + 1); // filename for google analytics
  ReactGA.ga('send', 'pageview', to, {
    hitCallback: redirect,
  });

  // In case google analytics is down or request fails for some reason, continue to redirect after timeout
  setTimeout(redirect, 1000);

  return null;
};

export default StaticFileRedirect;
