import React from "react";
import { Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import HoldingsComponent from "../components/HoldingsComponent";
import TransactionComponent from "../components/TransactionComponent";
import SummaryComponent from "../components/SummaryComponent";

const HoldingsContainer = (props) => {
    var portfolioValue = props.userInfo.cash
    props.holdingsPrices.forEach((value) => {
        portfolioValue = portfolioValue + value.shares * value.currentPrice;
    });

    const totalGainPercent = (portfolioValue/100000000 - 1) * 100

    return (
        <div className="mt-4 mx-5">
            <h2>{props.userInfo.name}</h2>
            <Tabs defaultActiveKey="account" id="uncontrolled-tab-example">
                <Tab eventKey="account" title="Account">
                    <h3 className="mt-4">${parseInt(portfolioValue).toLocaleString('en')}</h3>
                    <p>Portfolio Value</p>
                    <Table className="mt-3" striped hover>
                        <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Shares</th>
                                <th>Avg Price</th>
                                <th>Current Price</th>
                                <th>Market Value</th>
                                <th>% Return</th>
                            </tr>
                        </thead>
                        {/* {console.log(props.holdingsPrices)} */}
                        <tbody>
                            {Object.keys(props.holdingsPrices).map((stock) => {
                                return <HoldingsComponent stock={stock} info={props.holdingsPrices[stock]} />;
                            })}
                        </tbody>
                    </Table>
                    <SummaryComponent info={props.userInfo} index={props.index}/>
                </Tab>
                <Tab eventKey="transactions" title="Transactions">
                    <TransactionComponent transactions={props.userInfo.transactions} />
                    
                </Tab>
            </Tabs>
        </div>
    );
};

export default HoldingsContainer;