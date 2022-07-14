import React from 'react';
import { AboutPageTemplate } from 'templates/AboutPageTemplate';
import { AboutCard } from 'components/molecules/AboutCard/AboutCard';

export const About = () => (
  <AboutPageTemplate pageType="about">
    <AboutCard typeOfCard="about" />
  </AboutPageTemplate>
);
