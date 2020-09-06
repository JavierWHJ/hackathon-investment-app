import React from "react";
import { Table, Button } from "react-bootstrap";
import WatchListComponent from "../components/WatchListComponent";

const mockData = {
    watchlist: [
        { key: "ABC", price: "200" },
        { key: "DEF", price: "200" },
        { key: "GHI", price: "200" },
        { key: "JKL", price: "200" },
        { key: "MNO", price: "200" },
    ],
};

const WatchListContainer = () => {
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
                    {mockData.watchlist.map((stock) => {
                        return <WatchListComponent stock={stock} />;
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
