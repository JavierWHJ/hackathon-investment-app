import React from 'react';
import { Table } from 'react-bootstrap';

const TransactionComponent = (props) => {
    
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((transaction) => {
                    return (
                        <tr>
                            <td>{transaction.date}</td>
                            <td>{transaction.ticker}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.quantity}</td>
                            {transaction.cost ? <td>{transaction.cost}</td> : <td>{transaction.earning}</td>}
                            <td>{transaction.status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default TransactionComponent;
