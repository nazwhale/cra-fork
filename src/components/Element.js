// @flow

import * as React from "react";
import styled from "styled-components";

import Ingredients from "./Ingredients";

const Container = styled.div`
  display: flex;
  margin: 24px 0;
`;

const Box = styled.div`
  min-width: 200px;
  border: 3px black solid;
  padding: 12px;
  border-radius: 12px;
  background-color: white;
`;

const ArrowOutputContainer = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;

  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 40px solid green;

  margin: 0 12px 0 0;
`;

export default class Element extends React.Component {
  render() {
    const { ingredients, process, time, output } = this.props;
    return (
      <Container>
        <Ingredients items={ingredients} />
        <Box>
          <p>{process}</p>
          <p>{time}</p>
        </Box>
        <ArrowOutputContainer>
          <Arrow />
          {output}
        </ArrowOutputContainer>
      </Container>
    );
  }
}
