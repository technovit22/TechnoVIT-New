import React from "react";
import Div, { animations } from "../common/components/AnimatedDiv";
import PageLayout from "../common/layout/PageLayout";
import Image from "next/image";
import wave from '../../public/assets/wave-loop1.gif'
import Card from '../common/components/Card/Card'
import poster from '../../public/assets/clashRoyale.webp'
import StudentCard from '../common/components/StudentCard/StudentCard'

const Home = () => {
  return (
    <PageLayout className="">
      <Div className="text-center" animationStyle={animations.leftToRight}>
      <Image src = {wave} width={1330} height = {300} className="opacity-50  relative"/>
      <p className='text-center -mt-[2.5em] text-7xl z-50 relative'>technoVIT 22</p>
      </Div>
      <Div className="text-center mt-2 p-[4em] overflow-hidden flex" animationStyle={animations.rightToLeft}>
        <Card title="Test" src={poster}>Hello Hi how are you</Card>
        <StudentCard src = {poster} name="Suraj Shah" email = "surajshah.bombay@gmail.com" number="9892930800" />
      </Div>
      <Div className="text-center">Section 3</Div>
      
    </PageLayout>
  );
};

export default Home;
