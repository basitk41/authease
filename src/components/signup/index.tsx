import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "@/service";
import { useNavigate } from "react-router-dom";
import { successToast } from "@/utils";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("/user", { name, email });
      successToast("User created successfully!");
      if (response.data.status === "success") {
        const res = await axios.post(`/generate-otp/${email}`);
        if (res.data.status === "success") {
          successToast(res.data.message);
          navigate("/otp?email=" + email);
        }
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col sm={12} md={6}>
          <Form>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSignup} className="mt-3">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
