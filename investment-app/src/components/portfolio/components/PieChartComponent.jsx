import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = (props) => {

    console.log(props);

    var portfolioValue = props.userInfo.cash
    props.holdingsPrices.forEach((value) => {
        portfolioValue = portfolioValue + value.shares * value.currentPrice;
    });

    let data = [];

    props.holdingsPrices.map((stock) => {
        var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });

        const marketValue = stock.shares * stock.currentPrice;
        const portfolioWeight = marketValue/portfolioValue * 100;

        let insert = {
            color: randomColor,
            title: stock.symbol + "\n" + parseInt(portfolioWeight).toLocaleString('en') + "%",
            value: marketValue,
        };

        data.push(insert);
    });

    var randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });

    const cashValue = props.userInfo.cash
    const cashPortfolioWeight = cashValue/portfolioValue * 100;

    let insert = {
        color: randomColor,
        title: "CASH" + "\n" + parseInt(cashPortfolioWeight).toLocaleString('en') + "%",
        value: cashValue
    };

    data.push(insert);

    return (
        <>
            <body>
                <h2 className="mt-4 text-center ">Breakdown</h2>
                <PieChart
                    center={[90, 80]}
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    data={data}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={50}
                    startAngle={0}
                    viewBoxSize={[180, 180]}
                    label={(data) => data.dataEntry.title}
                    labelPosition={110}
                    lineWidth={50}
                    labelStyle={{
                        fontSize: "6px",
                        fontColor: "FFFFFA",
                        fontWeight: "800",
                      }}
                />
            </body>
        </>
    );
};

export default PieChartComponent;