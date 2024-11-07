import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputFields } from "../Utility/Inputfield.js";
import CustomeInput from "../Component/CustomeInput.jsx";
import { useForm } from "../CustomHooks/useForm.js";
import { userdata } from "../context/ContextApi.jsx";

const TransactionForm = () => {
  const { handleOnSubmit, handleOnChange } = useForm();
  const { isSubmit } = userdata();
  // filtering the array for custom input fileds
  const LoginInputFields = InputFields.filter(
    (input) =>
      input.name == "Tittle" ||
      input.name == "amount" ||
      input.name == "TransactionDate"
  );

  return (
    <>
      <Container className="bg-light">
        <Row className="justify-content-center align-items-center  ">
          <Col md={12} className=" shadow-lg rounded bg-white">
            <div className="text-center mb-4">
              <p className="text-muted">* All fields are required</p>
            </div>

            <Form onSubmit={(e) => handleOnSubmit(e)}>
              <Form.Group
                onChange={(e) => {
                  handleOnChange(e);
                }}
                className="mb-3"
                controlId="formGridState"
              >
                <Form.Label>Transaction Type</Form.Label>
                <Form.Select required name="type" defaultValue="">
                  <option disabled value="">
                    {" "}
                    Choose...
                  </option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </Form.Select>
              </Form.Group>
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
export default TransactionForm;
