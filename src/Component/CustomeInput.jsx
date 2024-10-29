import React from "react";
import Form from "react-bootstrap/Form";

const CustomeInput = ({ ...input}) => {
  const { label, ...rest } = input;
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{input.label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </>
  );
};

export default CustomeInput;
