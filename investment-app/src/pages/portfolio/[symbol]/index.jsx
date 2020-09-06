import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import Cookies from 'js-cookie';
import StockContainer from "../../../components/portfolio/containers/StockContainer";
import Layout from "../../../components/common/Layout";

const Stock = () => {
    const router = useRouter();
    const email = Cookies.get('userEmail');
    const symbol = router.query.symbol;
    const [userStockShares, setUserStockShares] = useState(0);
    const [stockPrice, setStockPrice] = useState(0);

    useEffect(() => {
        if (email != undefined) {
            getStocksInfo(email);
        }
    }, [])

    const getStocksInfo = (email) => {
        axios.get('http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/user/' + email).then(res => {
            const userStock = res.data.result.holdings[symbol];
            if(userStock != undefined){
                setUserStockShares(userStock[1]);
            }
        })
        axios.get('http://yfin-env.eba-m8jmyudi.ap-southeast-1.elasticbeanstalk.com/daily/' + symbol).then(res => {
            setStockPrice(res.data.current_price);
        }).catch(e => router.push("/portfolio"))
    }

    const sellStocks = (price, quantity) => {
        axios({
            method: "post",
            url:
                "http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/stock/sell",
            headers: {},
            data: {
                email: email,
                ticker: symbol,
                price: price,
                quantity: quantity
            },
        }).then(res => {
            getStocksInfo(email);
        });
    }

    const buyStocks = (price, quantity) => {
        axios({
            method: "post",
            url: "http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/stock/buy",
            headers: {},
            data: {
                email: email,
                ticker: symbol,
                price: price,
                quantity: quantity
            },
        }).then(res => {
            getStocksInfo(email);
        });
    }

    return (
        <Layout>
            <StockContainer symbol={symbol} shares={userStockShares} price={stockPrice} buyStocks={buyStocks} sellStocks={sellStocks}/>
        </Layout>
    );
};

export default Stock;
