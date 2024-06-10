import React from 'react'
import Base from "./Base";
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
export const ProfileInfo=()=> {

  return (
    <Base>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                            <CardHeader style={{ textAlign: "center" }} className="ms-1"><h3>My Profile</h3></CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Write something...</Label>
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
}

export default ProfileInfo