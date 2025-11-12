import React from 'react'
import Comp1 from '../Component/LandingCom1';
import Comp2 from '../Component/LandingCom2';
import Comp3 from '../Component/Services';
import Comp4 from '../Component/Process';
import Comp5 from '../Component/Feature';
import Comp6 from '../Component/Category';
import Comp7 from '../Component/FAQ';
import Comp8 from '../Component/Footer';

function ContactPage() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div >
          <Comp1 />
          <Comp2 />
          <Comp3 />
          <Comp4 />
          <Comp5 />
          <Comp6 />
          <Comp7 />
          <Comp8 />
   
    </div>
  </div>
  )
}

export default ContactPage;