
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Alert  from 'react-bootstrap/Alert';
import { Row, InputGroup, Form, Container, Button } from 'react-bootstrap';


const Email = () => {
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [check,setCheck] =useState<any> ()
    const sendEmail = (e: any) => {
        e.preventDefault();

            var templateParams = {
                from_name: name,
                email: email, 
                subject: subject,
                message: message,
            };

        emailjs.send('service_453xdwh', 'template_tywmm4j', templateParams, 'CHhYMN1Bok9ZsIOe5')
            .then((response: any) => {
                console.log('SUCCESS!', response.status, response.text);
                if(response.status===200)
                   { if(response)
                        setCheck(
                        <Alert key="success" style={{color:"blue", backgroundColor:"black"}}>
                        Email sent successfully!
                      </Alert>
                      )
                      else
                      setCheck(
                        <Alert key="success" style={{color:"red", backgroundColor:"black"}}>
                        Failed ! Fill Each Field
                      </Alert>
                    )
                    }
                
            
               //setResponse(response.status === 200 ? 1 : 0);
            }, (error: any) => {
                console.log('FAILED...', error);
            });
    };


    return (
        <div id='connect'>
            <section className="email" style={{ backgroundColor: 'black', color: 'white' }}>
                <Container>
                    <Row>
                        <div style={{ marginTop: '50px', width: '100%' }}>
                            <center> <h2>Lets Connect</h2> </center>
                            <form onSubmit={sendEmail}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Recipient's email"
                                        aria-label="Recipient's email"
                                        aria-describedby="basic-addon2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                </InputGroup>

                                <Form.Label htmlFor="basic-url">Subject</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon3">Subject</InputGroup.Text>
                                    <Form.Control
                                        id="basic-url"
                                        aria-describedby="basic-addon3"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroup.Text>With textarea</InputGroup.Text>
                                    <Form.Control
                                        as="textarea"
                                        aria-label="With textarea"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </InputGroup>
                                <div className="d-flex justify-content-center mt-3">
                                    <Button variant='secondary'  size="lg" type="submit" style={{ width: '50%', marginBottom: '10px',backgroundColor:'#888888' }}>
                                        Submit
                                    </Button>
                                
                                </div>
                                <div className="d-flex justify-content-center mt-3" style={{ width: '100%', marginBottom: '10px' }}>
                            {check}
                            </div>
                            </form>
                           
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Email;
