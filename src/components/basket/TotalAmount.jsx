import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrice = price.toFixed(2);
  console.log(fixedPrice);
  
  return (
    <div style={{ paddingTop: "30px" }}>
      <InfoContainer>
        <Label>Total amout</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionsButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionsButtonsContainer>
    </div>
  );
};

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  color: #222222;
  margin: 0;
`;
const Price = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #8a2b0b;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionsButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 16px;
`;
