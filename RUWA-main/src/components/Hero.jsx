// import React from 'react'
// import { Link } from 'react-router-dom'

// import { Swiper, SwiperSlide } from 'swiper/react';


// import { Pagination, Navigation } from 'swiper/modules';

// export default function Hero() {
//   return (
//     <>
    
//       <section className="hero__v6 section" id="home">

//         <div className="container">
//           <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src='/assets/images/inch.jpg' style={{ width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         <SwiperSlide><img src='/assets/images/digo.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         <SwiperSlide><img src='/assets/images/ambulance.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//          <SwiperSlide><img src='/assets/images/doctor.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         <SwiperSlide><img src='/assets/images/village_sec.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         <SwiperSlide><img src='/assets/images/village.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//          <SwiperSlide><img src='/assets/images/village_third.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         <SwiperSlide><img src='/assets/images/medical.jpg' style={{width:"100vw",height:"300px",objectFit:"cover"}}/></SwiperSlide>
//         {/* <SwiperSlide><img src='/public/assets/images/' style={{width:"100vw",height:"300p3"}}/>,objectFit:"cover"</SwiperSlide> */}
       
//       </Swiper>
        //   <div className="row mt-4">
        //     <div className="col-lg-6 mb-4 mb-lg-0">
        //       <div className="row">
        //         <div className="col-lg-11"><span className="hero-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">RUWIA INDIA <sup className='super'>TM</sup></span>
        //           <h5 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">Welcome to NHS India, your one-stop solution for comprehensive healthcare services and insurance</h5>
        //           <p className="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">We understand that navigating the health system can be challenging, and we are here to simplify the process, ensuring that our patients receive the care they need without any hassles.</p>
        //           <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300"><Link className="btn" to="/getstart">Get Started Now</Link><Link className="btn btn-white-outline" to="learnmore">Learn More
        //             <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        //               <path d="M7 7h10v10"></path>
        //               <path d="M7 17 17 7"></path>
        //             </svg></Link></div>
        //           <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400"><span className="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
        //             <div className="logos-images d-flex gap-4 align-items-center"><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1" style={{ width: "110px" }} /><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2" style={{ width: "80px" }} /><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3" style={{ width: "110px" }} /></div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="col-lg-6">
        //       <div className="hero-img"><img className="img-card img-fluid" src="/assets/images/inch.jpg" alt="Image card" data-aos="fade-down" data-aos-delay="600" /><img className="img-main img-fluid rounded-4" src="/assets/images/health.jpg" alt="Hero Image" data-aos="fade-in" data-aos-delay="500" /></div>
        //     </div>
        //   </div>
        // </div>

//       </section>
//     </>
//   )
// }




// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Navigation } from 'swiper/modules'

