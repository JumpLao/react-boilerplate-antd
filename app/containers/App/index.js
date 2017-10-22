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
import { Switch, Route, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from 'containers/PrivateRoute/Loadable';
import HomeLayout from 'containers/HomeLayout/Loadable';
import AdminLayout from 'containers/AdminLayout/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

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
          <Switch>
            <PrivateRoute path="/admin" component={AdminLayout}></PrivateRoute>
            <Route path="" component={HomeLayout}></Route>
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

App.propTypes = {
 // dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
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
