import React, { Component } from "react";
import styled from "styled-components";

import Element from "./components/Element";

const RecipeContainer = styled.div`
  margin: 12px;
`;

class App extends Component {
  render() {
    return (
      <RecipeContainer>
        <h3>Aubergine Fasenjan</h3>
        <Element
          ingredients={[
            <Element
              ingredients={[
                <Element
                  ingredients={["oil", "aubergines"]}
                  process="roast"
                  time="1 hour"
                  output="roast aubergines"
                />,
                <Element
                  ingredients={[
                    <Element
                      ingredients={[
                        <Element
                          ingredients={["oil", "red onion"]}
                          process="fry"
                          time="12 minutes"
                          output="fried onions"
                        />,
                        "garlic"
                      ]}
                      process="fry"
                      time="2 minutes"
                      output="fried garlic + onion"
                    />,
                    <Element
                      ingredients={["walnuts"]}
                      process="blitz"
                      output="walnut crumbs"
                    />,
                    <Element
                      ingredients={["stock cube", "water"]}
                      process="combine"
                      output="veg stock"
                    />,
                    "pomegranete molasses",
                    "cinnamon",
                    "chili powder",
                    "salt + pepper"
                  ]}
                  process="cook"
                  time="8 minutes"
                  output="fesenjan sauce"
                />,
                <Element
                  ingredients={["pomegranete"]}
                  process="deseed"
                  output="pomegranete seeds"
                />,
                "coriander"
              ]}
              process="combine"
              output="aubergine fesenjan"
            />,
            "rice"
          ]}
          process="combine"
          output="aubergine fesenjan + rice"
        />
      </RecipeContainer>
    );
  }
}

export default App;
