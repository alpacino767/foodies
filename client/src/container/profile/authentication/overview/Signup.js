import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Row, Col, Form, Input, Button } from 'antd';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';

import { useDispatch } from 'react-redux';
import { AuthFormWrap } from './style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { register } from '../../../../redux/authentication/actionCreator';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  // console.log('see history', hisntory);
  // const handleSubmit = (values) => {
  //   const { email, password, username } = values;
  //   console.log('Email', email);
  //   console.log('password', password);
  //   console.log('username', username);
  //   dispatch(register(values, () => navigate('/admin')));
  // };
  const handleSubmit = useCallback(
    (values) => {
      console.log('Handling submit..., values', values, register);
      console.log('Navigate:', navigate);
      // navigate('/login');
      dispatch(register(values, () => navigate('/admin')));
    },
    [navigate, dispatch],
  );

  const onChange = (checked) => {
    setState({ ...state, checked });
  };
  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Sign Up HexaDash</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="register" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="username"
                rules={[
                  {
                    message: 'Please input your username!',
                    required: true,
                  },
                  {
                    type: 'text',
                    message: 'The input is not valid username!',
                  },
                  {
                    min: 4,
                    message: 'Password must be at least 4 characters long',
                  },
                ]}
                initialValue="ninjadash"
                label="Username"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    message: 'Please input your username or Email!',
                    required: true,
                  },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
                initialValue="ninjadash@dm.com"
                label="Username or Email Address"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    message: 'Please input your password!',
                    required: true,
                  },
                  {
                    min: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                ]}
                initialValue="12345"
                label="Password"
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Creating an account means you’re okay with our Terms of Service and Privacy Policy
                </Checkbox>
              </div>
              <Form.Item>
                <Button
                  className="btn-create"
                  htmlType="submit"
                  type="primary"
                  size="large"
                  disabled={!form.isFieldsTouched() || form.getFieldsError().some((field) => field.errors.length > 0)}
                >
                  Create Account
                </Button>
              </Form.Item>
              <p className="ninjadash-form-divider">
                <span>Or</span>
              </p>
              <ul className="ninjadash-social-login">
                <li>
                  <Link className="google-social" to="#">
                    <ReactSVG src={require(`../../../../static/img/icon/google-plus.svg`).default} />
                  </Link>
                </li>
                <li>
                  <Link className="facebook-social" to="#">
                    <UilFacebook />
                  </Link>
                </li>
                <li>
                  <Link className="twitter-social" to="#">
                    <UilTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="github-social" to="#">
                    <UilGithub />
                  </Link>
                </li>
              </ul>
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
            <p>
              Already have an account?<Link to="/">Sign In</Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignUp;
