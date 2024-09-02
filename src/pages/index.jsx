import React from 'react';

import {
  Hero,
  Background,
  Technologies,
  Timeline,
  Projects,
  Footer,
  Layout,
  Seo,
} from '../components';

const index = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Background />
      <Technologies />
      <Timeline />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default index;
