/* eslint-disable react/prop-types */
import { Card, Col, Input, Row } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import Loader from "./Loader";

const Cryptocurrencises = ({ simlified }) => {
  const count = simlified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simlified && (
        <div className="search-crypto">
          <Input
            value={searchTerm}
            placeholder="Search Cryptocurrenvy"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((curr) => (
          <Col key={curr.uuid} xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${curr.uuid}`}>
              <Card
                title={`${curr.rank} ${curr.name}`}
                extra={
                  <img
                    src={curr.iconUrl}
                    alt={curr.name}
                    className="crypto-image"
                  />
                }
                hoverable
              >
                <p>Price: {millify(curr.price)}</p>
                <p>Market Cap: {millify(curr.marketCap)}</p>
                <p>Daily Change: {millify(curr.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencises;
