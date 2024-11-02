import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname, search } }) => {
  useEffect(() => {
    console.log(
      pathname,
      pathname.indexOf('/experience/') >= 0,
      pathname === '/',
      pathname.indexOf('/project') >= 0,
    );
    if (pathname.indexOf('/experience/') >= 0 || pathname === '/') {
      console.log('1');
      return;
    }
    if (pathname.indexOf('/project') >= 0) {
      console.log('2');
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return children;
};

export default withRouter(ScrollToTop);
