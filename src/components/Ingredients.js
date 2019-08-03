// @flow

import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Ingredient = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;

  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 40px solid green;

  margin: 0 12px;
`;

export default class Element extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Container>
        {items.map(i => (
          <Ingredient>
            <p>{i}</p>
            <Arrow />
          </Ingredient>
        ))}
      </Container>
    );
  }
}
