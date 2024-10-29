import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { userdata } from "../context/ContextApi.jsx";

import CustomeInput from "../Component/CustomeInput.jsx";
import { useForm } from "../context/useForm.js";
import { InputFields } from "../Utility/Inputfield.js";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = location?.state?.from?.pathname || "/dashboard";
  const { handleOnSubmit, handleOnChange } = useForm();
  const { user } = userdata();

  useEffect(() => {
    user._id && navigate(goToPage);
  }, [user._id, goToPage, navigate]);

  const LoginInputFields = InputFields.filter(
    (input) => input.name == "email" || input.name == "passwordHashed"
  );

  return (
    <>
      (
      <Container className="bg-light vh-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={6} className="d-none d-md-block p-0">
            <div className="login-background">
              <h1 className="text-white text-center">
                Your Financial Journey Starts Here
              </h1>
            </div>
          </Col>
          <Col md={6} className="p-5 shadow-lg rounded bg-white">
            <div className="text-center mb-4">
              <h2 className="mb-3">Welcome Back!</h2>
              <p className="text-muted">Please log in to continue.</p>
            </div>

            <Form onSubmit={(e) => handleOnSubmit(e)}>
              {LoginInputFields.map((input) => (
                <CustomeInput
                  key={input.name}
                  onChange={(e) => handleOnChange(e)}
                  {...input}
                />
              ))}
              <Button
                className="w-100 mt-3 btn-animate"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Form>
            <div className="mt-3 text-center">
              <a href="#" className="text-primary">
                Forgot Password?
              </a>
            </div>
            <div>
              {" "}
              <p>
                Don't have an account? <Link to="/register">Register now</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
