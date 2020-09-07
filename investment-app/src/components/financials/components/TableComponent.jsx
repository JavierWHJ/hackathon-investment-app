import React, {useState, useEffect} from 'react'
import {Button, Table} from 'react-bootstrap'

export default function TableComponent(financials, y1, y2, y3, y4, render) {
    if (render == false){
        return;
    }

    return (
        <div className='p-5'>
            <h3><span>Income Statement</span></h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Breakdown (US$ millions)</th>
                        <th>{y1}</th>
                        <th>{y2}</th>
                        <th>{y3}</th>
                        <th>{y4}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total revenue</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Total Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Total Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Total Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Total Revenue"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Cost of revenue</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Cost Of Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Cost Of Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Cost Of Revenue"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Cost Of Revenue"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Gross profit</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Gross Profit"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Gross Profit"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Gross Profit"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Gross Profit"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Research development</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Research Development"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Research Development"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Research Development"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Research Development"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Selling general and administrative</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Selling General Administrative"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Selling General Administrative"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Selling General Administrative"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Selling General Administrative"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td><b>Total operating expenses</b></td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Total Operating Expenses"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Total Operating Expenses"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Total Operating Expenses"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Total Operating Expenses"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td><b>Operating income or loss</b></td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Operating Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Operating Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Operating Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Operating Income"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Interest expense</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Interest Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Interest Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Interest Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Interest Expense"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Total other income/expenses net</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Total Other Income Expense Net"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Total Other Income Expense Net"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Total Other Income Expense Net"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Total Other Income Expense Net"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Income before tax</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Income Before Tax"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Income Before Tax"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Income Before Tax"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Income Before Tax"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td>Income tax expense</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Income Tax Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Income Tax Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Income Tax Expense"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Income Tax Expense"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    <tr>
                        <td><b>Net income</b></td>
                        <td>{(parseInt(JSON.stringify(financials.data[y1]["Net Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y2]["Net Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y3]["Net Income"]))/1000000).toLocaleString('en')}</td>
                        <td>{(parseInt(JSON.stringify(financials.data[y4]["Net Income"]))/1000000).toLocaleString('en')}</td>
                    </tr>

                    {/* <tr>
                        <td>Basic EPS</td>
                        <td>{JSON.stringify(financials.data[y1]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y2]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y3]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y4]["Total Revenue"])}</td>
                    </tr>

                    <tr>
                        <td>Diluted EPS</td>
                        <td>{JSON.stringify(financials.data[y1]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y2]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y3]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y4]["Total Revenue"])}</td>
                    </tr> */}

                    {/* <tr>
                        <td>Basic average shares</td>
                        <td>{JSON.stringify(financials.data[y1]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y2]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y3]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y4]["Total Revenue"])}</td>
                    </tr>

                    <tr>
                        <td>Diluted average shares</td>
                        <td>{JSON.stringify(financials.data[y1]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y2]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y3]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y4]["Total Revenue"])}</td>
                    </tr>

                    <tr>
                        <td>EBITDA</td>
                        <td>{JSON.stringify(financials.data[y1]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y2]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y3]["Total Revenue"])}</td>
                        <td>{JSON.stringify(financials.data[y4]["Total Revenue"])}</td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    )
}
