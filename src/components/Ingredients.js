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

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  height: 8px;
  min-width: 42px;
  width: 100%;
  border-radius: 12px 0 0 12px;

  background-color: green;
`;

export default class Element extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Container>
        {items.map(i => (
          <Ingredient>
            <IngredientName>{i}</IngredientName>
            <ArrowContainer>
              <Arrow />
            </ArrowContainer>
          </Ingredient>
        ))}
      </Container>
    );
  }
}
