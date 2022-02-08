import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Form, Button, Row, Col} from 'react-bootstrap'
import './Form.css'

const RegisterForm = () => {
  return (
    <div>
      <h1>Register Now</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Tunis</option>
              <option>Nabeul</option>
              <option>Sousse</option>
              <option>Sfax</option>
              <option>Gafsa</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="I agree to the terms of use." />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;