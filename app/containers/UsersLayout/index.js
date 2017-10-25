/**
 *
 * UsersLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { Switch, Route } from 'react-router-dom';
// import UsersPage from 'containers/UsersPage/Loadable';
// import UserDetailPage from 'containers/UserDetailPage/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUsersLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class UsersLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props, 'Users', props.match.url, 'app');
  }
  render() {
    return (
      <div>UserLayout</div>
    );
  }
}

UsersLayout.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userslayout: makeSelectUsersLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usersLayout', reducer });
const withSaga = injectSaga({ key: 'usersLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersLayout);
