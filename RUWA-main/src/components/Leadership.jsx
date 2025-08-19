import React from 'react';
// import './Leadership.css';

const leaders = [
  {
    name: 'Hrishabh Gupta',
    title: 'Founder & CEO',
    image: '/assets/images/doctor.jpg',
    bio: 'Visionary leader focused on delivering accessible health services and digital insurance solutions across India.',
  },
  {
    name: 'Anita Sharma',
    title: 'Director of Operations',
    image: '/assets/images/doctor.jpg',
    bio: 'Oversees day-to-day functioning of Jan Seva Kendra, ambulance, and Arogya services with a mission-driven approach.',
  },
  {
    name: 'Ravi Mehta',
    title: 'Chief Technology Officer',
    image: '/assets/images/doctor.jpg',
    bio: 'Heads product development, ensuring secure, scalable digital platforms for our health & welfare initiatives.',
  },
  {
    name: 'Sunita Verma',
    title: 'Head of Outreach',
    image: '/assets/images/doctor.jpg',
    bio: 'Leads community awareness and coordination with rural health centers for maximum impact.',
  },
];


const Leadership = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Leadership Team</h1>
      <div className="row g-4">
        {leaders.map((leader, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card leader-card h-100 text-center shadow-sm rounded-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="card-img-top leader-img"
              />
              <div className="card-bod">
                <h5 className="card-title">{leader.name}</h5>
                <p className="text-muted">{leader.title}</p>
                <p className="card-text">{leader.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
