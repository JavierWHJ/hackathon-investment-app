import React from "react";
import Layout from "../../components/common/Layout";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const Portfolio = () => {
    return (
        <Layout>
            <div className="container">
                <TradingViewEmbed
                    widgetType={widgetType.ADVANCED_CHART}
                    widgetConfig={{
                        colorTheme: "light",
                        symbol: "BITMEX:XBTUSD",
                        width: "100%",
                    }}
                />
                <TradingViewEmbed
                    widgetType={widgetType.MARKET_OVERVIEW}
                    widgetConfig={{
                        colorTheme: "light",
                        symbol: "BITMEX:XBTUSD",
                        width: "100%",
                    }}
                />
            </div>
        </Layout>
    );
};

export default Portfolio;
