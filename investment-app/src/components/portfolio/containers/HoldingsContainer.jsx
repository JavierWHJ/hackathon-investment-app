import React from "react";
import { Row, Table } from "react-bootstrap";
import HoldingsComponent from "../components/HoldingsComponent";

const HoldingsContainer = (props) => {

    return (
        <>
            <Row>

            </Row>
            <Table striped hover>
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
                <tbody>
                    {Object.keys(props.holdings).map((stock) => {
                        return <HoldingsComponent stock={stock} info={props.holdings[stock]} />;
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default HoldingsContainer;