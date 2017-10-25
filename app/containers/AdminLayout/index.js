/**
 *
 * AdminLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import styled from 'styled-components';
import { Layout /* , Menu, Breadcrumb, Icon */ } from 'antd';
import { logout } from 'containers/App/actions';
// import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { AdminRouter, AdminBreadcrumb, AdminMenu } from './routes';
import makeSelectAdminLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import { toggleSidebarCollapse } from './actions';
// import messages from './messages';
const Logo = styled('div')`
  font-size: 16px;
  color: white;
`;
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;
export class AdminLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleLogout() {
    this.props.dispatch(logout());
  }
  handleCollapse(collapsed) {
    this.props.dispatch(toggleSidebarCollapse(collapsed));
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <Logo>Admin page</Logo>
          </Header>
          <Layout>
            <Sider
              collapsible
              collapsed={this.props.adminlayout.sidebar.collapse}
              onCollapse={this.handleCollapse}
            >
              {AdminMenu(this.props.match.url)}
            </Sider>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                {AdminBreadcrumb(this.props.match.url)}
                {AdminRouter(this.props.match.url)}
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Witsawa ©2017 Created by Witsawa Developers
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </ConnectedRouter>
    );
  }
}

AdminLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  adminlayout: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
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
  withRouter
)(AdminLayout);
