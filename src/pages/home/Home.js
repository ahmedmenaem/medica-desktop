import React, { useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import PatientSearch from "../../containers/patient-search/PatientSearch";
import { navigate } from "@reach/router";
import HeaderComponent from "../../components/header/Header";
import { searchByPatientNationalId } from "../../api/patients";
import "./Home.css";

const { Content } = Layout;

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const onSearchSubmit = async ({ id }) => {
    const patient = await searchByPatientNationalId(id);
    if (patient) {
      return navigate(`/patients/${id}`);
    }
    return navigate(`/patients/not-found`);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="site-drawer-render-in-current-wrapper">
      <HeaderComponent
        headerIcon={<MenuOutlined />}
        onHeaderIconClicked={showDrawer}
        subTitle="your medical assistent"
        title="medica"
      />
      <Content>
        <div style={{ display: "flex", height: "80vh", alignItems: "center" }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <h1>medica.</h1>
            <PatientSearch handleSubmit={onSearchSubmit} />
          </div>
        </div>
      </Content>

      <Drawer
        title="Medica"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{ position: "absolute" }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">New Patient</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default HomePage;
