import React from "react";
import { Row, Table, Tabs, Tab } from "react-bootstrap";
import HoldingsComponent from "../components/HoldingsComponent";
import TransactionComponent from "../components/TransactionComponent";

const HoldingsContainer = (props) => {
    console.log(props.userInfo);
    console.log(props.holdingsPrices);

    var portfolioValue = props.userInfo.cash
    
    props.holdingsPrices.forEach(addPortfolioValue);

    function addPortfolioValue(value, index, array) {
        portfolioValue = portfolioValue + value.shares * value.currentPrice;
    }

    console.log(portfolioValue);

    return (
        <div className="mt-4 mx-5">
            <h2>{props.userInfo.name}</h2>
            <Tabs defaultActiveKey="account" id="uncontrolled-tab-example">
                <Tab eventKey="account" title="Account">
                    <h3 className="mt-4">${portfolioValue.toLocaleString('en')}</h3>
                    <p>Portfolio Value</p>
                    <Table className="mt-5" striped hover>
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
                </Tab>
                <Tab eventKey="transactions" title="Transactions">
                    <TransactionComponent transactions={props.userInfo.transactions} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default HoldingsContainer;