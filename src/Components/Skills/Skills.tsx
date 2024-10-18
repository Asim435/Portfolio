import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../../images/meter1.svg";
import meter2 from "../../images/meter2.svg";
import meter3 from "../../images/meter3.svg";


export default function Skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div id="skills">
            <section className="skill">
                <Container >
                    <Row >
                        <Col  >
                            <div className="skillBox">
                                <h2>
                                    Skills
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi enim praesentium consequatur corrupti pariatur,<br /><br /> distinctio nulla non quam assumenda sint quo obcaecati eaque doloribus. Harum ab error soluta sequi!</p>
                                <Carousel responsive={responsive} className="CarouselItem" infinite={true}>
                                    <div className="item"><img src={meter1} alt="image1" />
                                        <h5>C++</h5></div>
                                    <div className="item"><img src={meter3} alt="image2" />
                                        <h5>React JS</h5></div>
                                    <div className="item"><img src={meter3} alt="image3" />
                                        <h5>DotNet</h5></div>
                                    <div className="item"><img src={meter3} alt="image4" />
                                        <h5>MySQL</h5></div>
                                    <div className="item"><img src={meter2} alt="image5" />
                                        <h5>Data Stucture Algo</h5></div>
                                    <div className="item"><img src={meter1} alt="image6" />
                                        <h5>TypeScript</h5></div>
                                    <div className="item"><img src={meter1} alt="image7" />
                                        <h5>BootStrap</h5></div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    );

}