import React from "react";
import CustomeInput from "../Component/CustomeInput.jsx";
import { InputFields } from "../Utility/Inputfield.js";
import { useForm } from "../CustomHooks/useForm.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { userdata } from "../context/ContextApi.jsx";

const ForgotPassword = () => {
  const { isSubmit } = userdata();
  const LoginInputFields = InputFields.filter((input) => input.name == "email");
  const { handleOnSubmit, handleOnChange } = useForm();
  return (
    <>
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
              <p className="text-muted">
                Please enter you vaild email address to recieve reset password
                to your email.
              </p>
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
                disabled={isSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
