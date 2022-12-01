import userRequest from "APIs/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import {
  alertSelector,
  checkUpdateProductSelector,
  dataOrdersSelector,
  dataUsersSelector,
} from "../redux";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import orderRequest from "APIs/order";
import dateformat from "dateformat";

export const ListOrder = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataOrdersSelector);
  const checkUpdate = useSelector(checkUpdateProductSelector);
  const [open, setOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState({});

  const [orderStatus, setOrderStatus] = useState(0);

  const handleSelectChange = (e) => {
    const order = parseInt(e.target.value);
    setOrderStatus(order);
  };

  const handleClickOpen = (item, e) => {
    e.stopPropagation();
    setOpen(true);
    setOrderStatus(parseInt(item.orderStatus));
    setDataDetail(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //
  useEffect(() => {
    if (!checkUpdate) {
      orderRequest.getAllOrder(dispatch);
    }
  }, [checkUpdate]);

  const handleUpdate = () => {
    orderRequest.updateOrder(dispatch, dataDetail._id, orderStatus);
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Container fluid>
        {/* <Row>
          <Col md="12">
            <Button
              variant="outlined"
              //   onClick={(e) => history.push("/admin/addUser")}
            >
              Create user
            </Button>
          </Col>
        </Row> */}
        <Row>
          <Col md="12">
            {/* <Card className="card-plain table-plain-bg"> */}
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List Of Order</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Customer Name</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Quantity</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Total</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.values?.map((item, index) => (
                      <tr
                        key={index}
                        style={{ cursor: `pointer` }}
                        onClick={(e) => handleClickOpen(item, e)}
                      >
                        <td>{item._id}</td>
                        <td>{item.userName}</td>
                        <td>{item.productName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price} VNĐ</td>
                        <td>{item.price * item.quantity} VNĐ</td>
                        <td>
                          {item.orderStatus === "2"
                            ? "Vừa đặt"
                            : item.orderStatus === "1"
                            ? "Đang giao"
                            : item.orderStatus === "3"
                            ? "Đã nhận"
                            : "Đã hủy"}
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
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">{"Order Information"}</DialogTitle>
        <DialogContent>
          <div className="content mx-2" style={{ color: "#626262" }}>
            <div className="row my-1">Customer Name: {dataDetail.userName}</div>
            <div className="row my-1">Phone: {dataDetail.phone}</div>
            <div className="row my-1">Address: {dataDetail.address}</div>
            <div className="row my-1">Product Id: {dataDetail.productId}</div>
            <div className="row my-1">
              Product Name: {dataDetail.productName}
            </div>
            <div className="row my-1">Quantity: {dataDetail.quantity}</div>
            <div className="row my-1">Price: {dataDetail.price}</div>
            <div className="row my-1">
              Total price: {dataDetail.quantity * dataDetail.price}
            </div>
            <div className="row my-1">
              Booking date: {dateformat(dataDetail.createdAt, "dd-mm-yyyy")}
            </div>
            <div className="row my-2">
              Order status:{" "}
              <select
                value={orderStatus}
                onChange={(e) => handleSelectChange(e)}
                className="select-status mx-2"
                style={{
                  width: "120px",
                  outline: "none",
                  border: "1px solid #d9d9d9",
                  padding: "2px",
                }}
              >
                <option value="2">Vừa đặt</option>
                <option value="1">Đang giao</option>
                <option value="3">Đã nhận</option>
                <option value="4">Đã hủy</option>
              </select>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button autoFocus onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
