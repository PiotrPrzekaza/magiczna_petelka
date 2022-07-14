import React from 'react';
import { AboutPageTemplate } from 'templates/AboutPageTemplate';
import { ContactForm } from 'components/organisms/ContactForm/ConatctForm';

export const Contact = () => (
  <AboutPageTemplate pageType="contact">
    <ContactForm typeOfCard="contact" />
  </AboutPageTemplate>
);
