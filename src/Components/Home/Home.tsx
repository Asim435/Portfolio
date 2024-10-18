import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate: Array<string> = [" Web Developer", " Web Designer", " Software Engineer"];
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100)
  const period: number = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick() ; 
    }, delta) 
    return () => {
      clearInterval(ticker)
    };
  }, [text])

  const tick = () => {
    let i: number = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setText(updateText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);

    }
  }


  return (
    <div className='Home' id="home">
      <Container fluid>
        <section className='homeContainer'>
          <Row>
            <Col xs={12} md={6}>
              <div className='homeHeader' >
                <p style={{ margin: '0' }}>Welcome to my Portfolio</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div style={{ fontSize: '32px' }}>Hi! I'm Asim <br />{text}</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p style={{ fontSize: 'medium' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab saepe rem nihil fuga nulla dolores a delectus officiis necessitatibus, repudiandae, modi nostrum ex natus sed maiores? Maiores dolore nihil ipsam molestias expedita tenetur minus a iste illo voluptatem similique, reiciendis excepturi, accusantium, perferendis sequi architecto.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </div>

  );
}