// export default function Hero() {
//   return (
//     <>
//       <section className="hero__v6 section" id="home">
//         <div className="container">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[Pagination, Navigation]}
//             className="mySwiper"
//           >
//             {[
//               {
//                 src: '/assets/images/inch.jpg',
//                 title: 'Inclusive Healthcare',
//                 text: 'Bringing care to every doorstep with compassion and innovation.'
//               },
//               {
//                 src: '/assets/images/digo.jpg',
//                 title: 'Digital Healthcare',
//                 text: 'Leveraging technology to connect rural patients with specialists.'
//               },
//               {
//                 src: '/assets/images/ambulance.jpg',
//                 title: 'Rapid Ambulance Service',
//                 text: 'Emergency response at lightning speed across all terrains.'
//               },
//               {
//                 src: '/assets/images/doctor.jpg',
//                 title: 'Skilled Medical Professionals',
//                 text: 'Our team of dedicated doctors ensures expert treatment for all.'
//               },
//               {
//                 src: '/assets/images/village_sec.jpg',
//                 title: 'Serving Rural Communities',
//                 text: 'We ensure even the remotest villages receive reliable healthcare.'
//               },
//               {
//                 src: '/assets/images/village.jpg',
//                 title: 'Healthcare Awareness in Villages',
//                 text: 'Educating and empowering local communities with health knowledge.'
//               },
//               {
//                 src: '/assets/images/village_third.jpg',
//                 title: 'Community Health Drives',
//                 text: 'Organizing regular camps for checkups, vaccinations, and education.'
//               },
//               {
//                 src: '/assets/images/medical.jpg',
//                 title: 'Affordable Medical Insurance',
//                 text: 'Secure your family’s future with our easy-to-access plans.'
//               }
//             ].map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div style={{ position: "relative", width: "100%", height: "400px" }}>
//                   <img
//                     src={slide.src}
//                     alt={`Slide ${index + 1}`}
//                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                   />
//                   <div style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     color: "#fff",
//                     textAlign: "center",
//                     background: "rgba(0,0,0,0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                     maxWidth: "90%",
//                   }}>
//                     <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{slide.title}</h1>
//                     <p style={{ fontSize: "1.1rem" }}>{slide.text}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Below section unchanged */}
//           <div className="row mt-4">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <div className="row">
//                 <div className="col-lg-11">
//                   <span className="hero-subtitle text-uppercase" data-aos="fade-up">RUWIA INDIA <sup className='super'>TM</sup></span>
//                   <h5 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
//                     Welcome to NHS India, your one-stop solution for comprehensive healthcare services and insurance
//                   </h5>
//                   <p className="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">
//                     We understand that navigating the health system can be challenging, and we are here to simplify the process, ensuring that our patients receive the care they need without any hassles.
//                   </p>
//                   <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300">
//                     <Link className="btn" to="/getstart">Get Started Now</Link>
//                     <Link className="btn btn-white-outline" to="learnmore">
//                       Learn More
//                       <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M7 7h10v10"></path>
//                         <path d="M7 17 17 7"></path>
//                       </svg>
//                     </Link>
//                   </div>
//                   <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400">
//                     <span className="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
//                     <div className="logos-images d-flex gap-4 align-items-center">
//                       <img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1" style={{ width: "110px" }} />
//                       <img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2" style={{ width: "80px" }} />
//                       <img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3" style={{ width: "110px" }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="hero-img">
//                 <img className="img-card img-fluid" src="/assets/images/inch.jpg" alt="Image card" data-aos="fade-down" data-aos-delay="600" />
//                 <img className="img-main img-fluid rounded-4" src="/assets/images/health.jpg" alt="Hero Image" data-aos="fade-in" data-aos-delay="500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/autoplay';

// export default function Hero() {
//   const [activeAds, setActiveAds] = useState([]);

//   useEffect(() => {
//     const fetchActiveAds = async () => {
//       try {
//         const res = await axios.get('http://192.168.1.6:5000/api/uploads');
//         const filtered = res.data
//           .filter(ad => ad.status === 'Active' && ad.title && ad.file_path)
//           .map(ad => ({
//             id: ad.id,
//             name: ad.title,
//             media: `http://192.168.1.6:5000/${ad.file_path}`,
//             mediaType: ad.file_type,
//             description: ad.description
//           }));
//         setActiveAds(filtered);
//       } catch (err) {
//         console.error('Error fetching active ads:', err);
//       }
//     };

//     fetchActiveAds();
//   }, []);

//   return (
//     <>
//       {/* 🔁 Swiper Slider for Active Ads */}
//       {activeAds.length > 0 && (
//         <section className="py-4 bg-light">
//           <div className="container">
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               loop={true}
//               spaceBetween={30}
//               slidesPerView={1}
//             >
//               {activeAds.map(ad => (
//                 <SwiperSlide key={ad.id}>
//                   <div className="card shadow-sm">
//                     {ad.mediaType === 'image' ? (
//                       <img
//                         src={ad.media}
//                         className="card-img-top"
//                         alt={ad.name}
//                         style={{ maxHeight: '400px', objectFit: 'cover' }}
//                       />
//                     ) : (
//                       <video
//                         controls
//                         muted
//                         className="w-100"
//                         style={{ maxHeight: '400px', objectFit: 'cover' }}
//                       >
//                         <source src={ad.media} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     )}
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{ad.name}</h5>
//                       <p className="card-text">{ad.description}</p>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </section>
//       )}

