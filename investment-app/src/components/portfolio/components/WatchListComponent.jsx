import React from "react";
import { useRouter } from "next/router";

const WatchListComponent = (props) => {
    const router = useRouter();

    return (
        <tr
            key={props.symbol}
            onClick={() => router.push("/portfolio/" + props.symbol)}
            style={{ cursor: "pointer" }}
        >
            <td>{props.symbol}</td>
            {/* <td>{props.stock.price}</td> */}
            <td>Changes</td>
        </tr>
    );
};

export default WatchListComponent;
