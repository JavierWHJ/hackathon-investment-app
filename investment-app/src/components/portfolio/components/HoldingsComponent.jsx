import React from "react";
import { useRouter } from "next/router";

const HoldingsComponent = (props) => {
    const router = useRouter();
    const {stock, info} = props;
    const price = info[0];
    const shares = info[1];

    return (
        <tr key={props.stock} onClick={() => router.push("/portfolio/" + props.stock)} style={{ cursor: "pointer" }}>
            <td>{props.stock}</td>
            <td>{shares}</td>
            <td>{price}</td>
            <td>{price}</td>
            <td>{props.stock.marketValue}</td>
            <td>{props.stock.percentReturn}</td>
        </tr>
    );
};

export default HoldingsComponent;
