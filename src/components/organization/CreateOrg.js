import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { useState } from "react";
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
/* eslint-enable no-template-curly-in-string */
const CreateOrg = () => {
    const [error, seterror] = useState()
    const onFinish = async (values) => {
        const data = values.user;
        console.log(data)
        if (data) {
            const res = await axios.post('http://localhost:3000/org',
                data
            )
            seterror(res.data.msg)
        }

    };
    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
            <Form.Item name={['user', 'members']} label="No. of Members"
                rules={[
                    {
                        type: 'number',
                        required: true,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['user', 'sub_organizations']}
                label="Sub Organizations"
                rules={[
                    {
                        required: true,
                        type: 'number',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'company_size']} label="Company Size">
                <InputNumber />
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
export default CreateOrg;

