import React, { useState, useEffect } from "react";
import { List, Avatar, Layout, Button, Modal, Form, Input } from "antd";
import HeaderComponent from "../../components/header/Header";
import {
  ArrowLeftOutlined,
  UserOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { navigate } from "@reach/router";
import { searchByPatientNationalId, addDescription } from "../../api/patients";
import NewDiagnosis from "../../containers/diagnosis/NewDiagnosis";
import DiagnosisDetails from "../../containers/diagnosis/DiagnosisDetails";

const { Content } = Layout;
const { TextArea } = Input;

const PatientProfile = ({ ...props }) => {
  const [patient, setPatient] = useState({});
  const [newDiagnosisModal, setNewDiagnosisModal] = useState(false);
  const [diagnosisDetailsModal, setDiagnosisDetailsModal] = useState(false);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    findPatientById();
  }, []);

  const findPatientById = async () => {
    const patient = await searchByPatientNationalId(props.patientId);
    setPatient(patient);
  };

  const handleOnSubmit = async form => {
    try {
      const {
        diagnose,
        description,
        symptoms = [],
        treatments = []
      } = await form.validateFields();
      form.resetFields();
      const d = await addDescription(
        props.patientId,
        diagnose,
        description,
        symptoms,
        treatments
      );
      setPatient({
        ...patient,
        diagnosis: [...patient.diagnosis, d]
      });
      setNewDiagnosisModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleListItemClicked = index => {
    const diagnosis = patient.diagnosis[index];
    setSelectedDiagnosis(diagnosis);
    setDiagnosisDetailsModal(true);
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
          marginTop: "20px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
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
            dataSource={patient ? patient.diagnosis : []}
            renderItem={(item, index) => (
              <List.Item
                key={index}
                onClick={e => handleListItemClicked(index)}
              >
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
          onClick={() => setNewDiagnosisModal(true)}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{ position: "absolute", right: "5px", bottom: "20px" }}
        />
      </Content>

      <NewDiagnosis
        visible={newDiagnosisModal}
        onClose={() => setNewDiagnosisModal(false)}
        onSubmit={handleOnSubmit}
      />

      <DiagnosisDetails
        visible={diagnosisDetailsModal}
        onClose={() => setDiagnosisDetailsModal(false)}
        diagnosis={selectedDiagnosis}
      />
    </>
  );
};

export default PatientProfile;
