/**
 *
 * App
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { ConnectedRouter } from 'react-router-redux';

import PrivateRoute from 'containers/PrivateRoute/Loadable';
// import HomeLayout from 'containers/HomeLayout/Loadable';
import AdminLayout from 'containers/AdminLayout/Loadable';
import SigninForm from 'containers/SigninForm/Loadable';
import SignupForm from 'containers/SignupForm/Loadable';
import ForgetPasswordForm from 'containers/ForgetPasswordForm/Loadable';
import ErrorPage from 'containers/ErrorPage/Loadable';
import { SIGNIN_PATH } from 'containers/App/constants';
import { ERR_NOT_FOUND, ERR_FORBIDDEN } from 'containers/ErrorPage/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const ForbiddenPage = (props) => (
  <ErrorPage error={ERR_FORBIDDEN} {...props}></ErrorPage>
);
const NotFoundPage = (props) => (
  <ErrorPage error={ERR_NOT_FOUND} {...props}></ErrorPage>
);

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /* constructor (props) {
    super(props)
  } */

  render() {
    return (
      <div>
        <Helmet>
          <title>App</title>
          <meta name="description" content="Description of App" />
        </Helmet>
        <ConnectedRouter history={this.props.history}>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <PrivateRoute path="/admin" component={AdminLayout}></PrivateRoute>
            {/* <Route path="" component={HomeLayout}></Route> */}
            <Route
              exact
              path="/"
              render={() => (<Redirect to={{ pathname: SIGNIN_PATH }} />)}
            />
            <Route exact path={SIGNIN_PATH} component={SigninForm}></Route>
            <Route exact path="/signup" component={SignupForm}></Route>
            <Route exact path="/forgotpassword" component={ForgetPasswordForm}></Route>
            <Route exact path="/forbidden" component={ForbiddenPage}></Route>
            <Route component={NotFoundPage}></Route>
          </AnimatedSwitch>
        </ConnectedRouter>
      </div>
    );
  }
}

App.propTypes = {
 // dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
  // location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });
export default compose(
  withReducer,
  withConnect,
  withSaga,
  withRouter,
)(App);
