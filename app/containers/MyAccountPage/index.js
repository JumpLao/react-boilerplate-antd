/**
 *
 * MyAccountPage
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
import makeSelectMyAccountPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyAccountPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MyAccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myaccountpage: makeSelectMyAccountPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myAccountPage', reducer });
const withSaga = injectSaga({ key: 'myAccountPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyAccountPage);
