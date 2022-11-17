import productRequest from "APIs/products";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import {
  checkUpdateProductSelector,
  isLoadingGlobalSelector,
  itemProductSelector,
  setDisplayAlert,
  setItemPropAlert,
} from "../redux";
import { useState } from "react";

export const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [chip, setChip] = useState("");
  const [ram, setRam] = useState("");
  const [memory, setMemory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState(
    "https://cdn.tgdd.vn/Files/2019/07/25/1181734/do-sau-truong-anh-la-gi-cach-thiet-lap-de-chup-anh-dep-nhat--3.jpg"
  );

  const dispatch = useDispatch();
  const addProduct = () => {
    const data = {
      productName,
      productBrand,
      quantity,
      chip,
      ram,
      memory,
      price,
      discount,
      type,
      images,
    };
    if (
      productName &&
      productBrand &&
      quantity &&
      chip &&
      ram &&
      memory &&
      price &&
      discount &&
      type
    ) {
      productRequest.addProduct(dispatch, data);
    } else {
      dispatch(setDisplayAlert(true));
      dispatch(setItemPropAlert("Some field is empty"));
    }
  };
  return (
    <div>
      {" "}
      <Col md="12">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Add Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col className="pr-1" md="5">
                  <Form.Group>
                    <label>Product Name</label>
                    <Form.Control
                      placeholder="Product Name"
                      value={productName}
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="3">
                  <Form.Group>
                    <label>Product Brand</label>
                    <Form.Control
                      placeholder="Product Brand"
                      value={productBrand}
                      onChange={(e) => {
                        setProductBrand(e.target.value);
                      }}
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>quantity</label>
                    <Form.Control
                      placeholder="Quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <Form.Group>
                    <label>price</label>
                    <Form.Control
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      placeholder="Price"
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="6">
                  <Form.Group>
                    <label>discount</label>
                    <Form.Control
                      // defaultValue={data?.values?.response?.discount}
                      value={discount}
                      onChange={(e) => {
                        setDiscount(e.target.value);
                      }}
                      placeholder="Discount"
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="4">
                  <Form.Group>
                    <label>chip</label>
                    <Form.Control
                      value={chip}
                      onChange={(e) => {
                        setChip(e.target.value);
                      }}
                      placeholder="Chip"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="4">
                  <Form.Group>
                    <label>memory</label>
                    <Form.Control
                      value={memory}
                      onChange={(e) => {
                        setMemory(e.target.value);
                      }}
                      placeholder="Memory"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>ram</label>
                    <Form.Control
                      value={ram}
                      onChange={(e) => {
                        setRam(e.target.value);
                      }}
                      placeholder="Ram"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Form.Group>
                    <label>Description</label>
                    <Form.Control
                      cols="80"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      placeholder="Here can be your description"
                      rows="4"
                      as="textarea"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className="btn-fill pull-right"
                variant="info"
                onClick={addProduct}
              >
                Add Product
              </Button>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
