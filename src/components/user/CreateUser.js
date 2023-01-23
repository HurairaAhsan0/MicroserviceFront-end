import { Button, Form, Input } from 'antd';
import axios from "axios";
import { useState } from 'react';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const CreateUser = () => {
    const [error, seterror] = useState()
    const OnFinish = async (values) => {
        const data = values.user;
        if (data) {
            const res = await axios.post('http://localhost:3000/auth/signUp',
                data
            )
            seterror(res.data.msg)
        }

    };
    return (
        <Form {...layout} name="nest-messages" onFinish={OnFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Full Name"
                rules={[
                    {
                        required: true,
                        min: 6,
                        max: 20,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'userName']} label="User Name"
                rules={[
                    {
                        required: true,
                        min: 5,
                        max: 20,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                label="Password"
                rules={[
                    {
                        required: true,
                        type: 'string',
                        min: 8,
                        max: 20,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'role']} label="Role"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'bio']} label="Bio">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {error && <h1>{error}</h1>}
            </Form.Item>
        </Form>
    );
};
export default CreateUser;

