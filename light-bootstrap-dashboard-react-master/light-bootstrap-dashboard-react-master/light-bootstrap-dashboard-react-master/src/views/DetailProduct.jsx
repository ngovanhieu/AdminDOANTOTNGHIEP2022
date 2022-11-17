import productRequest from "APIs/products";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import {
  checkUpdateProductSelector,
  isLoadingGlobalSelector,
  itemProductSelector,
} from "../redux";
import { useState } from "react";

export const DetailProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("admin/product/")[1];
  const dispatch = useDispatch();
  const data = useSelector(itemProductSelector);
  const checkUpdate = useSelector(checkUpdateProductSelector);
  const isLoading = useSelector(isLoadingGlobalSelector);

  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [chip, setChip] = useState("");
  const [ram, setRam] = useState("");
  const [memory, setMemory] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (!checkUpdate) {
      productRequest.getProduct(dispatch, id);
    }
  }, [checkUpdate]);

  const updateProduct = async () => {
    let dataUpdate = {
      productName: productName || data?.values?.response?.productName,
      productBrand: productBrand || data?.values?.response?.productBrand,
      quantity: quantity || data?.values?.response?.quantity,
      chip: chip || data?.values?.response?.chip,
      ram: ram || data?.values?.response?.ram,
      memory: memory || data?.values?.response?.memory,
      price: price || data?.values?.response?.price,
      discount: discount || data?.values?.response?.discount,
      type: type || data?.values?.response?.type,
    };
    await productRequest.updateProduct(dispatch, id, dataUpdate);
  };
  return (
    <div>
      {!isLoading && (
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Edit Product</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <Form.Group>
                      <label>Product Name</label>
                      <Form.Control
                        defaultValue={data?.values?.response?.productName}
                        placeholder="Product Name"
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
                        defaultValue={data?.values?.response?.productBrand}
                        placeholder="Product Brand"
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
                        defaultValue={data?.values?.response?.quantity}
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
                        defaultValue={data?.values?.response?.price}
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
                        defaultValue={data?.values?.response?.discount}
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
                        defaultValue={data?.values?.response?.chip}
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
                        defaultValue={data?.values?.response?.memory}
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
                        defaultValue={data?.values?.response?.ram}
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
                        defaultValue={data?.values?.response?.type}
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
                  onClick={updateProduct}
                >
                  Update Product
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      )}
    </div>
  );
};
