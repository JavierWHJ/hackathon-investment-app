import React from "react";
import Layout from '../../components/common/Layout'
import AcademyContainer from "../../components/academy/containers/AcademyContainer";

const Academy = () => {

    return (
        <Layout>
            <div className="container mt-5 d-flex">
                <AcademyContainer/>
            </div>
        </Layout>
    );
}

export default Academy;
