import React from "react";
import {
  Space,
  Spin,
  Image,
  Row,
  Col,
  Divider,
  Card,
  Layout,
  Typography,
  Statistic,
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { Link } = Typography;
const { Content } = Layout;

const Carta = ({ result, loading, title }) => {
  return (
    <Content
      className="layout-background"
      style={{
        padding: 24,
        marginTop: 22,
      }}
    >
      <Row gutter={16}>
        {result.map((item) => (
          <Col className="gutter-row" span={6}>
            <Space direction="vertical">
              <Card title={title} style={{ margin: 5 }}>
                {loading ? (
                  <div className="div-spin">
                    <Spin />
                  </div>
                ) : (
                  <Image
                    width={200}
                    src={item.src.landscape}
                    alt={item.photographer}
                  />
                )}
                <Divider />
                <Link>{item.photographer}</Link>
                <Statistic
                  value={Math.floor(Math.random() * (111 - 2300 + 1) + 2300)}
                  prefix={<LikeOutlined />}
                />
              </Card>
            </Space>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Carta;
