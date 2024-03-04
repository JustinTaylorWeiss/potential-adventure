import { FirstTile } from "./1FirstTile";
import { Woods } from "./2woods";
import styled from "styled-components";

const ProductsWrapper = styled.div`

`;

export const Products = () => (
    <ProductsWrapper>
        <FirstTile/>
        <Woods/>
    </ProductsWrapper>
);