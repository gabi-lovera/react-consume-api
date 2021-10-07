import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import axios from "axios";
import Head from "./components/Head";
import Form from "./components/Form";
import Carta from "./components/Carta";
import NotFound from "./components/NotFound";
import { Layout, Typography } from "antd";
const { Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const onFinish = (values) => {
    setLoading(true);
    var search = values.content;
    var perPage = values.amount;
    setTitle(search);

    if (search && perPage !== "") {
      const url =
        "https://api.pexels.com/v1/search?query=" +
        search +
        "&per_page=" +
        perPage;
      const access_token =
        "563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692";
      axios
        .get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((data) => {
          setResult(data.data.photos);
          setLoading(false);
          console.log(data.data.photos);
        });
    } else {
      setResult([]);
    }
  };

  return (
    <Layout>
      <Head />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Title style={{ marginTop: 34 }}>Escribe alguna cosa</Title>
        <Form onFinish={onFinish} loading={loading} />
        {result.length > 0 ? (
          <Carta result={result} loading={loading} title={title} />
        ) : (
          <NotFound />
        )}
      </Content>
      <Footer style={{ textAlign: "center" }}>©2021</Footer>
    </Layout>
  );
}

export default App;
