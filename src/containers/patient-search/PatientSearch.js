import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { IdcardOutlined, SearchOutlined } from "@ant-design/icons";
import "./PatientSearch.css";

const PatientSearchForm = ({ handleSubmit, ...props }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={(values) => handleSubmit(values)}
      style={{
        margin: "0 auto",
        width: "30%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Form.Item
        style={{ width: "100%" }}
        name="id"
        rules={[
          { required: true, message: "Please enter patient's national id!" },
        ]}
      >
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Enter patient national id"
          maxLength={14}
        />
      </Form.Item>
      <Form.Item style={{ marginTop: "20px" }} shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Search <SearchOutlined />
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default PatientSearchForm;
