import React from "react";
import { Drawer, Divider, Col, Row } from "antd";

const pStyle = {
  fontSize: 16,
  lineHeight: "24px",
  display: "block",
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    className="site-description-item-profile-wrapper"
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
    }}
  >
    {content}
  </div>
);

const DiagnosisDetails = ({ visible, onClose, diagnosis }) => {
  console.log(diagnosis);
  return (
    <Drawer
      width={640}
      placement="bottom"
      closable={true}
      onClose={onClose}
      visible={visible}
      title="Report"
    >
      <p className="site-description-item-profile-p" style={pStyle}>
        Diagnosis
      </p>
      <Row>
        <Col span={12}>
          <DescriptionItem content={diagnosis ? diagnosis.diagnosis : ""} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p" style={pStyle}>
        Description
      </p>
      <Row>
        <Col span={24}>
          <DescriptionItem content={diagnosis ? diagnosis.description : ""} />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p" style={pStyle}>
        Symptoms & Treatment
      </p>
      <Row>
        <Col span={12}>
          {diagnosis
            ? diagnosis.symptoms.map((symptom, index) => (
                <DescriptionItem content={symptom} key={index} />
              ))
            : ""}
        </Col>
        <Col span={12}>
          {diagnosis
            ? diagnosis.treatments.map((treatment, index) => (
                <DescriptionItem content={treatment} key={index} />
              ))
            : ""}
        </Col>
      </Row>
    </Drawer>
  );
};

export default DiagnosisDetails;
