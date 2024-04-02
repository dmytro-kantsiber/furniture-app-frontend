import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductMiniCardWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  max-width: 700px;
  width: 100%;
  color: black;
`;

export const Image = styled.img`
  width: 150px;
  padding-right: 30px;
`;

export const Info = styled.div``;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Configuration = styled.div`
  > div {
    display: flex;
  }
`;

export const ConfigurationTitle = styled.p`
  font-size: 18px;
  font-weight: 500;

  margin: 5px 5px 5px 0;
`;

export const ConfigurationText = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  color: var(--color-green);
`;
