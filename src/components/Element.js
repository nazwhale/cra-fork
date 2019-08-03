// @flow

import * as React from "react";
import styled from "styled-components";

import Ingredients from "./Ingredients";
import chevron from "../assets/chevron.svg";

const Container = styled.div`
  display: flex;
  margin: 24px 0;
`;

const Box = styled.div`
  min-width: 200px;
  border: 1px rgb(222, 222, 222) solid;
  padding: 12px;
  border-radius: 3px;
  background-color: white;
`;

const ArrowOutputContainer = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const Chevron = styled.img`
  margin: 0 18px 0 18px;
  height: 28px;
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
          <Chevron src={chevron} alt="chevron" />
          {output}
        </ArrowOutputContainer>
      </Container>
    );
  }
}
