export const InputFields = [
  {
    label: "Tittle",
    placeholder:
      '"Enter where you spend or receive money (e.g., salary, shopping)"',
    type: "text",
    name: "Tittle",
    required: true,
  },
  {
    label: "Amount",
    placeholder: "enter your amount",
    type: "number",
    name: "amount",
    required: true,
    min: 0,
  },
  {
    label: "Date of Transaction",

    type: "date",
    name: "TransactionDate",
    required: true,
  },
  {
    label: "First Name",
    placeholder: "enter your first name",
    type: "text",
    name: "Fname",
    required: true,
  },
  {
    label: "Last Name",
    placeholder: "enter your Last name",
    type: "text",
    name: "Lname",
    required: true,
  },
  {
    label: "Email",
    placeholder: "enter your email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    label: "Password",
    placeholder: "enter your password",
    type: "password",
    name: "passwordHashed",
    required: true,
    autoComplete: "new-password",
  },
  {
    label: "Confirm Password",
    placeholder: "enter confirmed password",
    type: "password",
    name: "confirmPasswordHashed",
    autoComplete: "new-password",
    required: true,
  },
];
