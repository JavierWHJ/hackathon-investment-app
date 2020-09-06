import React from "react";
import { useRouter } from "next/router";

const WatchListComponent = (props) => {
    const router = useRouter();

    return (
        <tr key={props.stock.key} onClick={() => router.push("/portfolio/" + props.stock.key)} style={{ cursor: "pointer" }}>
            <td>{props.stock.key}</td>
            <td>{props.stock.price}</td>
            <td>Changes</td>
        </tr>
    );
};

export default WatchListComponent;
