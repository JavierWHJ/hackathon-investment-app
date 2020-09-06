import React from "react";
import Layout from "../../components/common/Layout";
import SearchComponent from '../../components/financials/components/SearchComponent'

const Financials = () => {

    return (
        <Layout>
            <div className="mx-5 mt-3">
                <div class="container d-flex justify-content-center" >
                    <div>
                        <img
                            src="/pear.svg"
                            width="70"
                            height="70"
                        />
                    </div>
                </div>
            </div>
                <SearchComponent />
        </Layout>
    );
}

export default Financials;