import React from 'react'
import Base from "./Base";
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from "reactstrap";

function About() {
    return (
        <Base>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader></CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">About My Blog</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base>
    )
};
export default About

// rfce is the short form used to create the React component