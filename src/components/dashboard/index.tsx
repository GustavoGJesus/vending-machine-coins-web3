import React from 'react'
import { Header } from '../header'
import { Button } from '../shared/Button';
import { DashboardWrapper, DashboardWrapperContent, DescriptionDashboard, Input, Span, TitleDashboard } from './styles'

export function Dashboard() {
  return (
    <DashboardWrapper>
      <Header />
      <DashboardWrapperContent>
        <TitleDashboard>Vending machine coins</TitleDashboard>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "60px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "35%",
            padding: "25px",
            background: "#2E2D42",
            borderRadius: "10px",
          }}
        >
          <DescriptionDashboard>
            Vending machine inventory: <Span>100</Span>
          </DescriptionDashboard>
          <DescriptionDashboard>
            My coins: <Span>5</Span>
          </DescriptionDashboard>
          <DescriptionDashboard style={{marginTop: "50px", marginBottom: "-12px"}}>Buy coins</DescriptionDashboard>
          <Input type="number" />
          <Button variant="primary">Buy</Button>
        </div>
      </DashboardWrapperContent>
    </DashboardWrapper>
  );
}