//       {/* 🌟 Original Hero Section */}
//       <section className="hero__v6 section" id="home">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <div className="row">
//                 <div className="col-lg-11">
//                   <span className="hero-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
//                     Marketing Mantra <sup className='super'>TM</sup>
//                   </span>
//                   <h1 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
//                     Secure, Efficient, and User-Friendly Financial Services
//                   </h1>
//                   <p className="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">
//                     Experience the future of finance with our secure, efficient, and user-friendly financial services.
//                   </p>
//                   <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300">
//                     <Link className="btn" to="/getstart">Get Started Now</Link>
//                     <Link className="btn btn-white-outline" to="learnmore">
//                       Learn More
//                       <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M7 7h10v10" />
//                         <path d="M7 17L17 7" />
//                       </svg>
//                     </Link>
//                   </div>
//                   <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400">
//                     <span className="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
//                     <div className="logos-images d-flex gap-4 align-items-center">
//                       <img className="img-fluid" src="assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1" style={{ width: "110px" }} />
//                       <img className="img-fluid" src="assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2" style={{ width: "80px" }} />
//                       <img className="img-fluid" src="assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3" style={{ width: "110px" }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side hero image */}
//             <div className="col-lg-6">
//               <div className="hero-img">
//                 <img className="img-card img-fluid" src="assets/images/card-expenses.png" alt="Image card" data-aos="fade-down" data-aos-delay="600" />
//                 <img className="img-main img-fluid rounded-4" src="assets/images/hero-img-1-min.jpg" alt="Hero Image" data-aos="fade-in" data-aos-delay="500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






// with 50 50
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// export default function Hero() {
//   const slides = [
//     {
//       src: '/assets/images/inch.jpg',
//       title: 'Inclusive Healthcare',
//       text: 'Bringing care to every doorstep with compassion and innovation.',
//       icon: '🩺',
//     },
//     {
//       src: '/assets/images/digo.jpg',
//       title: 'Digital Healthcare',
//       text: 'Leveraging technology to connect rural patients with specialists.',
//       icon: '💻',
//     },
//     {
//       src: '/assets/images/ambulance.jpg',
//       title: 'Rapid Ambulance Service',
//       text: 'Emergency response at lightning speed across all terrains.',
//       icon: '🚑',
//     },
//     {
//       src: '/assets/images/doctor.jpg',
//       title: 'Skilled Medical Professionals',
//       text: 'Our team of dedicated doctors ensures expert treatment for all.',
//       icon: '👨‍⚕️',
//     },
//     {
//       src: '/assets/images/village_sec.jpg',
//       title: 'Serving Rural Communities',
//       text: 'We ensure even the remotest villages receive reliable healthcare.',
//       icon: '🏥',
//     },
//     {
//       src: '/assets/images/village.jpg',
//       title: 'Healthcare Awareness in Villages',
//       text: 'Educating and empowering local communities with health knowledge.',
//       icon: '📚',
//     },
//     {
//       src: '/assets/images/village_third.jpg',
//       title: 'Community Health Drives',
//       text: 'Organizing regular camps for checkups, vaccinations, and education.',
//       icon: '🧪',
//     },
//     {
//       src: '/assets/images/medical.jpg',
//       title: 'Affordable Medical Insurance',
//       text: 'Secure your family’s future with our easy-to-access plans.',
//       icon: '💊',
//     },
//   ];

//   return (
//     <section className="hero__v6 section" id="home">
//       <div className="container">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'row',
//                   height: '400px',
//                   width: '100%',
//                 }}
//               >
//                 {/* Left - Image */}
//                 <div style={{ flex: '60%', height: '100%' }}>
//                   <img
//                     src={slide.src}
//                     alt={`Slide ${index + 1}`}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 </div>

