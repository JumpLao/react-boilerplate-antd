/**
 *
 * UserDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class UserDetailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userdetailpage: makeSelectUserDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userDetailPage', reducer });
const withSaga = injectSaga({ key: 'userDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserDetailPage);
