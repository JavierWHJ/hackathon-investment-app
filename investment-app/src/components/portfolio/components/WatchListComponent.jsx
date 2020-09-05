import React from "react";

const WatchListComponent = (props) => {
    return (
        <tr>
            <td>{props.stock.key}</td>
            <td>{props.stock.price}</td>
            <td>Changes</td>
        </tr>
    );
};

export default WatchListComponent;
