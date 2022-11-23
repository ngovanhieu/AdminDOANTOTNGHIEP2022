import userRequest from "APIs/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// react-bootstrap components
import { setDisplayAlert, setItemPropAlert } from "../redux";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const createUser = () => {
    const data = {
      email,
      password,
      isAdmin,
      name,
      phone,
    };

    if (email && password && name && phone) {
      userRequest.addUser(dispatch, data);
    } else {
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Some field is empty"));
    }
  };

  const handleRole = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      setIsAdmin(true);
      console.log(e.target.value);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create User</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Role</label>
                       
                        <Form.Select
                          className="w-100 py-2"
                          defaultValue="2"
                          onChange={(e) => handleRole(e)}
                          style={{
                            border: "1px solid #E3E3E3",
                            outline: "none",
                          }}
                        >
                          <option value="1">Admin</option>
                          <option value="2">Customer</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          value={name}
                          placeholder="Name"
                          type="text"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label>Phone</label>
                        <Form.Control
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right my-3"
                    onClick={createUser}
                    variant="info"
                  >
                    Create User
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
