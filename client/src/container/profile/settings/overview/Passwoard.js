import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { ChangePasswordWrapper } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { changepassword } from '../../../../redux/authentication/actionCreator';

function Passwoard() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [buttonBlur, setButtonBlur] = useState(false);
  // const auth = useSelector((state) => state.auth);
  const [state, setState] = useState({
    values: null,
  });

  const handleSubmit = (values) => {
    // const { old, new } = values;
    const password = values.old;
    const newPassword = values.new;
    console.log(values);
    dispatch(changepassword(password, newPassword));
    setState({ ...state, values });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  const handleBlur = () => {
    const errors = form.getFieldsError();

    // Check if there are any errors in the form
    const hasErrors = Object.keys(errors).some((field) => errors[field]?.length > 0);

    setButtonBlur(hasErrors); // Blur the button if any field has errors
  };

  return (
    <ChangePasswordWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Password Settings</Heading>
            <span>Change or reset your account password</span>
          </div>
        }
      >
        <Row justify="center">
          <Col lg={12} sm={20} xs={24}>
            <BasicFormWrapper>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item
                  name="old"
                  label="Old Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your old password',
                    },
                    {
                      min: 6,
                      max: 12,
                      message: 'Password must be between 6 and 12 characters',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="new"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your new password',
                    },
                    {
                      min: 6,
                      max: 12,
                      message: 'Password must be between 6 and 12 characters',
                    },
                  ]}
                >
                  <Input.Password onBlur={handleBlur} />
                </Form.Item>

                <p className="input-message">Minimum 6 characters</p>

                <Form.Item>
                  <div className="setting-form-actions">
                    <Button
                      disabled={buttonBlur}
                      style={{ filter: buttonBlur ? 'blur(200px)' : 'none' }}
                      htmlType="submit"
                      type="primary"
                    >
                      Change Password
                    </Button>
                    &nbsp; &nbsp;
                    <Button size="default" onClick={handleCancel} type="light">
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </ChangePasswordWrapper>
  );
}

export default Passwoard;
