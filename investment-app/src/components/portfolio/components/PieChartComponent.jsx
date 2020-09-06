import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = (props) => {

    let data = [];

    props.holdings.map((stock) => {
        var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });

        let insert = {
            color: randomColor,
            title: stock.key,
            value: stock.marketValue,
        };

        data.push(insert);
    });

    return (
        <>
            <body>
                <h2 className="mb-3 text-center">Breakdown</h2>
                <PieChart
                    center={[50, 50]}
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    data={data}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={50}
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                    label={(data) => data.dataEntry.title}
                    labelPosition={50}
                    lineWidth={50}
                    labelStyle={{
                        fontSize: "10px",
                        fontColor: "FFFFFA",
                        fontWeight: "800",
                      }}
                />
            </body>
        </>
    );
};

export default PieChartComponent;