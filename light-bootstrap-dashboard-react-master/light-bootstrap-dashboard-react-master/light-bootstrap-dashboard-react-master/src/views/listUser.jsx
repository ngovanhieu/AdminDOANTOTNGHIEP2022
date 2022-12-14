import userRequest from "APIs/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { alertSelector, dataUsersSelector } from "../redux";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ListUser() {
  const dispatch = useDispatch();
  const data = useSelector(dataUsersSelector);
  let history = useHistory();
  const alert = useSelector(alertSelector);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const handleClickOpen = (data, e) => {
    e.stopPropagation();
    setItem(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    userRequest.removeUser(dispatch, item._id);
  };

  useEffect(() => {
    userRequest.getAllUsers(dispatch);
  }, []);

  useEffect(() => {
    if (alert.displayAlert) userRequest.getAllUsers(dispatch);
  }, [alert]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Button
              variant="outlined"
              onClick={(e) => history.push("/admin/addUser")}
            >
              Create user
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="my-3">
            {/* <Card className="card-plain table-plain-bg"> */}
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List Of User</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Role</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Phone</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.values?.map((item, index) => (
                      <tr
                        key={index}
                        style={{ cursor: `pointer` }}
                        onClick={(e) => history.push(`/admin/user/${item._id}`)}
                      >
                        <td>{item._id}</td>
                        <td>{item.email}</td>
                        <td>{item.isAdmin ? "Admin" : "Customer"}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td
                          className="btn-delete"
                          onClick={(e) => handleClickOpen(item, e)}
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete user {item.email} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ListUser;
