/**
 *
 * SigninForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Card, Input, Icon, Button, Alert } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import { login } from 'containers/App/actions';
import { DEFAULT_REDIRECT_PATH } from 'containers/App/constants';
import CenteredLayout from 'components/CenteredLayout';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSigninForm, { makeSelectAuth } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
const LoginButton = styled(Button)`
  display: block;
  width: 100%;
`;
const LoginForm = styled(Form)`
  width:250px;
`;
const FormItem = Form.Item;
export class SigninForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(login(values));
      }
    });
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: DEFAULT_REDIRECT_PATH } };
    if (this.props.auth.token && moment(this.props.auth.expire) >= moment()) { // is authenticated
      return (
        <Redirect to={from}></Redirect>
      );
    }
    return (
      <CenteredLayout>
        <Card title="Login to your account">
          <LoginForm onSubmit={this.handleSubmit}>
            <FormItem>
              {this.props.form.getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {this.props.form.getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <div>Hint demo/demo</div>
              <Link to="/forgotpassword">Forgot password</Link>
              <LoginButton type="primary" htmlType="submit" loading={this.props.auth.loading}>
                Log in
              </LoginButton>
              Or <Link to="/signup" >register now!</Link>
              {this.props.auth.error && <Alert description={this.props.auth.error} type="error" closable />}
            </FormItem>
          </LoginForm>
        </Card>
      </CenteredLayout>
    );
  }
}

SigninForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.object,
  auth: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  signinform: makeSelectSigninForm(),
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signinForm', reducer });
const withSaga = injectSaga({ key: 'signinForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(SigninForm);
