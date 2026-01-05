import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutDescription from '../components/About/AboutDescription';

const About: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <AboutHero />
      <AboutDescription />
    </main>
  );
};

export default About;
