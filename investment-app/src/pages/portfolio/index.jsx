import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie';
import MarketChartComponent from "../../components/portfolio/components/MarketChartComponent";
import MarketDataComponent from "../../components/portfolio/components/MarketDataComponent";
import WatchListContainer from "../../components/portfolio/containers/WatchListContainer";
import HoldingsContainer from "../../components/portfolio/containers/HoldingsContainer";
import PieChartComponent from "../../components/portfolio/components/PieChartComponent";



const Portfolio = () => {
    const email = Cookies.get('userEmail');
    const [userInfo, setUserInfo] = useState({});
    const [userWatchList, setUserWatchList] = useState([]);
    const [userHoldings, setUserHoldings] = useState([]);
    const [userHoldingsPrices, setUserHoldingsPrices] = useState([]);
    const [indexHistoricalData, setIndexHistoricalData] = useState([]);


    useEffect(() => {
        if (email != undefined) {
            updateUserWatchList(email);
            updateUserHoldings(email);
            updateIndexHistoricalData();
        }
    }, [])

    console.log(indexHistoricalData);

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

    const deleteUserWatchList = (email, ticker) => {
        const url = "http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/watchlist/" + ticker;
        axios({
            method: "delete",
            url: url,
            headers: {},
            data: {
                email: email
            },
        }).then(res => {
            updateUserWatchList(email);
        });
    }

    const updateUserHoldings = (email) => {
        axios.get('http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/user/' + email)
        .then(res => {
            const holdings = res.data.result.holdings;
            setUserInfo(res.data.result);
            setUserHoldings(res.data.result.holdings);
            // console.log(holdings);
            Promise.all(Object.keys(holdings).map((symbol) => {
                return axios.get(
                    "http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/daily/" + symbol
                ).then(res => {
                    const symbolInfo = {
                        symbol: symbol,
                        avgPrice: holdings[symbol][0],
                        shares: holdings[symbol][1],
                        currentPrice: res.data.current_price,
                        percentage: res.data.percent_change
                    }
                    return symbolInfo
                });
            })).then(res => {
                setUserHoldingsPrices(res);
            })
        })
    }

    const updateIndexHistoricalData = () => {
        axios.get('http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/history/^GSPC')
        .then(res => {
            setIndexHistoricalData(res);
        })
    }

    return (
        <Layout>
            <Container fluid>
                <Tabs className="mt-2" defaultActiveKey="watchlist" id="uncontrolled-tab-example">
                    <Tab eventKey="watchlist" title="Watchlist">
                        <Row className="mt-3">
                            <Col xs={8}>
                                <MarketChartComponent />
                            </Col>
                            <Col>
                                <WatchListContainer email={email} watchlist={userWatchList} addUserWatchList={addUserWatchList} deleteUserWatchList={deleteUserWatchList}/>
                            </Col>
                        </Row>
                        <MarketDataComponent />
                    </Tab>
                    <Tab eventKey="holdings" title="Holdings">
                        <Row>
                            <Col xs={8}>
                                <HoldingsContainer userInfo={userInfo} holdings={userHoldings} holdingsPrices={userHoldingsPrices} index={indexHistoricalData}/>
                            </Col>
                            <Col xs={3}>
                                <PieChartComponent userInfo={userInfo} holdingsPrices={userHoldingsPrices}/>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </Layout>
    );
};

export default Portfolio;
