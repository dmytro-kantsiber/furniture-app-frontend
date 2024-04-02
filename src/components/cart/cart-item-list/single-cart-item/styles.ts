import styled from "styled-components";

export const SingleCartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

export const AmountText = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 30px;
`;

export const AmountButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid var(--color-green);
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  color: var(--color-green);
  line-height: 0px;
  font-size: 32px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  width: 180px;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-green);
`;

export const RemoveButton = styled(AmountButton)`
  border: 2px solid var(--color-red);
  color: var(--color-red);
  margin-left: 10px;
`;
