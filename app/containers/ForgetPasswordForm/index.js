/**
 *
 * ForgetPasswordForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { Form, Card, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import CenteredLayout from 'components/CenteredLayout';
import { SIGNIN_PATH } from 'containers/App/constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForgetPasswordForm from './selectors';
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
export class ForgetPasswordForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenteredLayout>
        <Card title="Request reset password email">
          <LoginForm onSubmit={this.handleSubmit}>
            <FormItem>
              {this.props.form.getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email' }],
              })(
                <Input prefix="@" placeholder="Email" />
              )}
            </FormItem>
            <FormItem>
              <LoginButton type="primary" htmlType="submit">
                Send email
              </LoginButton>
              <Link to={SIGNIN_PATH} >Back to login</Link>
            </FormItem>
          </LoginForm>
        </Card>
      </CenteredLayout>
    );
  }
}

ForgetPasswordForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  form: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  forgetpasswordform: makeSelectForgetPasswordForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgetPasswordForm', reducer });
const withSaga = injectSaga({ key: 'forgetPasswordForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create()
)(ForgetPasswordForm);
