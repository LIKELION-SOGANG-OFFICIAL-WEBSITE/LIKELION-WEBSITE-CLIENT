import React from 'react';
import Header from '../components/common/Header';
import FirstSection from '../components/contact/FirstSection';
import SecondSection from '../components/contact/SecondSection';

function Contact() {
  return (
    <>
      <Header isBackGroundBlack={false} />
      <FirstSection />
      <SecondSection />
    </>
  );
}

export default Contact;
