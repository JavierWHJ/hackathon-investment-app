import React from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const WatchListComponent = (props) => {
    const router = useRouter();

    const onClickStock = () => {
        router.push("/portfolio/" + props.stock.symbol)
    }

    const onClickDelete = () => {
        props.onDelete(props.email, props.stock.symbol);
    }

    const checkPercentageValue = (percentage) => {
        return Math.sign(percentage) == 1;
    }

    return (
        <>
            <tr
                key={props.stock}
                style={{ cursor: "pointer" }}
            >
                <td onClick={onClickStock}>{props.stock.symbol}</td>
                <td onClick={onClickStock}>{props.stock.price}</td>
                {checkPercentageValue(props.stock.percentage) ? 
                    <td onClick={onClickStock}><span className="text-success">{props.stock.percentage}</span></td> : 
                    <td onClick={onClickStock}><span className="text-danger">{props.stock.percentage}</span></td>}
                    <td className="text-right"><Button variant="danger" onClick={onClickDelete}>Delete</Button></td>
            </tr>
        </>
    );
};

export default WatchListComponent;
