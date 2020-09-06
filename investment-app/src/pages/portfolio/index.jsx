import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie';
import MarketChartComponent from "../../components/portfolio/components/MarketChartComponent";
import MarketDataComponent from "../../components/portfolio/components/MarketDataComponent";
import WatchListContainer from "../../components/portfolio/containers/WatchListContainer";
import HoldingsContainer from "../../components/portfolio/containers/HoldingsContainer";

const Portfolio = () => {
    const email = Cookies.get('userEmail');
    const [userWatchList, setUserWatchList] = useState([]);

    useEffect(() => {
        if (email != undefined) {
            updateUserWatchList(email);
        }
    }, [])

    const updateUserWatchList = (email) => {
        axios.get('http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/watchlist/' + email).then(res => {
            const watchlist = res.data.result.watchlist;
            Promise.all(Object.keys(watchlist).map((symbol) => {
                return axios.get(
                    "http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/daily/" + symbol
                ).then(res => {
                    const symbolInfo = {
                        symbol: symbol,
                        price: res.data.current_price,
                        percentage: res.data.percent_change
                    }
                    return symbolInfo
                });
            })).then(res => {
                setUserWatchList(res);
            })
        });
    }

    const addUserWatchList = (email, ticker) => {
        axios({
            method: "post",
            url:
                "http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/watchlist",
            headers: {},
            data: {
                email: email,
                ticker: ticker,
            },
        }).then(res => {
            updateUserWatchList(email);
        });
    }

    return (
        <Layout>
            <Container fluid>
                <Tabs defaultActiveKey="watchlist" id="uncontrolled-tab-example">
                    <Tab eventKey="watchlist" title="Watchlist">
                        <Row className="mt-3">
                            <Col xs={8}>
                                <MarketChartComponent />
                            </Col>
                            <Col>
                                <WatchListContainer watchlist={userWatchList} addUserWatchList={addUserWatchList}/>
                            </Col>
                        </Row>
                        <MarketDataComponent />
                    </Tab>
                    <Tab eventKey="holdings" title="Holdings">
                        <HoldingsContainer/>
                    </Tab>
                </Tabs>
            </Container>
        </Layout>
    );
};

export default Portfolio;
