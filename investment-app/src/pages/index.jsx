import Head from 'next/head'
import { Button } from 'react-bootstrap'
import Layout from '../components/common/Layout'
import styles from '../../styles/Home.module.scss'
import Loginmodal from '../components/common/Loginmodal'
import Carousel from 'react-multi-carousel'

const Home = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Layout>
      <div className={styles.container1}>
        <Head>
          <title>P.E.A.R.</title>
          <link rel="icon" href="/pear.svg" />
        </Head>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Welcome to P.E.A.R.!
        </h1>
        </header>
        <div className={styles.center}>
          <div className={styles.main_title}>
            Want to learn how to invest?
          </div>

          <div className={styles.grid}>
            {/* <Button Onclick={Loginmodal}>
            Are y'all ready kids?
          </Button> */}
            <Loginmodal />
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className={styles.title2}>
            NEWS
          </div>
          <div>News 1</div>
          <div>News 1</div>
          <div>News 3</div>
          <div>News 4</div>
        </Carousel>
      </div>
    </Layout >
  )
}




export default Home
