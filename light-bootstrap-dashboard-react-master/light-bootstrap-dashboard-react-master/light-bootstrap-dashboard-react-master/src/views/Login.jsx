import React from "react";
import "./global.css";
import axios from "axios";

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
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setItemPropAlert, setDisplayAlert } from "../redux";
import { useDispatch } from "react-redux";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/api/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        dispatch(setItemPropAlert(response?.data.message));
        dispatch(setDisplayAlert(true));
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("customerName", response.data.userName);
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        history.push("/admin/dashboard")
      })
      .catch(function (error) {
        dispatch(setItemPropAlert(error?.response.data.message));
        dispatch(setDisplayAlert(true));
        console.log(error);
      });
  };
  return (
    <div className="container_login">
      <div className="form_login">
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Login</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
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
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right my-3"
                    onClick={handleLogin}
                    variant="info"
                  >
                    Login
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
      </div>
    </div>
  );
};
