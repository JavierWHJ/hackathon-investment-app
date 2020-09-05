import React from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col } from "react-bootstrap";
import MarketChartComponent from "../../components/portfolio/components/MarketChartComponent";
import MarketDataComponent from "../../components/portfolio/components/MarketDataComponent";

const Portfolio = () => {
    return (
        <Layout>
            <Container fluid>
                <Row>
                  <Col xs={8}>
                    <MarketChartComponent />
                  </Col>
                  <Col>
                    <MarketDataComponent/>
                  </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Portfolio;
