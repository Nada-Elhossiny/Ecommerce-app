import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ShoppingAddressScreen() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Details</title>
      </Helmet>
      <h1 className="my-3">Shipping Details</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
