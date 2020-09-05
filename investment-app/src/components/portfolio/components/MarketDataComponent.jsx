import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const MarketDataComponent = () => {
    return (
        <div>
            <TradingViewEmbed
                widgetType={widgetType.STOCK_MARKET}
                widgetConfig={{
                    colorTheme: "light",
                    symbol: "BITMEX:XBTUSD",
                    width: "100%",
                }}
            />
        </div>
    );
}

export default MarketDataComponent;
