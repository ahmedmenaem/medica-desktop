import React, { useState, useEffect } from "react";
import { List, Avatar, Layout, Button, Modal, Form, Input } from "antd";
import HeaderComponent from "../../components/header/Header";
import {
  ArrowLeftOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { navigate } from "@reach/router";
import { searchByPatientNationalId, addDescription } from "../../api/patients";

const { Content } = Layout;
const { TextArea } = Input;

const PatientProfile = ({ ...props }) => {
  const [patient, setPatient] = useState(null);
  const [newDescriptionModal, setNewDescriptionModal] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    findPatientById();
  }, []);

  const findPatientById = async () => {
    const patient = await searchByPatientNationalId(props.patientId);
    setPatient(patient);
  };

  const handleSaveDiagnosis = async () => {
    try {
      const { description } = await form.validateFields();
      const d = await addDescription(description);
      setPatient({
        ...patient,
        descriptions: [...patient.descriptions, d],
      });
      setNewDescriptionModal(false);
    } catch (ex) {}
  };

  return (
    <>
      <HeaderComponent
        title={patient ? patient.name : ""}
        headerIcon={<ArrowLeftOutlined />}
        onHeaderIconClicked={() => navigate("/")}
      />
      <Content
        style={{
          width: "80%",
          margin: "0 auto",
          position: "relative",
          height: "calc(100vh - 120px)",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Avatar
              style={{ width: "80px", height: "80px", lineHeight: "80px" }}
              size="large"
              icon={<UserOutlined />}
            />
            <h3>{patient ? patient.name : ""}</h3>
            <p>{patient ? patient.id : ""}</p>
          </div>

          <List
            dataSource={patient ? patient.descriptions : []}
            renderItem={(item) => (
              <List.Item key={item}>
                <List.Item.Meta
                  title={"01/10/2020 10:00 am"}
                  description={item.description}
                />
                <div>Dr/{item.doctor}</div>
              </List.Item>
            )}
          />
        </div>
        <Button
          onClick={() => setNewDescriptionModal(true)}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{ position: "absolute", right: "5px", bottom: "20px" }}
        />
      </Content>

      <Modal
        title="Add New Diagnosis"
        visible={newDescriptionModal}
        onOk={handleSaveDiagnosis}
        onCancel={() => setNewDescriptionModal(false)}
        okText="Save"
      >
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={handleSaveDiagnosis}
        >
          <Form.Item
            style={{ width: "100%" }}
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter patient's diagnosis!",
              },
            ]}
          >
            <TextArea
              rows={4}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter patient diagnosis"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PatientProfile;
