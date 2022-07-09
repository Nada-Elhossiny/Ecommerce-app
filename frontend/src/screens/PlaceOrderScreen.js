import React from 'react';
import CheckoutPath from '../components/CheckoutPath';
import CartScreen from './CartScreen';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';

export default function PlaceOrderScreen() {
  return (
    <div>
      <CheckoutPath step1 step2 step3 step4></CheckoutPath>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {cart.shippingDetails.fullName} <br />
                <strong>Address:</strong> {cart.shippingDetails.address},
                {cart.shippingDetails.city},{cart.shippingDetails.country},
                {cart.shippingDetails.postalCode}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
