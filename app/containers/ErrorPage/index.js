/**
 *
 * ErrorPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import CenteredLayout from 'components/CenteredLayout';
import { DEFAULT_REDIRECT_PATH, SIGNIN_PATH } from 'containers/App/constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectErrorPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { ERR_NOT_FOUND, ERR_FORBIDDEN } from './constants';

export class ErrorPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { from } = this.props.location.state || { from: { pathname: DEFAULT_REDIRECT_PATH } };
    let errMsg;
    switch (this.props.error) {
      case ERR_NOT_FOUND:
        errMsg = {
          title: {
            ...messages.notFoundTitle,
          },
          content: {
            ...messages.notFoundContent,
          },
        };
        break;
      case ERR_FORBIDDEN:
        errMsg = {
          title: {
            ...messages.forbiddenTitle,
          },
          content: {
            ...messages.forbiddenContent,
          },
        };
        break;
      default:
        errMsg = {
          title: {
            ...messages.unknownTitle,
          },
          content: {
            ...messages.unknownContent,
          },
        };
        break;
    }
    return (
      <CenteredLayout>
        <div>
          <h1 style={{ textAlign: 'center' }}>
            <FormattedMessage {...errMsg.title}></FormattedMessage>
          </h1>
          <h4>
            <FormattedMessage {...errMsg.content}></FormattedMessage>
          </h4>
          <div style={{ textAlign: 'center' }}>
            <Link to={{ pathname: SIGNIN_PATH, state: { from } }}>
              <Button type="primary" onClick={() => {}}>Login</Button>
            </Link>
            <Link to={{ pathname: '/' }}>
              <Button onClick={() => {}}>Go to home</Button>
            </Link>
          </div>
        </div>
      </CenteredLayout>
    );
  }
}

ErrorPage.propTypes = {
//  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  errorpage: makeSelectErrorPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'errorPage', reducer });
const withSaga = injectSaga({ key: 'errorPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ErrorPage);
