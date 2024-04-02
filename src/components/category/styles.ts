import styled from "styled-components";

export const CategoryWrapper = styled.div`
  padding-top: 30px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
`;

export const Text = styled.h2`
  font-size: 24px;
  line-height: 0;
  padding-top: 20px;
  > a {
    text-decoration: none;
    color: black;
    &:hover {
      color: var(--color-green-hover);
    }
  }
`;
