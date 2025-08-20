
import React, { useState, useEffect, useRef } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function SOPDashboard() {
  const sectionRefs = {
    patient: useRef(null),
    lab: useRef(null),
    pharmacy: useRef(null),
    doctor: useRef(null),
    facility: useRef(null),
    quality: useRef(null),
  };

  const LabTatChart = () => {
    const data = {
      labels: ['CBC', 'Sugar', 'Lipid', 'Thyroid'],
      datasets: [
        { label: 'Avg TAT', data: [2.5, 1.5, 4, 6], backgroundColor: '#ADE8F4' },
        { label: 'Target TAT', data: [3, 2, 5, 8], backgroundColor: '#CAF0F8' },
      ],
    };
    const options = {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } },
    };
    return <Bar data={data} options={options} />;
  };

  const PharmacyInventoryChart = () => {
    const data = {
      labels: ['Antibiotics', 'Vitamins', 'Diabetic', 'Others'],
      datasets: [
        {
          label: 'Stock',
          data: [25, 20, 15, 10],
          backgroundColor: ['#0077B6', '#00B4D8', '#ADE8F4', '#90E0EF'],
        },
      ],
    };
    const options = {
      responsive: true,
      plugins: { legend: { position: 'top' } },
    };
    return <Doughnut data={data} options={options} />;
  };

  const AccordionItem = ({ title, id, children }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${!open && 'collapsed'}`}
            onClick={() => setOpen(!open)}
          >
            {id}: {title}
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${open && 'show'}`}>
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid bg-light px-3 px-md-5 py-4">
      <h2 className="fw-bold text-primary mb-4 text-center">RUWA INDIA – SOP Dashboard</h2>

      {/* Patient Management */}
      <section id="patient" ref={sectionRefs.patient} className="mb-5">
        <h3 className="text-primary">👤 Patient Management</h3>
        <div className="row g-3 mb-3">
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center p-3 shadow">
              <p className="text-muted mb-1">Avg. Wait Time</p>
              <h5 className="text-primary fw-bold">&lt; 15 min</h5>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center p-3 shadow">
              <p className="text-muted mb-1">Satisfaction</p>
              <h5 className="text-primary fw-bold">95%</h5>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center p-3 shadow">
              <p className="text-muted mb-1">Registrations</p>
              <h5 className="text-primary fw-bold">45</h5>
            </div>
          </div>
        </div>
        <div className="accordion" id="patientAcc">
          <AccordionItem title="Registration & Appointment" id="SOP 2.1">
            <ul>
              <li>Greet patients warmly and professionally.</li>
              <li>Verify patient ID (Aadhaar/PAN/Voter ID).</li>
              <li>Enter or retrieve patient records in JAKMS.</li>
              <li>Assist in service selection and schedule appointments.</li>
              <li>Inform about pre-test preparations (e.g., fasting).</li>
              <li>Generate bill, collect payment, and issue receipt.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Lab Operations */}
      <section id="lab" ref={sectionRefs.lab} className="mb-5">
        <h3 className="text-primary">🔬 Lab Operations</h3>
        <div className="card p-3 mb-3 shadow-sm">
          <div style={{ height: '300px' }}>
            <LabTatChart />
          </div>
        </div>
        <div className="accordion" id="labAcc">
          <AccordionItem title="Sample Collection" id="SOP 3.1">
            <ul>
              <li>Verify identity and requisition form.</li>
              <li>Maintain aseptic technique with sterile equipment.</li>
              <li>Label samples immediately and accurately.</li>
              <li>Provide post-collection care instructions.</li>
              <li>Record all details in JAKMS.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Pharmacy */}
      <section id="pharmacy" ref={sectionRefs.pharmacy} className="mb-5">
        <h3 className="text-primary">💊 Pharmacy</h3>
        <div className="card p-3 mb-3 shadow-sm">
          <div style={{ height: '300px', maxWidth: '400px', margin: '0 auto' }}>
            <PharmacyInventoryChart />
          </div>
        </div>
        <div className="accordion" id="pharmacyAcc">
          <AccordionItem title="Dispensing & Counseling" id="SOP 4.3">
            <ul>
              <li>Verify prescription details and drug information.</li>
              <li>Check batch number and expiry date.</li>
              <li>Counsel patient on dosage, side effects, and storage.</li>
              <li>Generate bill and record in JAKMS.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Doctor Consultation */}
      <section id="doctor" ref={sectionRefs.doctor} className="mb-5">
        <h3 className="text-primary">🩺 Doctor Consultation</h3>
        <div className="accordion" id="doctorAcc">
          <AccordionItem title="Consultation" id="SOP 5.1">
            <ul>
              <li>Take detailed history and perform examination.</li>
              <li>Formulate diagnosis and treatment plan.</li>
              <li>Write legible, generic prescriptions.</li>
              <li>Educate and address patient concerns.</li>
              <li>Provide referral if needed and update EMR.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Facility */}
      <section id="facility" ref={sectionRefs.facility} className="mb-5">
        <h3 className="text-primary">🏥 Facility Management</h3>
        <div className="row g-3 text-center">
          <div className="col-6 col-md-3">
            <div className="p-3 bg-light-subtle  border rounded">
              <p>💉 WHITE</p>
              <p className="small">Sharps (needles, scalpels)</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-primary-subtle border rounded">
              <p>🧪 BLUE</p>
              <p className="small">Glassware (slides, pipettes)</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-warning-subtle rounded">
              <p>🗑️ YELLOW</p>
              <p className="small">Soiled/Expired Waste</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-danger-subtle rounded">
              <p>🩸 RED</p>
              <p className="small">Contaminated Plastic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section id="quality" ref={sectionRefs.quality} className="mb-5">
        <h3 className="text-primary">🎯 Quality Assurance</h3>
        <div className="accordion" id="qaAcc">
          <AccordionItem title="Internal Quality Control" id="SOP 9.1">
            <ul>
              <li>Run internal QC for all tests daily.</li>
              <li>Use Levey-Jennings charts to monitor.</li>
              <li>Investigate and correct any issues before releasing results.</li>
              <li>Document QC and corrective actions thoroughly.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>
    </div>
  );
}
