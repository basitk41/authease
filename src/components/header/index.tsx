import { useAuth } from "@/context";
import React, { useEffect, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(pathname !== "/login");
  const [isAuth, setAuth] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("email");
    setAuth(false);
    navigate("/login");
  };

  useEffect(() => {
    setIsLoginPage(pathname !== "/login");
    const email = localStorage.getItem("email") || "";
    if (email && email != "null") {
      setAuth(true);
    }
  }, [pathname, setAuth]);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer", fontSize: "2rem" }}
          className="text-light"
          href="/"
        >
          AuthEase
        </Navbar.Brand>
        {isAuth ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : isLoginPage ? (
          <Link
            to="/login"
            className="text-light text-decoration-none btn-hover"
          >
            <Button variant="outline-light">Login</Button>
          </Link>
        ) : (
          <Link
            to="/signup"
            className="text-light text-decoration-none btn-hover"
          >
            <Button variant="outline-light">Signup</Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
