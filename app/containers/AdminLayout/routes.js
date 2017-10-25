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
  { path: '', component: DashboardPage, title: 'Dashboard' },
  { path: 'users', title: 'Users', children: [
    { path: '', component: UsersPage },
    { path: ':id', component: UserDetailPage, title: 'User\'s info' },
  ] },
  { path: 'myaccount', component: MyAccountPage, title: 'My account' },
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
        <Route strict exact={!(route.children && route.children.length > 0)} key={joinPath(basePath, route.path)} path={joinPath(basePath, route.path)}>
          <span>
            {route.title && <span className="ant-breadcrumb-separator">/</span>}
            <Link className="ant-breadcrumb-link" to={joinPath(basePath, route.path)}>{route.title}</Link>
            {route.children && route.children.length > 0 && AdminBreadcrumbRecursive(joinPath(basePath, route.path), route.children)}
          </span>
        </Route>
      ))}
    </Switch>);
}
export function AdminBreadcrumb(basePath, r = routes) {
  return (
    <div style={{ margin: '16px 0' }}>
      <Link className="ant-breadcrumb-link" to={`${basePath}`}><Icon type="home" style={{ fontSize: 16 }}></Icon></Link>
      {AdminBreadcrumbRecursive(basePath, r)}
    </div>
  );
}
export function AdminRouter(basePath, r = routes) {
  return (
    <Switch>
      {r.map((route) => (
        <Route strict exact={!(route.children && route.children.length > 0)} key={joinPath(basePath, route.path)} path={joinPath(basePath, route.path)} component={route.component}>
          {route.children && route.children.length > 0 && AdminRouter(joinPath(basePath, route.path), route.children)}
        </Route>
      ))}
    </Switch>);
}
function AdminMenuRecursive(basePath, r = routes) {
  return r.map((route) => {
    let view = (<Menu.Item key={joinPath(basePath, route.path)}><Link to={joinPath(basePath, route.path)}><Icon type="appstore" />{route.title}</Link></Menu.Item>);
    if (route.children && route.children.length > 0) {
      view = (
        <Menu.SubMenu title={<span><Icon type="appstore" /><span>{route.title}</span></span>} key={joinPath(basePath, route.path)}>
          {AdminMenuRecursive(joinPath(basePath, route.path), route.children)}
        </Menu.SubMenu>
      );
    }
    return view;
  });
}
export function AdminMenu(basePath, r = routes) {
  return (
    <Menu theme="dark" mode="inline">
      {AdminMenuRecursive(basePath, r)}
      <Menu.Item><Icon type="appstore" /><span>Logout</span></Menu.Item>
    </Menu>);
}
export default routes;
