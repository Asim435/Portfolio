import React from "react"
import { Row, Col, Container, Nav, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import { firstTabData, secondTabData, thirdTabData } from "./ProjectData"
export default function Projects() {

    return (
        <div id="projects">
            <section className="project">
                <Container>
                    <Row>
                        <Col>
                            <div className="projectBox">
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur quibusdam pariatur non, officiis, asperiores libero assumenda sapiente amet nesciunt, dignissimos similique. <br /><br /> Minus tenetur error quod, voluptatem laudantium nostrum corrupti.</p>
                            </div>

                            <Tab.Container defaultActiveKey="first">
                                <Nav defaultActiveKey="" as="ul" className="tab">

                                    <Nav.Item as="li" className="tabItem1">
                                        <Nav.Link eventKey="first" style={{ color: 'black' }}>Tab1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="tabItem2">
                                        <Nav.Link eventKey="second" style={{ color: 'black' }}>Tab2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="tabItem3">
                                        <Nav.Link eventKey="third" style={{ color: 'black' }}>Tab3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tabContent">

                                    <Tab.Pane eventKey='first'>

                                        <Row >

                                            <div className="projContainer">
                                                {
                                                    firstTabData.map((item, index) => {
                                                        return (
                                                            <div className="projData">
                                                                <ProjectCard
                                                                    key={item.id}
                                                                    title={item.title}
                                                                    description={item.description}
                                                                    imagesrc={item.imagesrc}
                                                                />
                                                            </div>
                                                        )

                                                    })

                                                }
                                            </div>

                                        </Row>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <Row>
                                            <div className="projContainer">
                                                {
                                                    secondTabData.map((item, index) => {
                                                        return (
                                                            <div className="projData">
                                                                <ProjectCard
                                                                    key={item.id}
                                                                    title={item.title}
                                                                    description={item.description}
                                                                    imagesrc={item.imagesrc}
                                                                />
                                                            </div>
                                                        )

                                                    })

                                                }
                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <Row>
                                            <div className="projContainer">
                                                {
                                                    thirdTabData.map((item, index) => {
                                                        return (
                                                            <div className="projData">
                                                                <ProjectCard
                                                                    key={item.id}
                                                                    title={item.title}
                                                                    description={item.description}
                                                                    imagesrc={item.imagesrc}
                                                                />
                                                            </div>
                                                        )

                                                    })

                                                }
                                            </div>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}