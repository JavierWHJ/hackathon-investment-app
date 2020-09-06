import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Button } from "react-bootstrap";
import Layout from "../components/common/Layout";
import styles from "../../styles/Home.module.scss";
import Loginmodal from "../components/common/Loginmodal";
import Carousel from "react-multi-carousel";
import Axios from "axios";

const Home = () => {
  const [newsList, setNewsList] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "http://newsfeed-env.eba-7yreqssq.ap-southeast-1.elasticbeanstalk.com"
    );
    res.json().then((res) => setNewsList(res));
  }

  // console.log(newsList);
  console.log(newsList.result);

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
            {/* <Button Onclick={Loginmodal}>
            Are y'all ready kids?
          </Button> */}
            <Loginmodal button={"Are y'all ready kids?"} />
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.carousel_title}>NEWS</div>

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* {console.log(newsList)} */}
          {/* {Object.values(newsList)).map((article, index) => {
            return console.log("hi");
          })} */}

          {newsList.result.map((news) => {
            return <div className={styles.card}>
              <img className={styles.cardImage}>
                {news.img}
              </img>
              <div className={styles.cardTitle}>
                {news.title}
              </div>
            </div>;
          })}

          {/* <div className={styles.card}>News 1</div>
          <div className={styles.card}>News 2</div>
          <div className={styles.card}>News 3</div>
          <div className={styles.card}>News 4</div>
          <div className={styles.card}>News 5</div>
          <div className={styles.card}>News 6</div>
          <div className={styles.card}>News 7</div>
          <div className={styles.card}>News 8</div> */}
        </Carousel>
      </div>
    </Layout>
  );
};

export default Home;
