import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateChannels, getChannels } from '../../../../redux/channels/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';

import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';
// import { login } from '../../../../redux/authentication/actionCreator';

function Profile() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });

  const handlegetChannels = useCallback(() => {
    dispatch(getChannels());
  }, [dispatch]);
  // handlegetChannels();

  useEffect(() => {
    handlegetChannels();
  }, [handlegetChannels]);

  console.log('channels', channels);
  const [channelDetails, setChannelDetails] = useState({
    title: '',
    description: '',
    streamKey: '',
    username: '',
    avatarUrl: '',
  });
  const channel = channels.channels;
  useEffect(() => {
    if (channel) {
      console.log('reaching here 1', channel.title);
      setChannelDetails({
        title: channel.title,
        description: channel.description,
        streamKey: channel.streamKey,
        username: channel.username,
      });
      localStorage.setItem('channelDetails', JSON.stringify(channel));
      form.setFieldsValue({
        username: channel.username || '',
        title: channel.title || '',
        avatarUrl: channel.avatarUrl || '',
        description: channel.description || '',
      });
    }
  }, [channel, form]);

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    try {
      setState({ ...state, values: { ...values, tags: state.tags } });
      const updatedData = {
        title: values.title,
        avatarUrl: values.avatarUrl,
        description: values.description,
        username: values.username,
      };
      console.log('updated data', updatedData);
      dispatch(UpdateChannels(updatedData));
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };
  return (
    <Cards
      title={
        <div className="setting-card-title">
          <Heading as="h4">Edit Channel</Heading>
        </div>
      }
    >
      <Row justify="center">
        <Col xl={12} lg={16} xs={24}>
          <BasicFormWrapper>
            <Form name="editProfile" onFinish={handleSubmit} form={form}>
              <Form.Item
                name="username"
                initialValue={channelDetails.username}
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Username is required',
                  },
                  {
                    min: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  {
                    max: 8,
                    message: 'Username must be at most 8 characters',
                  },
                  {
                    pattern: /^\S+$/,
                    message: 'Username must not contain spaces',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="title"
                initialValue={channelDetails.title}
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Title is required',
                  },
                  {
                    min: 3,
                    message: 'Title must be at least 3 characters',
                  },
                  {
                    max: 30,
                    message: 'Title must be at most 30 characters',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="avatarUrl"
                initialValue={channelDetails.avatarUrl}
                label="AvatarUrl"
                rules={[
                  {
                    required: true,
                    message: 'AvatarUrl is required',
                  },
                  {
                    pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    message: 'Please enter a valid URL for images',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="description"
                initialValue={channelDetails.description}
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'Description is required',
                  },
                  {
                    min: 10,
                    message: 'Description must be at least 10 characters',
                  },
                  {
                    max: 200,
                    message: 'Description must be at most 200 characters',
                  },
                ]}
              >
                <Input.TextArea rows={3} />
              </Form.Item>
              <div className="setting-form-actions">
                <Button size="default" htmlType="submit" type="primary">
                  Update Channel
                </Button>
                &nbsp; &nbsp;
                <Button size="default" onClick={handleCancel} type="light">
                  Cancel
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </Col>
      </Row>
    </Cards>
  );
}

export default Profile;
