import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "@/service";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context";
import { successToast } from "@/utils";

const OTPComponent: React.FC = () => {
  const [, setAuth] = useAuth();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email") || "";

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
    } else {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.get(`/verfiy-otp/${email}/${otp}`);
      if (response.data.status === "success") {
        successToast(response.data.message);
        localStorage.setItem("email", email);
        setAuth(true);
        navigate("/");
        successToast("Login successful!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleResendOTP = async () => {
    if (canResend) {
      setCanResend(false);
      setTimer(60);
      await axios.post(`/generate-otp/${email}`);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col sm={12} md={6}>
          <Form>
            <Form.Group controlId="otp">
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleVerifyOTP}
              className="mt-3"
            >
              Verify OTP
            </Button>
            <Button
              variant={canResend ? "info" : "secondary"}
              className="ms-3 mt-3"
              onClick={handleResendOTP}
              disabled={!canResend}
            >
              Resend OTP in {timer}s
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OTPComponent;
