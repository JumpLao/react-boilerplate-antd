/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Redirect } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrivateRoute, { makeSelectAuth } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class PrivateRoute extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      (this.props.auth.token && this.props.auth.expire >= new Date(Date.now())) ?
      (
        <Route component={Component} {...rest}>
        </Route>
      ) :
      (
        <Redirect to={{ pathname: '/forbidden', state: { from: this.props.location } }} ></Redirect>
      )
    );
  }
}

PrivateRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.any.isRequired,
  auth: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  privateroute: makeSelectPrivateRoute(),
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'privateRoute', reducer });
const withSaga = injectSaga({ key: 'privateRoute', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PrivateRoute);
