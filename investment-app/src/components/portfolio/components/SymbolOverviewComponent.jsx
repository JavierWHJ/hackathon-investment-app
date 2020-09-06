import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const SymbolOverviewComponent = (props) => {
    return (
        <div>
            <TradingViewEmbed
                widgetType={widgetType.SYMBOL_OVERVIEW}
                widgetConfig={{
                    colorTheme: "light",
                    symbols: [
                        ["Name-of-stock", props.symbol],
                    ],
                    width: "100%",
                }}
            />
        </div>
    );
};

export default SymbolOverviewComponent;
