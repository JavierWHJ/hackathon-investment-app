import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const CompanyProfileComponent = (props) => {
    return (
        <div>
            <TradingViewEmbed
                widgetType={widgetType.COMPANY_PROFILE}
                widgetConfig={{
                    colorTheme: "light",
                    symbol: props.symbol,
                    width: "100%",
                }}
            />
        </div>
    );
}

export default CompanyProfileComponent;
