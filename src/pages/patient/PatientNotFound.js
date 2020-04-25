import React, { useState } from "react";
import { Layout, Button, Modal, Form, Input } from "antd";
import HeaderComponent from "../../components/header/Header";
import {
  ArrowLeftOutlined,
  UserOutlined,
  UserAddOutlined,
  IdcardOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { navigate } from "@reach/router";
import { addNewPatient } from "../../api/patients";

const { Content } = Layout;

const PatientNotFound = () => {
  const [patient, setPatient] = useState(null);
  const [newPatientModalVisibility, setNewPatientModalVisibility] = useState(
    false
  );

  const [form] = Form.useForm();

  const handleAddNewPatient = async () => {
    try {
      const { id, name } = await form.validateFields();
      const patient = await addNewPatient(id, name);
      console.log(patient);
      navigate(`/patients/${patient.id}`);
    } catch (ex) {}
  };
  return (
    <>
      <HeaderComponent
        title={"Not Found!"}
        headerIcon={<ArrowLeftOutlined />}
        onHeaderIconClicked={() => navigate("/")}
      />
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "80vh",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <UserOutlined style={{ fontSize: "100px" }} />
            <h1>Patient not found!</h1>
          </div>
          <div>
            <Button
              style={{ marginRight: "5px" }}
              type="primary"
              onClick={() => navigate("/")}
            >
              back to search <SearchOutlined />
            </Button>
            <Button
              type="primary"
              onClick={() => setNewPatientModalVisibility(true)}
            >
              new patient <UserAddOutlined />
            </Button>
          </div>
        </div>
      </Content>

      <Modal
        title="Add new patient"
        visible={newPatientModalVisibility}
        onOk={handleAddNewPatient}
        onCancel={() => setNewPatientModalVisibility(false)}
        okText="Save"
      >
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={handleAddNewPatient}
        >
          <Form.Item
            style={{ width: "100%", marginBottom: "10px" }}
            name="id"
            rules={[
              {
                required: true,
                message: "Please enter patient's national id!",
              },
            ]}
          >
            <Input
              prefix={<IdcardOutlined />}
              placeholder="Enter patient national id"
              maxLength={14}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter patient's name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter patient name"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PatientNotFound;
