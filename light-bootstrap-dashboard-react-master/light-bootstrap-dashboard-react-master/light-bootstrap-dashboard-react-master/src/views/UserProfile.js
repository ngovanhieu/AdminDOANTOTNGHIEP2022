import userRequest from "APIs/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// react-bootstrap components
import {
  alertSelector,
  checkUpdateUserSelector,
  dataUsersSelector,
  isLoadingGlobalSelector,
  itemUserSelector,
} from "../redux";
import { useHistory, useLocation } from "react-router-dom";

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

function User() {
  const location = useLocation();
  const id = location.pathname.split("admin/user/")[1];
  const dispatch = useDispatch();
  const data = useSelector(itemUserSelector);
  const checkUpdate = useSelector(checkUpdateUserSelector);
  const isLoading = useSelector(isLoadingGlobalSelector);

  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!checkUpdate) {
      userRequest.getUser(dispatch, id);
    }
  }, [checkUpdate]);

  const updateUser = async () => {
    let dataUpdate = {
      isAdmin: isAdmin,
      name: name || data?.values?.response?.productBrand,
      phone: phone || data?.values?.response?.quantity,
    };
    await userRequest.updateUser(dispatch, id, dataUpdate);
  };

  const handleRole = (e) => {
    if (e.target.value === "1") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };
  return (
    <>
      {!isLoading && (
        <Container fluid>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="8">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            defaultValue={data?.values?.email}
                            disabled
                            placeholder="Email"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">Role</label>
                          {/* <Form.Control
                            defaultValue={
                              data?.values?.isAdmin ? "Admin" : "Customer"
                            }
                            type="text"
                          ></Form.Control> */}
                          <Form.Select
                            className="w-100 py-2"
                            defaultValue={data?.values?.isAdmin ? "1" : "2"}
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
                            defaultValue={data?.values?.password}
                            placeholder="Password"
                            disabled
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
                            defaultValue={data?.values?.name}
                            placeholder="Home Address"
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
                            defaultValue={data?.values?.phone}
                            placeholder="Home Address"
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
                      onClick={updateUser}
                      variant="info"
                    >
                      Update Profile
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
      )}
    </>
  );
}

export default User;
