import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router'
import CompanyDataComponent from "../components/CompanyDataComponent";
import CompanyProfileComponent from "../components/CompanyProfileComponent";
import SymbolOverviewComponent from "../components/SymbolOverviewComponent";

const StockContainer = (props) => {
    const router = useRouter()
    const [sharesBuyAmt, setSharesBuyAmt] = useState(0);
    const [sharesSellAmt, setSharesSellAmt] = useState(0);
    const [showBuySell, setShowBuySell] = useState(false);

    const onClickShowBuySell = () => {
        setShowBuySell(!showBuySell);
    };

    const onBuyShares = () => {
        props.buyStocks(props.price, parseInt(sharesBuyAmt))
        setSharesBuyAmt(0);
    }

    const onSellShares = () => {
        props.sellStocks(props.price, parseInt(sharesSellAmt))
    }

    return (
        <div className="mx-5 mt-4">
            <Button variant="light" className="mb-3 border" onClick={() => router.push("/portfolio")}>Back to Portfolio</Button>
            <Row>
                <Col xs={8}>
                    <SymbolOverviewComponent symbol={props.symbol} />
                </Col>
                <Col>
                    <div
                        className={showBuySell ? "d-none" : "d-block"}
                        style={{ lineHeight: "40px" }}
                    >
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
                                    <Form.Group as={Row} className="mt-3">
                                        <Form.Label column xs={8}>
                                            Shares
                                        </Form.Label>
                                        <Col sm={4}>
                                            <Form.Control type="number" value={sharesBuyAmt} onChange={(e) => setSharesBuyAmt(e.target.value)}/>
                                        </Col>
                                    </Form.Group>
                                    <div className="d-flex justify-content-between">
                                        <Card.Text>Market Price</Card.Text>
                                        <Card.Text>${props.price}</Card.Text>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Card.Text>Estimated Cost</Card.Text>
                                        <Card.Text>${(props.price * Math.max(1, sharesBuyAmt)).toFixed(2)}</Card.Text>
                                    </div>
                                    <Button block onClick={onBuyShares}>Buy Shares</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div
                        className={showBuySell ? "d-block" : "d-none"}
                        style={{ lineHeight: "40px" }}
                    >
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
                                <Card.Subtitle>
                                    Shares Owned: {props.shares}
                                </Card.Subtitle>
                                <Form>
                                    <Form.Group as={Row} className="mt-3">
                                        <Form.Label column xs={8}>
                                            Shares
                                        </Form.Label>
                                        <Col sm={4}>
                                            <Form.Control type="number" value={sharesSellAmt} onChange={(e) => setSharesSellAmt(e.target.value)}/>
                                        </Col>
                                    </Form.Group>
                                    <div className="d-flex justify-content-between">
                                        <Card.Text>Market Price</Card.Text>
                                        <Card.Text>${props.price}</Card.Text>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Card.Text>Estimated Cost</Card.Text>
                                        <Card.Text>${(props.price * Math.max(1, sharesSellAmt)).toFixed(2)}</Card.Text>
                                    </div>
                                    <Button block onClick={onSellShares}>Sell Shares</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
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
