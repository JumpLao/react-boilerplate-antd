/**
 *
 * AdminLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { logout } from 'containers/App/actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAdminLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu;
export class AdminLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.dispatch(logout());
  }
  render() {
    return (
      <Layout>
        <Header>Test</Header>
        <Content>
          <Button onClick={this.handleLogout}>Logout</Button>
        </Content>
        <Footer>Test</Footer>
      </Layout>
    );
  }
}

AdminLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminlayout: makeSelectAdminLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'adminLayout', reducer });
const withSaga = injectSaga({ key: 'adminLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminLayout);
