
import React from "react"
import { tabDataType } from "./ProjectData"
import { Row, Col } from "react-bootstrap"

export default function ProjectCard(props: tabDataType) {



    return (
        <Row>
            <Col>
                <div className="projectCard">
                    <h5 style={{ color: 'white', textAlign: 'center' }}>{props.title}</h5>
                    <img src={props.imagesrc} alt="" className="projectImg" />
                    <p style={{ margin: '0px', color: '#888888', textAlign: 'center' }}>{props.description}</p>

                </div>
            </Col>
        </Row>

    )
}