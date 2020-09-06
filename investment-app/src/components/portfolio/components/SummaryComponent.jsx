import React from "react";
import { Row, Col, Table, Tabs, Tab } from "react-bootstrap";


const SummaryComponent = (props) => {

    console.log(props.index);
    console.log(props.info);

    return (
        <div className="mt-4">
            <Table>
                <tr>
                    <td>
            <h4 className="m-2 text-center ">
                Cash Available
            </h4>
            </td>
            <td>
            <h4 className="m-2 text-center ">
                1-year Portfolio Return
            </h4>
            </td>
            <td>
            <h4 className="m-2 text-center ">
                1-year Index Return
            </h4>
            </td>
            </tr>
            <tr>
                <td>
            <div className="m-2 text-center" style={{"font-size":"26px"}}>
                ${parseInt(props.info.cash).toLocaleString('en')}
            </div>
            </td>
            <td>
            <div className="m-2 text-center" style={{"font-size":"30px"}}>
                +35%
            </div>
            </td>
            <td>
            <div className="m-2 text-center" style={{"font-size":"30px"}}>
                +10%
            </div>
            </td>
            </tr>
            </Table>
        </div>
    );
};

export default SummaryComponent;