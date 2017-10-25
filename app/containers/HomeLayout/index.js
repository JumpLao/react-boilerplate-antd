/**
 *
 * HomeLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { AnimatedSwitch } from 'react-router-transition';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import SigninForm from 'containers/SigninForm/Loadable';
import SignupForm from 'containers/SignupForm/Loadable';
import ForgetPasswordForm from 'containers/ForgetPasswordForm/Loadable';
import ErrorPage from 'containers/ErrorPage/Loadable';
import { SIGNIN_PATH } from 'containers/App/constants';
import { ERR_NOT_FOUND, ERR_FORBIDDEN } from 'containers/ErrorPage/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomeLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
const ForbiddenPage = (props) => (
  <ErrorPage error={ERR_FORBIDDEN} {...props}></ErrorPage>
);
const NotFoundPage = (props) => (
  <ErrorPage error={ERR_NOT_FOUND} {...props}></ErrorPage>
);
export class HomeLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path={SIGNIN_PATH} component={SigninForm}></Route>
          <Route exact path="/signup" component={SignupForm}></Route>
          <Route exact path="/forgotpassword" component={ForgetPasswordForm}></Route>
          <Route exact path="/forbidden" component={ForbiddenPage}></Route>
          <Route path="" component={NotFoundPage}></Route>
        </AnimatedSwitch>
      </ConnectedRouter>
    );
  }
}

HomeLayout.propTypes = {
 // dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homelayout: makeSelectHomeLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homeLayout', reducer });
const withSaga = injectSaga({ key: 'homeLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter
)(HomeLayout);
