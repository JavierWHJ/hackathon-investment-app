import React from "react";
import { Table } from "react-bootstrap";
import HoldingsComponent from "../components/HoldingsComponent";

const mockData = {
    totalValue: { totalValue: "100000", totalReturn: "50000", totalPercentReturn: "100"},

    holdings: [
        { key: "AAPL", price: "200", shares: "30", marketValue: "20000", percentReturn: "50" },
        { key: "GOOGL", price: "200", shares: "30", marketValue: "20000", percentReturn: "50" },
        { key: "MSFT", price: "200", shares: "30", marketValue: "20000", percentReturn: "50" },
        { key: "GS", price: "200", shares: "30", marketValue: "20000", percentReturn: "50" },
        { key: "JPM", price: "200", shares: "30", marketValue: "20000", percentReturn: "50" },
    ],
};

const HoldingsContainer = () => {
    return (
        <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Shares</th>
                        <th>Market Value</th>
                        <th>% Return</th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.holdings.map((stock) => {
                        return <HoldingsComponent key={stock.key} stock={stock} />;
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default HoldingsContainer;