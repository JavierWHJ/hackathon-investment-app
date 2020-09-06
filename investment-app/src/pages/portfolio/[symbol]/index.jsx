import React from 'react';
import { useRouter } from "next/router";
import StockContainer from '../../../components/portfolio/containers/StockContainer';

const Stock = () => {
    const router = useRouter();

    return (
        <div>
            <StockContainer stock={router.query.symbol} />
        </div>
    );
}

export default Stock;
