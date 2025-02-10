import About from '@/components/About';
import Award from '@/components/Award';
import Banner from '@/components/Banner';
import MyServices from '@/components/MyServices';
import MySkill from '@/components/MySkill';
import React from 'react';
import Projects from './projects/page';
import Testimonial from '@/components/Testimnial';
import BlogsPage from './blog/page';
import Contact from './contact/page';

const page = () => {
  return (
    <div>
      <Banner />
      <Award />
      <About />
      <MySkill />
      <MyServices />
      <Projects />
      <Testimonial />
      <BlogsPage />
      <Contact/>
    </div>
  );
};

export default page;