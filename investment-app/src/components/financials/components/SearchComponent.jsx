import React, {useState, useEffect} from 'react'
import {Button, Table} from 'react-bootstrap'
import axios from 'axios';
import TableComponent from './TableComponent.jsx'
export default function SearchComponent() {
    const [ticker, setTicker] = useState("");
    const [check, setCheck] = useState(true);
    const [financials, setFinancials] = useState({data:{1: {"Total Revenue":1,"Cost of Revenue":1,
    "Gross Profit":1, "Research Development":1, "Selling General Administrative":1, "Total Operating Expenses":1
    ,"Operating Income":1, "Interest Expense":1, "Total Other Income Expense Net":1, "Income Before Tax":1,
    "Income Tax Expense":1, "Total Revenue":1} , 2:{"Total Revenue":1,"Cost of Revenue":1,
    "Gross Profit":1, "Research Development":1, "Selling General Administrative":1, "Total Operating Expenses":1
    ,"Operating Income":1, "Interest Expense":1, "Total Other Income Expense Net":1, "Income Before Tax":1,
    "Income Tax Expense":1, "Total Revenue":1}, 3:{"Total Revenue":1,"Cost of Revenue":1,
    "Gross Profit":1, "Research Development":1, "Selling General Administrative":1, "Total Operating Expenses":1
    ,"Operating Income":1, "Interest Expense":1, "Total Other Income Expense Net":1, "Income Before Tax":1,
    "Income Tax Expense":1, "Total Revenue":1}, 4:{"Total Revenue":1,"Cost of Revenue":1,
    "Gross Profit":1, "Research Development":1, "Selling General Administrative":1, "Total Operating Expenses":1
    ,"Operating Income":1, "Interest Expense":1, "Total Other Income Expense Net":1, "Income Before Tax":1,
    "Income Tax Expense":1, "Total Revenue":1}}});

    const [y1, sety1] = useState(1);

    const [y2, sety2] = useState(2);

    const [y3, sety3] = useState(3);

    const [y4, sety4] = useState(4);

    const [render, setRender] = useState(false);

    const getTicker = async () => {
        if (ticker == ""){
            setCheck(false);
            return
        } else {
            setCheck(true);
        }

        axios.get('http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/financials/' + ticker).then(res => {
            console.log(res);
            setFinancials(res);
        });
    }

    useEffect(() =>{

        sety1(Object.keys(financials.data)[0]);
        sety2(Object.keys(financials.data)[1]);
        sety3(Object.keys(financials.data)[2]);
        sety4(Object.keys(financials.data)[3]);
        
        // setrev("Total Revenue")
        // setebitda("Net Income")
        if (y1 !== 1){
            setRender(true)
        }
    }, [financials])
        
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
            {TableComponent(financials, y1, y2, y3, y4, render)}
        </div>
        </>
    )
}
