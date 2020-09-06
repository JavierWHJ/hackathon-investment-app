import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import CompanyDataComponent from "../components/CompanyDataComponent";
import CompanyProfileComponent from "../components/CompanyProfileComponent";
import SymbolOverviewComponent from "../components/SymbolOverviewComponent";

const StockContainer = (props) => {
    const [showBuySell, setShowBuySell] = useState(false);

    const onClickShowBuySell = () => {
        setShowBuySell(!showBuySell);
    };

    return (
        <div className="mx-5 mt-3">
            <Row>
                <Col xs={8}>
                    <SymbolOverviewComponent symbol={props.symbol} />
                </Col>
                <Col>
                    <div className={showBuySell ? "d-none" : "d-block"}>
                        <Card className="w-100">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <Card.Title style={{ fontSize: "30px" }}>
                                        Buy {props.symbol}
                                    </Card.Title>
                                    <Button
                                        variant="light"
                                        onClick={onClickShowBuySell}
                                        className="border"
                                    >
                                        Selling Shares?
                                    </Button>
                                </div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Shares</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Card.Text>Market Price</Card.Text>
                                    <Card.Text>Estimated Cost</Card.Text>
                                    <Button block>Buy</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={showBuySell ? "d-block" : "d-none"}>
                        <Card className="w-100">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <Card.Title style={{ fontSize: "30px" }}>
                                        Sell {props.symbol}
                                    </Card.Title>
                                    <Button
                                        variant="light"
                                        onClick={onClickShowBuySell}
                                        className="border"
                                    >
                                        Buying Shares?
                                    </Button>
                                </div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Shares</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Card.Text>Market Price</Card.Text>
                                    <Card.Text>Estimated Cost</Card.Text>
                                    <Button block>Sell</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <Button block className="mt-4">
                        Add to Watchlist
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <CompanyProfileComponent symbol={props.symbol} />
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <CompanyDataComponent symbol={props.symbol} />
                </Col>
            </Row>
        </div>
    );
};

export default StockContainer;
