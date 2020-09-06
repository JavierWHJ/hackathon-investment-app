import React from "react";
import { useRouter } from "next/router";
import StockContainer from "../../../components/portfolio/containers/StockContainer";
import Layout from "../../../components/common/Layout";

const Stock = () => {
    const router = useRouter();

    return (
        <Layout>
            <StockContainer symbol={router.query.symbol} />
        </Layout>
    );
};

export default Stock;
