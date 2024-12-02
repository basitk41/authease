import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useAuth } from "@/context";
import { INewsCardProps } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { Chart } from "react-chartjs-2";
import newsata from "@/mocks/news.json";
import "chart.js/auto";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isAuth] = useAuth();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "OTPs Generated",
        data: [15, 20, 25, 30, 35, 40, 45],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <Container>
      <header className="justify-content-between align-items-center py-3">
        <h2>Welcome to AuthEase</h2>
        <p>
          AuthEase is a user-friendly app for OTP authentication with a focus on
          elegance and simplicity. A seamless and secure platform designed for
          modern authentication. AuthEase ensures that every user session starts
          with a smooth, safe, and quick one-time-password verification process.
          Built using a cutting-edge tech stack like React, TypeScript, and
          Vite, boasts lightning-fast performance and a user-friendly interface.
        </p>
      </header>

      <p className="text-muted text-end">
        {time.toLocaleTimeString()} - {time.toLocaleDateString()}
      </p>

      <Row className="mt-4">
        <Col md={6} className="h-100">
          <h4>Weekly OTP Trends</h4>
          <Chart className="bg-light p-4" type="bar" data={chartData} />
        </Col>

        <Col md={6} style={{ height: "60vh", overflowX: "auto" }}>
          <h4>Latest Tech News</h4>
          <div className="news-feed text-center">
            {newsata.length === 0 ? (
              <Spinner
                className="mt-2"
                variant="primary"
                animation="border"
                role="status"
              />
            ) : (
              newsata.map((article: INewsCardProps, index: number) => (
                <Card key={index} className="mb-3">
                  <Card.Img
                    variant="top"
                    height={300}
                    src={article.urlToImage}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Button
                      variant="link"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
