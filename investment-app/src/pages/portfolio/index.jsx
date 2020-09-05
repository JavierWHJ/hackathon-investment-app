import React from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MarketChartComponent from "../../components/portfolio/components/MarketChartComponent";
import MarketDataComponent from "../../components/portfolio/components/MarketDataComponent";
import WatchListContainer from "../../components/portfolio/containers/WatchListContainer";

const Portfolio = () => {
    return (
        <Layout>
            <Container fluid>
                <Tabs
                    defaultActiveKey="watchlist"
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="watchlist" title="Watchlist">
                        <Row className="mt-3">
                            <Col xs={8}>
                                <MarketChartComponent />
                            </Col>
                            <Col>
                                <WatchListContainer />
                            </Col>
                        </Row>
                        <MarketDataComponent />
                    </Tab>
                    <Tab eventKey="holdings" title="Holdings"></Tab>
                </Tabs>
            </Container>
        </Layout>
    );
};

export default Portfolio;
