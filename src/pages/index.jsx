import React from "react";
import Div, { animations } from "../common/components/AnimatedDiv";
import PageLayout from "../common/layout/PageLayout";

const Home = () => {
  return (
    <PageLayout className="">
      <Div className="text-center" animationStyle={animations.leftToRight}>
        Section 1
      </Div>
      <Div className="text-center" animationStyle={animations.rightToLeft}>
        Section 2
      </Div>
      <Div className="text-center">Section 3</Div>
    </PageLayout>
  );
};

export default Home;
