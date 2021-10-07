import React from "react";
import { Result, Button, Layout } from "antd";
const { Content } = Layout;

export default function NotFound() {
  return (
    <Content
      className="layout-background"
      style={{
        padding: 24,
        marginTop: 22,
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Lo siento, no se encontró información"
        extra={<Button type="primary">Volver</Button>}
      />
    </Content>
  );
}
