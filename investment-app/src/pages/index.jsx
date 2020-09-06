import React from "react";
import Head from "next/head";
import Layout from "../components/common/Layout";
import styles from "../../styles/Home.module.scss";
import Loginmodal from "../components/common/Loginmodal";
import axios from "axios";
import NewsFeed from "../components/common/NewsFeed";

export async function getStaticProps() {
  const res = await axios.get("http://newsfeed-env.eba-7yreqssq.ap-southeast-1.elasticbeanstalk.com").then(res => res.data)
  return {
    props: {
      newsList: res
    }, // will be passed to the page component as props
  }
}

const Home = (props) => {

  return (
    <Layout>
      <div className={styles.container1}>
        <Head>
          <title>P.E.A.R.</title>
          <link rel="icon" href="/pear.svg" />
        </Head>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to P.E.A.R.!</h1>
        </header>
        <div className={styles.center}>
          <div className={styles.main_title}>Want to learn how to invest?</div>

          <div className={styles.grid}>
            <Loginmodal button={"Are y'all ready kids?"} />
          </div>
        </div>
      </div>
      <NewsFeed newsList={props.newsList.result}/>
    </Layout>
  );
};

export default Home;
