import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { successToast } from "@/utils";
import axios from "@/service";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`/generate-otp/${email}`);
      if (response.data.status === "success") {
        successToast(response.data.message);
        navigate("/otp?email=" + email);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col sm={12} md={6}>
          <Form>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
