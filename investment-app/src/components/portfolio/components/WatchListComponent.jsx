import React from "react";
import { useRouter } from "next/router";

const WatchListComponent = (props) => {
    const router = useRouter();

    const checkPercentageValue = (percentage) => {
        return Math.sign(percentage) == 1;
    }

    return (
        <tr
            key={props.stock}
            onClick={() => router.push("/portfolio/" + props.stock.symbol)}
            style={{ cursor: "pointer" }}
        >
            <td>{props.stock.symbol}</td>
            <td>{props.stock.price}</td>
            {checkPercentageValue(props.stock.percentage) ? 
                <td><span className="text-success">{props.stock.percentage}</span></td> : 
                <td><span className="text-danger">{props.stock.percentage}</span></td>}
        </tr>
    );
};

export default WatchListComponent;
