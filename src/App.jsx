import { Layout, Space, Typography } from "antd";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Cryptocurrencises from "./components/Cryptocurrencises";
import HomePage from "./components/HomePage";

import CryptoDetails from "./components/CryptoDetails";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" exact element={<HomePage />} />

              <Route
                path="/cryptocurrencies"
                exact
                element={<Cryptocurrencises />}
              />
              <Route path="/crypto/:coinId" exact element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All Rights Reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
