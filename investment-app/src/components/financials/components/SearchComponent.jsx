import React, {useState} from 'react'
import {Button, Table} from 'react-bootstrap'
import axios from 'axios';

export default function SearchComponent() {
    const [ticker, setTicker] = useState("");
    const [check, setCheck] = useState(true);
    const [financials, setFinancials] = useState({data:{}});
    const getTicker = async () => {
        if (ticker == ""){
            setCheck(false);
            return
        } else {
            setCheck(true);
        }

        const response = await axios.get('http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/financials/' + ticker);
        console.log(response);
        setFinancials(response);
        return
    }


    return (
        <>
        <div class="container d-flex justify-content-center">
            
                <div class='form-group'>
                    <div class='search'><input placeholder='Search Ticker' name='ticker' type='text' id='ticker' class='s2 form-control' onChange={e =>setTicker(e.target.value)}></input></div>
                </div>

                <div class='text-center mb-3'>
                    <Button className='btn btn-primary btn-block' onClick={getTicker}>Search</Button>
                </div>
            
        </div>
        <div>
            <h3><span>Income Statement</span></h3>All numbers in thousands
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Breakdown</th>
                        <th>{Object.keys(financials.data)[0]}</th>
                        <th>{Object.keys(financials.data)[1]}</th>
                        <th>{Object.keys(financials.data)[2]}</th>
                        <th>{Object.keys(financials.data)[3]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total revenue</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Cost of revenue</td>
                    </tr>

                    <tr>
                        <td>Gross profit</td>
                    </tr>

                    <tr>
                        <td>Research development</td>
                    </tr>

                    <tr>
                        <td>Selling general and administrative</td>
                    </tr>

                    <tr>
                        <td><b>Total operating expenses</b></td>
                    </tr>

                    <tr>
                        <td><b>Operating income or loss</b></td>
                    </tr>

                    <tr>
                        <td>Interest expense</td>
                    </tr>

                    <tr>
                        <td>Total other income/expenses net</td>
                    </tr>

                    <tr>
                        <td>Income before tax</td>
                    </tr>

                    <tr>
                        <td>Income tax expense</td>
                    </tr>

                    <tr>
                        <td>Income from continuing operations</td>
                    </tr>

                    <tr>
                        <td><b>Net income</b></td>
                    </tr>

                    <tr>
                        <td>Net Income Applicable To Common Shares</td>
                    </tr>

                    <tr>
                        <td>Basic EPS</td>
                    </tr>

                    <tr>
                        <td>Diluted EPS</td>
                    </tr>

                    <tr>
                        <td>Basic average shares</td>
                    </tr>

                    <tr>
                        <td>Diluted average shares</td>
                    </tr>

                    <tr>
                        <td>EBITDA</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </>
    )
}
