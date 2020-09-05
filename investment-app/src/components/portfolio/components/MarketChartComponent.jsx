import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const MarketChartContainer = () => {
    return (
        <div>
            <TradingViewEmbed
                widgetType={widgetType.ADVANCED_CHART}
                widgetConfig={{
                    colorTheme: "light",
                    symbol: "BITMEX:XBTUSD",
                    width: "100%",
                    hide_side_toolbar: "true"
                }}
            />
        </div>
    );
}

export default MarketChartContainer;
