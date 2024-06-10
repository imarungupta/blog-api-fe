import React from "react";
import Base from "./Base";
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from "reactstrap";

const Home = () => {
    return (
        <Base>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                            <CardHeader style={{ textAlign: "center" }} className="ms-1"><h3>Home</h3></CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Home</Label>
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
export default Home;