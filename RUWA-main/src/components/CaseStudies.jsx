import React from 'react';
// import './CaseStudy.css';

const caseStudies = [
  {
    title: 'Life Saved in the Golden Hour',
    person: 'Rajiv Kumar, Basti (UP)',
    image: '/assets/images/doctor_sec.jpg', // ➤ Add your imageance', 'Jan Arogya Card'],
    outcome: 'Received emergency treatment worth ₹1.5 lakh free of cost',
    story: 'Rajiv met with a serious road accident. Our ambulance service reached within 10 minutes and he was admitted to a partner hospital under Jan Arogya Card.',
  },
  {
    title: 'Digital Services at Doorstep',
    person: 'Meena Devi, Ballia (UP)',
    image: '/assets/images/doctor_sec.jpg',
    services: ['Jan Seva Center'],
    outcome: 'Got her pension and Ayushman card issued within a day',
    story: 'Earlier, Meena had to travel 30 km for documents. Now, with our Jan Seva Kendra in her village, she gets all services on time.',
  },
  {
    title: 'Accessible Insurance Coverage',
    person: 'Mohd Faizal, Ghazipur (UP)',
    image: '/assets/images/doctor_sec.jpg',
    services: ['Jan Swabhiman Card'],
    outcome: 'Family insured under ₹5 lakh health scheme',
    story: 'With our help, Faizal’s family enrolled for Jan Swabhiman Card and now accesses medical facilities without financial burden.',
  },
];

export default function CaseStudy() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Real Stories of Impact</h2>
      <div className="row">
        {caseStudies.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm case-card">
              <img src={item.image} className="card-img-top" alt={item.person} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="text-muted mb-2">{item.person}</h6>
                {/* <p className="mb-1"><strong>Services:</strong> {item.services.join(', ')}</p> */}
                {Array.isArray(item.services) && (
  <p className="mb-1"><strong>Services:</strong> {item.services.join(', ')}</p>
)}
                <p className="mb-1"><strong>Outcome:</strong> {item.outcome}</p>
                <p className="mt-auto">{item.story}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
