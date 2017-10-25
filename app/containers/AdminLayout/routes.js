import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import 'antd/lib/breadcrumb/style/index.less';
import { Icon, Menu } from 'antd';
import DashboardPage from 'containers/DashboardPage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import UserDetailPage from 'containers/UserDetailPage/Loadable';
import MyAccountPage from 'containers/MyAccountPage/Loadable';
/* eslint-disable object-property-newline */
const routes = [
  { path: '',
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
        <Icon type={route.icon} />{route.menu}
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
    </Switch>);
}
export function AdminMenu(basePath, r = routes) {
  return (
    <Menu theme="dark" mode="inline">
      {AdminMenuRecursive(basePath, r)}
      <Menu.Item><Icon type="logout" /><span>Logout</span></Menu.Item>
    </Menu>);
}
export default routes;
