import React from 'react';
import CompanyDataComponent from '../components/CompanyDataComponent';
import CompanyProfileComponent from '../components/CompanyProfileComponent';
import SymbolOverviewComponent from '../components/SymbolOverviewComponent';

const StockContainer = (props) => {
    return (
        <div className="mx-5">
            <SymbolOverviewComponent symbol={props.symbol} />
            <CompanyProfileComponent symbol={props.symbol} />
            <CompanyDataComponent symbol={props.symbol} />
        </div>
    );
}

export default StockContainer;
