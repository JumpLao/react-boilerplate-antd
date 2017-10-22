/**
 *
 * SignupForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { Form, Card, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import CenteredLayout from 'components/CenteredLayout';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { SIGNIN_PATH } from 'containers/App/constants';
import makeSelectSignupForm from './selectors';
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
export class SignupForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleConfirmPassword(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('password')) {
      callback(new Error('Password mismatch'));
    }
    callback();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render() {
    return (
      <CenteredLayout>
        <Card title="Create your account">
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
              {this.props.form.getFieldDecorator('confirmPassword', {
                rules: [
                  { required: true, message: 'Please re-enter your Password!' },
                  { validator: this.handleConfirmPassword, message: 'Confirm password should match with password' }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Confirm password" />
              )}
            </FormItem>
            <FormItem>
              <LoginButton type="primary" htmlType="submit">
                Create account
              </LoginButton>
              Already have an account? <Link to={SIGNIN_PATH} >Signin</Link>
            </FormItem>
          </LoginForm>
        </Card>
      </CenteredLayout>
    );
  }
}

SignupForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  signupform: makeSelectSignupForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signupForm', reducer });
const withSaga = injectSaga({ key: 'signupForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create()
)(SignupForm);
