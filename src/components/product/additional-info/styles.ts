import styled from "styled-components";

export const AdditionalInfoWrapper = styled.div`
  padding-top: 40px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TabSwitcher = styled.p`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 5px;
  &:hover {
    color: var(--color-green-hover);
  }
`;

export const Content = styled.div`
  padding: 20px 0;
`;
