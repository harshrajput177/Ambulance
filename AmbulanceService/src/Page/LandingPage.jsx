import React from 'react'
import Comp1 from '../Component/LandingCom1';
import Comp2 from '../Component/LandingCom2';
import Comp3 from '../Component/Services';
import Comp4 from '../Component/Process';
import Comp5 from '../Component/Feature';
import Comp6 from '../Component/Category';
import Comp7 from '../Component/FAQ';
import Comp8 from '../Component/ContactForm';
import Comp9 from '../Component/Footer';

function ContactPage() {
  return (
    <div className="folder-page">
      <div>

        <div id="home">
          <Comp1 />
        </div>

        <div id="about">
          <Comp2 />
        </div>

        <div id="services">
          <Comp3 />
        </div>

        <div id="process">
          <Comp4 />
        </div>

        <div id="feature">
          <Comp5 />
        </div>

        <div id="category">
          <Comp6 />
        </div>

        <div id="faq">
          <Comp7 />
        </div>

        <div id="contact">
          <Comp8 />
        </div>

              <div id="contact">
          <Comp9 />
        </div>

      </div>
    </div>
  )
}


export default ContactPage;