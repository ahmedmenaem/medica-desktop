import React from "react";
import { PageHeader, Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = ({
  headerIcon,
  onHeaderIconClicked,
  title,
  subTitle,
}) => {
  return (
    <Header
      style={{
        padding: "0",
        background: "#FFF",
        boxShadow: "10px 2px 8px 10px #f0f1f2",
        top: "0px",
        right: "0px",
        left: "0px",
        zIndex: "10",
      }}
    >
      <PageHeader
        className="site-page-header"
        onBack={onHeaderIconClicked}
        backIcon={headerIcon}
        title={title}
        subTitle={subTitle}
      />
    </Header>
  );
};

export default HeaderComponent;
