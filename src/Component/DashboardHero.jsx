import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { userdata } from "../context/ContextApi";

const DashboardHero = () => {
  const { transactions } = userdata();
  const income = transactions.filter((tr) => {
    if (tr.type == "income") {
      return tr.amount;
    }
  });
  const expense = transactions.filter((tr) => {
    if (tr.type == "expense") {
      return tr.amount;
    }
  });
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalexpense = expense.reduce((acc, item) => acc + item.amount, 0);
  const tottalSaving = transactions.reduce(
    (acc, item) =>
      item.type == "income" ? acc + item.amount : acc - item.amount,
    0
  );
  return (
    <Row className="mt-3 justify-content-between align-items-center gap-3 ">
      <Col>
        <div className=" text-warning fw-bolder fw-5 fs-3 ">Summary</div>
      </Col>

      <Col>
        <Card className="d-flex justify-content-center p-2 bg-dark text-info">
          <div className="text-center ">Income</div>
          <div className="d-flex  gap-2 justify-content-center align-items-center ">
            <div className="text-warning d-flex justify-content-center ">
              <GiReceiveMoney className="reactDashboarSummaryICONS" />
            </div>
            <div className="text-success fs-5 ">
              <strong>${totalIncome}</strong>
            </div>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="d-flex justify-content-center p-2 bg-dark text-info">
          <div className="text-center ">Expense</div>
          <div className="d-flex  gap-2 justify-content-center align-items-center ">
            <div className="text-warning d-flex justify-content-center ">
              <GiPayMoney className="reactDashboarSummaryICONS" />
            </div>
            <div className="text-danger fs-5  ">
              <strong>${totalexpense}</strong>
            </div>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="d-flex justify-content-center p-2 bg-dark text-info">
          <div className="text-center ">Savings</div>
          <div className="d-flex  gap-2 justify-content-center align-items-center ">
            <div className="text-warning d-flex justify-content-center ">
              <MdSavings className="reactDashboarSummaryICONS" />
            </div>
            <div
              className={
                tottalSaving > 0 ? "fs-5 text-success" : "fs-5 text-danger"
              }
            >
              {tottalSaving >= 0 ? (
                <strong>${Math.abs(tottalSaving)}</strong>
              ) : (
                <strong>-${Math.abs(tottalSaving)}</strong>
              )}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardHero;
