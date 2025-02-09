import About from '@/components/About';
import Award from '@/components/Award';
import Banner from '@/components/Banner';
import MySkill from '@/components/MySkill';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <Award />
      <About />
      <MySkill/>
    </div>
  );
};

export default page;