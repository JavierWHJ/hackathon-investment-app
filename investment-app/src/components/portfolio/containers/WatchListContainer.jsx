import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import WatchListComponent from "../components/WatchListComponent";
import AddWatchListComponent from "../components/AddWatchListComponent";

const WatchListContainer = (props) => {
    const [show, setShow] = useState(false);
    const [symbol, setSymbol] = useState("");

    const handleAddStock = () => {
        props.addUserWatchList(props.email, symbol)
        setShow(false)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h2 className="mb-3 text-center border py-4">Your Watchlist</h2>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {props.watchlist.map((stock) => {
                        return (
                            <WatchListComponent key={stock} stock={stock} email={props.email} onDelete={props.deleteUserWatchList}/>
                        );
                    })}
                </tbody>
            </Table>
            <AddWatchListComponent show={show} symbol={symbol} onChange={setSymbol} handleAddStock={handleAddStock} handleClose={handleClose} />
            <Button block className="mt-4" onClick={handleShow}>
                Add Watchlist
            </Button>
        </>
    );
};

export default WatchListContainer;
