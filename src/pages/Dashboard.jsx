import React from "react";

import { Col, Container, Row, Card, Button } from "react-bootstrap";
import DashboardHero from "../Component/DashboardHero.jsx";
import IncomeGraph from "../Component/IncomeGraph.jsx";

import TottalSavingsGraph from "../Component/TottalSavingsGraph.jsx";
import IncomeSourcePiechar from "../Component/IncomeSourcePiechar.jsx";
import ExpenseSourcePieChart from "../Component/ExpenseSourcePieChart.jsx";
import { userdata } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { transactions } = userdata();
  return (
    <div className="dashboardWrapper">
      {transactions?.length ? (
        <Container>
          {" "}
          <Row>
            <Col>
              <DashboardHero className="bg-dark text-muted border-rounded rounded-3 shawod"></DashboardHero>
            </Col>
          </Row>
          <Row className="  d-flex mt-3  gap-3 justify-content-between">
            <Col sm={5}>
              <Card className="shadow p-2  flex-wrap ">
                <TottalSavingsGraph></TottalSavingsGraph>{" "}
              </Card>
            </Col>
            <Col sm={5}>
              <Card className="shadow">
                <IncomeGraph></IncomeGraph>{" "}
              </Card>
            </Col>
          </Row>
          {/* this row is for pie charts */}
          <Row className="d-flex mt-3  gap-3 justify-content-between">
            <Col sm={5}>
              <Card className="shadow p-2  flex-wrap ">
                <IncomeSourcePiechar></IncomeSourcePiechar>
              </Card>
            </Col>
            <Col sm={5}>
              <Card className="shadow  flex-wrap ">
                {/* income here */}
                <ExpenseSourcePieChart></ExpenseSourcePieChart>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Card className="d-flex gap-3">
            <Card.Header className="text-center  fw-bolder fs-5">
              <strong className="fs-5">
                No transactions found. Please add some transactions to view
                analytics
              </strong>
            </Card.Header>
            <Card.Body className="text-center">
              <Button variant="primary">
                {" "}
                <Link className="anchor fw-3 " to="/transactions">
                  Click to go to transaction page
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
};

export default Dashboard;
