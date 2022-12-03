import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;

export const TitleDashboard = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const DescriptionDashboard = styled.p`
  font-size: 25px;
  font-weight: normal;
  font-weight: 100;
  line-height: 1.6;
`;

export const Span = styled.span`
  color: #ed4a9e;
  font-weight: bold;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  background: #1d1d22;
  color: #fff;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
`;