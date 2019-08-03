import React, { Component } from "react";
import styled from "styled-components";

import Element from "./components/Element";

const Container = styled.div`
  margin: 12px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Recipes</h1>
        <h3>Aubergine Fasenjan</h3>
        <Element
          ingredients={["oil", "aubergines"]}
          process="roast"
          time="1 hour"
          output="roast aubergines"
        />
        <Element
          ingredients={["oil", "red onion"]}
          process="fry"
          time="12 minutes"
          output="fried onions"
        />
        <Element
          ingredients={["walnuts"]}
          process="blitz"
          output="walnut crumbs"
        />
      </Container>
    );
  }
}

export default App;
