import React from "react";
import { useRouter } from "next/router";

const WatchListComponent = (props) => {
    const router = useRouter();

    return (
        <tr
            key={props.stock}
            onClick={() => router.push("/portfolio/" + props.stock.symbol)}
            style={{ cursor: "pointer" }}
        >
            <td>{props.stock.symbol}</td>
            <td>{props.stock.price}</td>
            <td>{props.stock.percentage}</td>
        </tr>
    );
};

export default WatchListComponent;
