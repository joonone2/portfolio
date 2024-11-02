import * as PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

import MainRouter from './MainRouter';
import NavigationBar from 'Components/organisms/NavigationBar/NavigationBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';

function RootRouter() {
  return (
    <Router>
      <ScrollToTop>
        <NavigationBar>
          <MainRouter />
        </NavigationBar>
      </ScrollToTop>
    </Router>
  );
}

export default observer(RootRouter);
