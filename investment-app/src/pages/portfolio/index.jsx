import React from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col } from "react-bootstrap";
import MarketChartContainer from "../../components/portfolio/containers/MarketChartContainer";

const Portfolio = () => {
    return (
        <Layout>
            <Container fluid>
                <Row>
                  <Col xs={8}>
                    <MarketChartContainer />
                  </Col>
                  <Col>
                    hello
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <MarketChartContainer/>
                  </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Portfolio;
