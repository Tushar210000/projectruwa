// import React from 'react'
// import Hero from '../components/Hero'
// import About from '../components/About'
// import Services from '../components/Services'
// import Stars from '../components/Stars'
// import Featuers from '../components/Featuers'
// // import Work from '../components/Work'
// import Testimonials from '../components/Testimonials'
// import Faq from '../components/Faq'
// import Contact from '../components/Contact'

// export default function Homepage() {
//   return (
//     <>
    
//     <Hero/>
//     <About/>
//     {/* <Featuers/> */}
//     {/* <Stars/> */}
//     {/* <Services/> */}
//     {/* <Work/> */}
//     <Services/>
//     <Testimonials/>
//     <Faq/>
//     {/* <Contact/> */}
//     </>
//   )
// }





import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Stars from '../components/Stars'
import Featuers from '../components/Featuers'
// import Work from '../components/Work'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Hrpolicy from '../components/Hrpolicy'
import Orgstructer from '../components/Orgstructer'

export default function Homepage() {
  return (
    <>
      <section className="bg-light">
        <Hero />
      </section>

      <section className="bg-light">
        {/* <About /> */}
      </section>

      <section className="bg-light">
        {/* <Services /> */}
      </section>

      <section className="bg-light">
        <Testimonials />
      </section>

      <section className="bg-white">
        {/* <Faq /> */}
        {/* <Orgstructer/> */}
      </section>
         <section className="bg-light">
       
          {/* <JanarogayKendrFir/> */}
          {/* <JanarogayKendrsec/> */}
          {/* <JanarogayKendrthi/> */}
          {/* <JanarogayKendrfour/> */}
          {/* <Hrpolicy/> */}
      </section>

      {/* <section className="bg-light">
        <Contact />
      </section> */}
    </>
  )}
// import React, { useState, useEffect } from 'react'
// // import Hero from '../components/Hero'
// // import About from '../components/About'
// // import Services from '../components/Services'
// // import Testimonials from '../components/Testimonials'
// // import ModalForm from '../components/ModalForm'
// // import { useEffect, useState } from 'react'

// // export default function Homepage() {
// //   const [showModal, setShowModal] = useState(false);

// //   useEffect(() => {
// //     const hasShownPopup = localStorage.getItem('ruwa_popup_shown');

// //     if (!hasShownPopup) {
// //       const timer = setTimeout(() => {
// //         setShowModal(true);
// //         localStorage.setItem('ruwa_popup_shown', 'true'); // Remember that we showed it
// //       }, 2000);

// //       return () => clearTimeout(timer);
// //     }
// //   }, []);

// //   return (
// //     <>
// //       <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />

// //       <section className="bg-white">
// //         <Hero />
// //       </section>

// //       <section className="bg-light">
// //         <About />
// //       </section>

// //       <section className="bg-white">
// //         <Services />
// //       </section>

// //       <section className="bg-light">
// //         <Testimonials />
// //       </section>
// //     </>
// //   )
// // }
// import React, { useState, useEffect } from 'react';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Services from '../components/Services';
// import Testimonials from '../components/Testimonials';
// import ModalForm from '../components/ModalForm';

// export default function Homepage() {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true); // Always show after 2 seconds
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup
//   }, []);

//   return (
//     <>
//       <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />

//       <section className="bg-white">
//         <Hero />
//       </section>

//       <section className="bg-light">
//         <About />
//       </section>

//       <section className="bg-white">
//         <Services />
//       </section>

//       <section className="bg-light">
//         <Testimonials />
//       </section>
//     </>
//   );
// }
