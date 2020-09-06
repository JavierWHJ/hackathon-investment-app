import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const CompanyDataComponent = (props) => {
    return (
        <div>
            <TradingViewEmbed
                widgetType={widgetType.FUNDAMENTAL_DATA}
                widgetConfig={{
                    colorTheme: "light",
                    symbol: props.symbol,
                    width: "100%",
                }}
            />
        </div>
    );
}

export default CompanyDataComponent;
