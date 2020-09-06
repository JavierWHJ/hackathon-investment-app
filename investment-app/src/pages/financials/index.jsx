import React from "react";
import Layout from "../../components/common/Layout";
import SearchComponent from '../../components/financials/components/SearchComponent'

const Financials = () => {

    return (
        <Layout>
            <div class="container d-flex justify-content-center">
                <div>
                    <img
                            src="/pear.svg"
                            width="100"
                            height="100"
                    />
                </div>
            </div>
                <SearchComponent />
        </Layout>
    );
}

export default Financials;