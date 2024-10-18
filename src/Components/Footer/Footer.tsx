import { Row,Col,Container } from "react-bootstrap"
export default function Footer(){
return<>
<section className="footer">
    <Container>
<Row>
  <Col>
<div className="footerBox"> 
  <Row>
  <Col>
  <h2 style={{}}>PORTFOLIO</h2>
  </Col>
  <Col style={{padding: "5%", textAlign: "right" }}>
  <p>© 2024 Asim Ali PortFolio</p>
  <div className="footerNav">
  <p>Email: <a href="mailto:asimali4359@gmail.com">asimali4359@gmail.com</a></p>
  <p>
    <a href="https://www.linkedin.com/in/your-linkedin" >LinkedIn</a> | 
    <a href="https://github.com/your-github" >GitHub</a>
  </p>
  
  <nav >
   
    <a  href="#home">Home</a> | <a href="#projects">Projects</a> | <a href="#skills">Skill</a> | <a href="#connect">Connect</a>
    
  </nav>
  </div>

  </Col>
</Row>

  </div>
  </Col>


</Row>

    </Container>
</section>

</>




}