//                 {/* Right - Text + Icon */}
//                 <div
//                   style={{
//                     flex: '40%',
//                     backgroundColor: '#fff',
//                     padding: '30px',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'flex-start',
//                   }}
//                 >
//                   <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{slide.icon}</div>
//                   <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#111' }}>{slide.title}</h2>
//                   <p style={{ fontSize: '1rem', color: '#333' }}>{slide.text}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//          <div className="row mt-4">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <div className="row">
//                 <div className="col-lg-11"><span className="hero-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">RUWIA INDIA <sup className='super'>TM</sup></span>
//                   <h5 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">Welcome to NHS India, your one-stop solution for comprehensive healthcare services and insurance</h5>
//                   <p className="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">We understand that navigating the health system can be challenging, and we are here to simplify the process, ensuring that our patients receive the care they need without any hassles.</p>
//                   <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300"><Link className="btn" to="/getstart">Get Started Now</Link><Link className="btn btn-white-outline" to="learnmore">Learn More
//                     <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                       <path d="M7 7h10v10"></path>
//                       <path d="M7 17 17 7"></path>
//                     </svg></Link></div>
//                   <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400"><span className="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
//                     <div className="logos-images d-flex gap-4 align-items-center"><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1" style={{ width: "110px" }} /><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2" style={{ width: "80px" }} /><img className="img-fluid js-img-to-inline-svg" src="assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3" style={{ width: "110px" }} /></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="hero-img"><img className="img-card img-fluid" src="/assets/images/inch.jpg" alt="Image card" data-aos="fade-down" data-aos-delay="600" /><img className="img-main img-fluid rounded-4" src="/assets/images/health.jpg" alt="Hero Image" data-aos="fade-in" data-aos-delay="500" /></div>
//             </div>
//           </div>
//         {/* </div> */}
//       </div>
//     </section>
//   );
// }  

















import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './Hero.css'; // Custom styles for responsiveness

