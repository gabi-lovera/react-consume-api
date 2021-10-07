import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

export default function Head() {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Inicio</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">More</Menu.Item>
      </Menu>
    </Header>
  );
}
