import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CustomeInput from "../Component/CustomeInput.jsx";
import { useForm } from "../context/useForm.js";
import { InputFields } from "../Utility/Inputfield.js";

import { imges } from "../assets/assets.js";
import Quotes from "../Component/Quotes.jsx";

const Register = () => {
  const { handleOnSubmit, handleOnChange } = useForm();
  const registerInputFields = InputFields.filter(
    (input) =>
      input.name != "Tittle" &&
      input.name != "amount" &&
      input.name != "TransactionDate"
  );
  return (
    <>
      <Container className="bg-light   vh-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={6} className="mt-md-4 d-md-block p-0">
            <div className="register-background">
              <h1 className="text-white text-center">Join Us Today!</h1>
            </div>
            <div className="text-white  text-center register-background">
              <Quotes></Quotes>
            </div>
          </Col>
          <Col md={6} className="p-5 shadow-lg rounded bg-white">
            <div className="text-center mb-4">
              <h2 className="mb-3">Create Your Account</h2>
              <p className="text-muted">
                Register to start tracking your finances.
              </p>
            </div>

            <Form onSubmit={(e) => handleOnSubmit(e)}>
              {registerInputFields.map((input) => (
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
                Register
              </Button>
            </Form>
            <div className="mt-3 text-center">
              <a href="/login" className="text-primary">
                Already registered? Go to login
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
