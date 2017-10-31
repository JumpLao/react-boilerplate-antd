import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import 'antd/lib/breadcrumb/style/index.less';
import { Icon, Menu } from 'antd';

import DashboardPage from 'containers/DashboardPage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import UserDetailPage from 'containers/UserDetailPage/Loadable';
import MyAccountPage from 'containers/MyAccountPage/Loadable';
import ErrorPage from 'containers/ErrorPage/Loadable';
import { ERR_NOT_FOUND } from 'containers/ErrorPage/constants';
/* eslint-disable object-property-newline */
const routes = [
  { path: 'dashboard',
    title: 'Dashboard',
    menu: 'Dashboard',
    icon: 'appstore',
    component: DashboardPage,
  },
  { path: 'users',
    title: 'Users',
    menu: 'Users',
    icon: 'user',
    children: [
      { path: '',
        menu: 'User',
        icon: 'man',
        component: UsersPage,
      },
      { path: ':id',
        title: 'User\'s info',
        menu: 'User\'s info',
        icon: 'woman',
        component: UserDetailPage,
      },
    ],
  },
  { path: 'myaccount',
    title: 'My account',
    menu: 'My account',
    icon: 'appstore',
    component: MyAccountPage,
  },
];

const NotFoundPage = (props) => (
  <ErrorPage error={ERR_NOT_FOUND} {...props}></ErrorPage>
);

function joinPath(base, path) {
  let result = `${base}/${path}`;
  if (!(path && path.length > 0)) {
    result = `${base}`;
  }
  return result;
}

function AdminBreadcrumbRecursive(basePath, r = routes) {
  return (
    <Switch>
      {r.map((route) => (
        <Route
          strict
          exact={!(route.children && route.children.length > 0)}
          key={joinPath(basePath, route.path)}
          path={joinPath(basePath, route.path)}
        >
          <span>
            {route.title && <span className="ant-breadcrumb-separator">/</span>}
            <Link
              className="ant-breadcrumb-link"
              to={joinPath(basePath, route.path)}
            >
              {route.title}
            </Link>
            {route.children && route.children.length > 0 &&
              AdminBreadcrumbRecursive(joinPath(basePath, route.path), route.children)}
          </span>
        </Route>
      ))}
    </Switch>);
}
function AdminMenuRecursive(basePath, r = routes) {
  return r.map((route) => {
    let view = (<Menu.Item key={joinPath(basePath, route.path)}>
      <Link to={joinPath(basePath, route.path)}>
        <Icon type={route.icon} /><span>{route.menu}</span>
      </Link>
    </Menu.Item>);
    if (route.children && route.children.length > 0) {
      view = (
        <Menu.SubMenu
          title={<span><Icon type={route.icon} /><span>{route.menu}</span></span>}
          key={joinPath(basePath, route.path)}
        >
          {AdminMenuRecursive(joinPath(basePath, route.path), route.children)}
        </Menu.SubMenu>
      );
    }
    return view;
  });
}

export function AdminBreadcrumb(basePath, r = routes) {
  return (
    <div style={{ margin: '16px 0' }}>
      <Link className="ant-breadcrumb-link" to={`${basePath}`}>
        <Icon type="home" style={{ fontSize: 16 }}></Icon>
      </Link>
      {AdminBreadcrumbRecursive(basePath, r)}
    </div>
  );
}
export function AdminRouter(basePath, r = routes) {
  return (
    <Switch>
      <Route
        exact
        path="/admin"
        render={() => (<Redirect to={{ pathname: '/admin/dashboard' }} />)}
      />
      {r.map((route) => (
        <Route
          strict
          exact={!(route.children && route.children.length > 0)}
          key={joinPath(basePath, route.path)}
          path={joinPath(basePath, route.path)}
          component={route.component}
        >
          {route.children && route.children.length > 0 &&
            AdminRouter(joinPath(basePath, route.path), route.children)}
        </Route>
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  );
}
export function AdminMenu(basePath, r = routes) {
  return AdminMenuRecursive(basePath, r);
}
export default routes;
