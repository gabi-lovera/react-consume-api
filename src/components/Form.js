import React from "react";
import { Form, Input, Button, Row, Col, Layout } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
const { Content } = Layout;

const SearchForm = ({ onFinish, loading }) => {
  return (
    <Content
      className="layout-background"
      style={{
        paddingTop: 24,
        marginTop: 22,
      }}
    >
      <Row className="row-form">
        <Col span={8}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item name="content">
              <Input
                name="content"
                size="large"
                placeholder="Ingrese lo que quiera buscar"
                prefix={<SearchOutlined />}
              />
            </Form.Item>
            <Form.Item name="amount">
              <Input
                name="amount"
                size="large"
                placeholder="Ingrese el número de imagenes"
                prefix={<EditOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Buscar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};

export default SearchForm;
