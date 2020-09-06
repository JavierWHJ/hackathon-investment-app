import React from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie';
import MarketChartComponent from "../../components/portfolio/components/MarketChartComponent";
import MarketDataComponent from "../../components/portfolio/components/MarketDataComponent";
import WatchListContainer from "../../components/portfolio/containers/WatchListContainer";

const Portfolio = () => {

    const email = Cookies.get('userEmail');
    if(email != undefined){
        const userWatchList = axios.get('http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/watchlist/' + email).then(res => { });
        console.log(userWatchList)
    }

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
