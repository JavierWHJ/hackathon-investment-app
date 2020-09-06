import React from "react";
import { Modal, Button } from "react-bootstrap";

const AddWatchListComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Stocks to Your Watchlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input placeholder='Stock Symbol' name='symbol' type='text' id='symbol' class='s2 form-control' onChange={e => props.onChange(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleAddStock}>
                    Add Stock
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddWatchListComponent;
