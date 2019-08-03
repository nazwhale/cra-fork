// @flow

import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Ingredient = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IngredientName = styled.p`
  margin-right: 24px;
`;

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  min-width: 42px;
  width: 100%;
  height: 1px;

  background-color: #666;
`;

export default class Element extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Container>
        {items.map(i => (
          <Ingredient>
            <IngredientName>{i}</IngredientName>
            <LineContainer>
              <Line />
            </LineContainer>
          </Ingredient>
        ))}
      </Container>
    );
  }
}
