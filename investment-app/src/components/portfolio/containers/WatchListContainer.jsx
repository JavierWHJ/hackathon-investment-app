import React from "react";
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
    return mockData.watchlist.map((stock) => {
        return <WatchListComponent stock={stock}/>;
    })
};

export default WatchListContainer;
