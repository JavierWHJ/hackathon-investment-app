import React from "react";
import { useRouter } from "next/router";

const HoldingsComponent = (props) => {
    const router = useRouter();
    const symbol = props.info.symbol;
    const avgPrice = props.info.avgPrice;
    const shares = props.info.shares;
    const currentPrice = props.info.currentPrice
    const marketValue = shares * currentPrice
    const percentReturn = (marketValue / (avgPrice * shares) - 1) * 100

    console.log(props.info)

    return (
        <tr key={symbol} onClick={() => router.push("/portfolio/" + symbol)} style={{ cursor: "pointer" }}>
            <td>{symbol}</td>
            <td>{shares}</td>
            <td>{avgPrice}</td>
            <td>{currentPrice}</td>
            <td>{marketValue}</td>
            <td>{percentReturn.toFixed(2) + "%"}</td>
        </tr>
    );
};

export default HoldingsComponent;
