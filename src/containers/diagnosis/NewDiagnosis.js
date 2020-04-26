import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Select } from "antd";
import "./NewDiagnosis.css";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const NewDiagnosis = ({ visible, onClose, onSubmit, ...props }) => {
  const [form] = Form.useForm();
  return (
    <div id="new-diagnosis">
      <Drawer
        title="New Diagnosis"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        placement="bottom"
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={() => onSubmit(form)} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical" form={form} hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="diagnosis"
                label="Diagnosis"
                rules={[
                  {
                    required: true,
                    message: "Please enter patient's Diagnosis",
                  },
                ]}
              >
                <Input placeholder="Please enter patient's Diagnosis" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter description"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.List name="symptoms">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <Form.Item
                          label={index === 0 ? "Symptom" : ""}
                          required={false}
                          key={field.key}
                        >
                          <Form.Item
                            {...field}
                            validateTrigger={["onChange", "onBlur"]}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message:
                                  "Please input symptoms or delete this field.",
                              },
                            ]}
                            noStyle
                          >
                            <Input
                              placeholder="symptom"
                              style={{ width: "60%" }}
                            />
                          </Form.Item>
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            style={{ margin: "0 8px" }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Form.Item>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          style={{ width: "60%" }}
                        >
                          <PlusOutlined /> Add Symptom
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
            </Col>
            <Col span={12}>
              <Form.List name="treatments">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <Form.Item
                          label={index === 0 ? "Treatment" : ""}
                          required={false}
                          key={field.key}
                        >
                          <Form.Item
                            {...field}
                            validateTrigger={["onChange", "onBlur"]}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message:
                                  "Please input Treatment or delete this field.",
                              },
                            ]}
                            noStyle
                          >
                            <Input
                              placeholder="treatment name"
                              style={{ width: "60%" }}
                            />
                          </Form.Item>
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            style={{ margin: "0 8px" }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Form.Item>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          style={{ width: "60%" }}
                        >
                          <PlusOutlined /> Add Treatment
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default NewDiagnosis;
