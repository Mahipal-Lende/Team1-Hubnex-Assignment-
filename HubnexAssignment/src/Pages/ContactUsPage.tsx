import ContactForm from '@/components/mycomponent/form/FormComponent';
import Header from '@/components/mycomponent/Header/Header';
import Locations from '@/components/mycomponent/location/Locations';
import FooterBox from '@/components/mycomponent/Footer/FooterBox';
import FooterEnd from '@/components/mycomponent/Footer/FooterEnd';
import React from 'react'

const ContactUsPage:React.FC = () => {
  return (
    <div>
      <Header></Header>
      <ContactForm></ContactForm>
      <Locations></Locations>
      <FooterBox></FooterBox>
      <FooterEnd></FooterEnd>
    </div>
  )
}

export default ContactUsPage;
