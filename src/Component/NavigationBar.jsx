import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserEdit } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";

import { TbTransactionDollar } from "react-icons/tb";
import { userdata } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const { user } = userdata();

  const onLogoutHandler = () => {
    localStorage.removeItem("token");

    setUser({});
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard" className="logo">
            YFT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {user._id ? (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    <AiFillDashboard /> Dashboard
                  </Nav.Link>
                  <Nav.Link as={Link} to="/transactions">
                    <TbTransactionDollar /> Transactions
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" onClick={onLogoutHandler}>
                    <TbLogout2 />
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <FaSignInAlt /> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    <FaUserEdit /> Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
