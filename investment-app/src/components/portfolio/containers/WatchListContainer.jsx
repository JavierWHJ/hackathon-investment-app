import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import WatchListComponent from "../components/WatchListComponent";

const WatchListContainer = (props) => {

    return (
        <>
            <h2 className="mb-3 text-center border">Your Watchlist</h2>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {props.watchlist.map((stock) => {
                        return (
                            <WatchListComponent key={stock} stock={stock} />
                        );
                    })}
                </tbody>
            </Table>
            <Button block className="mt-4">
                Add Watchlist
            </Button>
        </>
    );
};

export default WatchListContainer;