export default function Hero() {
  const slides = [
    {
      src: '/assets/images/inch.jpg',
      title: 'Inclusive Healthcare',
      text: 'Bringing care to every doorstep with compassion and innovation.',
      icon: '🩺',
    },
    {
      src: '/assets/images/digo.jpg',
      title: 'Digital Healthcare',
      text: 'Leveraging technology to connect rural patients with specialists.',
      icon: '💻',
    },
    {
      src: '/assets/images/ambulance.jpg',
      title: 'Rapid Ambulance Service',
      text: 'Emergency response at lightning speed across all terrains.',
      icon: '🚑',
    },
    {
      src: '/assets/images/doctor.jpg',
      title: 'Skilled Medical Professionals',
      text: 'Our team of dedicated doctors ensures expert treatment for all.',
      icon: '👨‍⚕️',
    },
    {
      src: '/assets/images/village_sec.jpg',
      title: 'Serving Rural Communities',
      text: 'We ensure even the remotest villages receive reliable healthcare.',
      icon: '🏥',
    },
    {
      src: '/assets/images/village.jpg',
      title: 'Healthcare Awareness in Villages',
      text: 'Educating and empowering local communities with health knowledge.',
      icon: '📚',
    },
    {
      src: '/assets/images/village_third.jpg',
      title: 'Community Health Drives',
      text: 'Organizing regular camps for checkups, vaccinations, and education.',
      icon: '🧪',
    },
    {
      src: '/assets/images/medical.jpg',
      title: 'Affordable Medical Insurance',
      text: 'Secure your family’s future with our easy-to-access plans.',
      icon: '💊',
    },
  ];
const navigate = useNavigate();
  return (
     <>
    <section className="hero__v6 section" id="home">
      <div className="container">
        {/* Swiper Section */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-wrapper">
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <div className="slide-overlay">
                  <div className="icon-heading">
                    <span className="slide-icon">{slide.icon}</span>
                    <h1 className="slide-title">{slide.title}</h1>
                  </div>
                  <p className="slide-text">{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="row mt-4 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-lg-11">
                <span className="hero-subtitle text-uppercase" data-aos="fade-up">
                  RUWA <sup className="super">INDIA</sup>
                </span>
                <h5 className="hero-title mb-3" data-aos="fade-up">
                 Welcome to {process.env.REACT_APP_SITE_NAME}   </h5> 
             <p>your trusted partner in healthcare and insurance.</p>
                <p className="hero-description mb-4 mb-lg-5" data-aos="fade-up">
                 We know that dealing with the health system can be difficult. That’s why we’re here — to make things simple and help you get the care you need without any stress.
                </p>
                <div className="cta d-flex flex-column flex-sm-row gap-2 mb-4 mb-lg-5" data-aos="fade-up">
                  <Link className="btn"  data-bs-dismiss="modal"
                                  data-bs-toggle="modal"
                                  data-bs-target="#loginModal">Get Started Now</Link>
                  <Link className="btn btn-white-outline" to="/learnmore">
                    Learn More
                    <svg className="lucide lucide-arrow-up-right" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                {/* <div className="logos mb-4" data-aos="fade-up">
                  <span className="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
                  <div className="logos-images d-flex gap-4 flex-wrap align-items-center">
                    <img className="img-fluid" src="assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1" style={{ width: '110px' }} />
                    <img className="img-fluid" src="assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2" style={{ width: '80px' }} />
                    <img className="img-fluid" src="assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3" style={{ width: '110px' }} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className="hero-img text-center">
              {/* <img className="img-card img-fluid mb-3" src="/assets/images/inch.jpg" alt="Image card" data-aos="fade-down" /> */}
              <img className="img-main img-fluid rounded-4" src="/assets/images/aboutus.png" alt="Hero" data-aos="fade-in" />
            </div>
          </div>
        </div>



        
      </div>
    </section>
    

   
     <section className="section services__v3 py-1 bg-light" id="services">
          <div className="container">
            <div className="row g-4">
              {/* Intro Card */}
           
    
    
    {/* <div className="col-md-6" data-aos="fade-up">
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
        <div className="text-center fs-1">🧑‍🤝‍🧑</div>
        <h3 className="text-center fs-5 mb-2">Jan Swabhiman Seva</h3>
        <p className="text-center">
          Empowering communities with welfare services, employment access, and social support through transparent and inclusive administration under Jan Swabhiman Seva.
        </p>
        <div className="text-center">
          <button className="btn btn-info" onClick={() => navigate('/apply-swabhiman')}>
            Apply Now
          </button>
        </div>
      </div>
    </div> */}
    
    <div className="col-md-6" data-aos="fade-up">
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
        <div className="text-center fs-1">🪪</div>
        <h3 className="text-center fs-5 mb-2">Jan Arogya Card</h3>
        <p className="text-center">
          Avail affordable health services through the Jan Arogya Card, giving you seamless access to top hospitals and cashless treatments across our partner network.
        </p>
        <div className="text-center">
          <button className="btn btn-success" onClick={() => navigate('/apply-arogya')}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
    
    <div className="col-md-6" data-aos="fade-up">
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
        <div className="text-center fs-1">🚑</div>
        <h3 className="text-center fs-5 mb-2">Emergency Ambulance Service</h3>
        <p className="text-center">
          Quick and reliable ambulance support during emergencies. Our service ensures timely medical transport for patients with fully equipped vehicles and trained personnel.
        </p>
        <div className="text-center">
          <button className="btn btn-danger" onClick={() => navigate('/apply-ambulance')}>
            Book Ambulance
          </button>
        </div>
      </div>
    </div>
    
    <div className="col-md-6" data-aos="fade-up">
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
        <div className="text-center fs-1">🛡️</div>
        <h3 className="text-center fs-5 mb-2">Health Insurance Coverage</h3>
        <p className="text-center">
          Protect yourself and your loved ones with our affordable and comprehensive health insurance plans. Enjoy cashless treatments, wide hospital networks, and peace of mind.
        </p>
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => navigate('/apply-insurance')}>
            Apply for Insurance
          </button>
        </div>
      </div>
    </div>
    
          
    <div className="col-md-6 bg-light" data-aos="fade-up">
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
        <div className="text-center fs-1">🏢</div>
        <h3 className="text-center fs-5 mb-2">Jan Arogya Kendra</h3>
        <p className="text-center">
         We've streamlined the process into four clear steps. Follow the path below to launch your Jan Arogya Kendra.
        </p>
        <div className="text-center">
          <button className="btn btn-danger" onClick={() => navigate('/apply-kendr')}>
            Apply for kendra
          </button>
        </div>
      </div>
    </div>  
             
    
              {/* Extra Cards Below Main Services */}
             
    
              {/* Conclusion Card */}
            
            </div>
          </div>
    
       
        </section>
    </>
  );
}

