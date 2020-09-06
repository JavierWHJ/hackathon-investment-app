import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = () => {
    return (
        <>
            <body>
                <h2 className="mb-3 text-center">Breakdown</h2>
                <PieChart
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                />
            </body>
        </>
    );
};

export default PieChartComponent;