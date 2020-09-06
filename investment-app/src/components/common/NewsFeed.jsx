import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './NewsFeed.module.scss';
import Carousel from "react-multi-carousel";

const NewsFeed = (props) => {

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
                    {props.newsList.map((news) => {
                        return (
                            <a href={news.url} target="_blank">
                                <Card className={styles.card}>
                                    <Card.Img variant="top" src={news.img} />
                                    <Card.Body>
                                        <Card.Title className={styles.cardTitle}>{news.title}</Card.Title>
                                        <Card.Text>
                                            Date: {news.date}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        );
                    })}
            </Carousel>
        </div>
    );
}

export default NewsFeed;
