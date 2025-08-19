
import React, { useState, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./OrgChart.css"; // We'll keep your connector lines here

// === Your full data goes here ===
// const orgData = {
//   hospital: {
//     title: "Hospital Designation Structure",
//     intro:
//       "This section details the hierarchy within the hospital operations, from executive leadership to clinical and support services.",
//     structure: [
//       {
//         name: "Hospital Executive & Administrative Leadership",
//         children: [
//           { name: "Director - Hospital Services / Medical Superintendent" },
//           { name: "Additional Medical Superintendent" },
//           { name: "Deputy Medical Superintendent" },
//           { name: "Head of Operations" },
//           { name: "Head of Quality & Patient Safety" },
//           { name: "Finance Manager (Hospital)" }
//         ]
//       },
//       {
//         name: "Clinical Services (Medical Staff Hierarchy)",
//         children: [
//           { name: "Director / Chief of [e.g., Cardiac Sciences]" },
//           { name: "Head of Department (HOD) / Professor" },
//           { name: "Additional Professor" }
//         ]
//       }
//     ]
//   },
//   "medical-college": {
//     title: "Medical College Designation Structure",
//     intro:
//       "This hierarchy aligns with the National Medical Commission (NMC) norms for academic and administrative roles.",
//     structure: [
//       {
//         name: "Academic & Administrative Leadership",
//         children: [
//           { name: "Dean / Principal" },
//           { name: "Vice-Dean / Vice-Principal" },
//           { name: "Registrar (Academics)" }
//         ]
//       }
//     ]
//   },
//   "arogya-kendra": {
//     title: "Arogya Kendra (Wellness Center) Structure",
//     intro:
//       "This model focuses on preventive health, lifestyle management, and holistic wellness.",
//     structure: [
//       {
//         name: "Leadership & Coordination",
//         children: [
//           { name: "Head - Arogya Kendra / Wellness Director" },
//           { name: "Wellness Program Coordinator" }
//         ]
//       }
//     ]
//   }
// };
const orgData = {
            hospital: {
                title: 'Hospital Designation Structure',
                intro: 'This section details the hierarchy within the hospital operations, from executive leadership to clinical and support services.',
                structure: [
                    { name: 'Hospital Executive & Administrative Leadership', children: [
                        { name: 'Director - Hospital Services / Medical Superintendent' },
                        { name: 'Additional Medical Superintendent' },
                        { name: 'Deputy Medical Superintendent' },
                        { name: 'Head of Operations' },
                        { name: 'Head of Quality & Patient Safety' },
                        { name: 'Finance Manager (Hospital)' },
                        { name: 'Human Resources (HR) Manager (Hospital)' },
                        { name: 'Manager - Information Technology (IT) & HIS' },
                        { name: 'Manager - Biomedical Engineering' },
                        { name: 'Manager - Facilities & Maintenance' },
                        { name: 'Manager - Marketing & Public Relations' },
                        { name: 'Manager - Supply Chain & Procurement' },
                    ]},
                    { name: 'Clinical Services (Medical Staff Hierarchy)', children: [
                        { name: 'Director / Chief of [e.g., Cardiac Sciences]' },
                        { name: 'Head of Department (HOD) / Professor' },
                        { name: 'Additional Professor' },
                        { name: 'Associate Professor' },
                        { name: 'Assistant Professor' },
                        { name: 'Senior Consultant' },
                        { name: 'Consultant' },
                        { name: 'Associate Consultant' },
                        { name: 'Attending Consultant / Junior Consultant' },
                        { name: 'Senior Resident (Post-MD/MS/DNB)' },
                        { name: 'Junior Resident (Pursuing MD/MS/DNB)' },
                        { name: 'Medical Officer / Duty Doctor' },
                        { name: 'Intern (MBBS Rotational Training)' },
                    ]},
                    { name: 'Nursing Services Hierarchy', children: [
                        { name: 'Chief of Nursing / Nursing Director' },
                        { name: 'Nursing Superintendent' },
                        { name: 'Deputy Nursing Superintendent' },
                        { name: 'Assistant Nursing Superintendent' },
                        { name: 'Ward In-charge / Nursing Supervisor' },
                        { name: 'Senior Staff Nurse / Nursing Sister' },
                        { name: 'Staff Nurse' },
                        { name: 'Nursing Assistant' },
                    ]},
                    { name: 'Allied Health & Support Services', children: [
                        { name: 'Head of Pharmacy', children: [{ name: 'Senior Pharmacist' }, { name: 'Pharmacist' }] },
                        { name: 'Head of Laboratory Services', children: [{ name: 'Senior Lab Technician' }, { name: 'Lab Technician' }] },
                        { name: 'Head of Radiology/Imaging', children: [{ name: 'Senior Radiographer' }, { name: 'Radiographer' }] },
                        { name: 'Head of Physiotherapy', children: [{ name: 'Senior Physiotherapist' }, { name: 'Physiotherapist' }] },
                        { name: 'Head of Dietetics', children: [{ name: 'Senior Dietitian' }, { name: 'Dietitian' }] },
                        { name: 'Manager - Medical Records Department (MRD)', children: [{ name: 'MRD Officer' }, { name: 'MRD Technician' }] },
                        { name: 'Manager - Central Sterile Supply Department (CSSD)', children: [{ name: 'CSSD Supervisor' }, { name: 'CSSD Technician' }] },
                        { name: 'Blood Bank Officer', children: [{ name: 'Blood Bank Technician' }] },
                        { name: 'Hospital Administrator / Floor Manager' },
                        { name: 'Billing Head', children: [{ name: 'Billing Executive' }] },
                        { name: 'Insurance/TPA Desk Manager', children: [{ name: 'Insurance Executive' }] },
                        { name: 'Front Office Manager', children: [{ name: 'Front Office Executive / Patient Care Coordinator' }] },
                        { name: 'Security Head', children: [{ name: 'Security Supervisor' }, { name: 'Security Guard' }] },
                    ]},
                ]
            },
            'medical-college': {
                title: 'Medical College Designation Structure',
                intro: 'This hierarchy aligns with the National Medical Commission (NMC) norms for academic and administrative roles.',
                structure: [
                     { name: 'Academic & Administrative Leadership', children: [
                        { name: 'Dean / Principal' },
                        { name: 'Vice-Dean / Vice-Principal' },
                        { name: 'Registrar (Academics)' },
                        { name: 'Controller of Examinations' },
                        { name: 'College Administrative Officer' },
                    ]},
                    { name: 'Faculty Hierarchy (Per Department)', children: [
                        { name: 'Professor & Head of Department (HOD)' },
                        { name: 'Professor' },
                        { name: 'Associate Professor' },
                        { name: 'Assistant Professor' },
                        { name: 'Tutor / Demonstrator' },
                    ]},
                    { name: 'College Support Staff', children: [
                        { name: 'Librarian', children: [{ name: 'Assistant Librarian' }] },
                        { name: 'Student Affairs Officer' },
                        { name: "Hostel Warden (Men's/Women's)" },
                        { name: 'Office Superintendent' },
                        { name: 'Accounts Officer (College)' },
                        { name: 'Clerical Staff (Upper/Lower Division Clerk)' },
                        { name: 'Lab Assistants (for College Labs)' },
                    ]},
                ]
            },
            'arogya-kendra': {
                title: 'Arogya Kendra (Wellness Center) Structure',
                intro: 'This model focuses on preventive health, lifestyle management, and holistic wellness.',
                structure: [
                    { name: 'Leadership & Coordination', children: [
                        { name: 'Head - Arogya Kendra / Wellness Director' },
                        { name: 'Wellness Program Coordinator' },
                        { name: 'Administrative Officer (Arogya Kendra)' },
                    ]},
                    { name: 'Practitioners & Therapists', children: [
                        { name: 'Consultant - Preventive & Lifestyle Medicine' },
                        { name: 'Yoga & Meditation Guru / Senior Instructor' },
                        { name: 'Yoga Therapist / Instructor' },
                        { name: 'Naturopathy Doctor (BNYS)' },
                        { name: 'Ayurveda Doctor (BAMS)' },
                        { name: 'Chief Dietitian / Head of Nutrition' },
                        { name: 'Clinical Nutritionist / Dietitian' },
                        { name: 'Lead Physiotherapist (Wellness)' },
                        { name: 'Acupuncturist / Acupressure Therapist' },
                        { name: 'Counselor / Mental Wellness Coach' },
                    ]},
                    { name: 'Support Staff', children: [
                        { name: 'Wellness Center Receptionist / Coordinator' },
                        { name: 'Therapy Assistant' },
                        { name: 'Support Staff / Attendant' },
                    ]},
                ]
            }
        };

export default function OrgChart() {
  const [activeTab, setActiveTab] = useState("hospital");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsed, setCollapsed] = useState({});

  const toggleNode = (path) => {
    setCollapsed((prev) => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return orgData;

    const filterTree = (node) => {
      if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return { ...node };
      }
      if (node.children) {
        const filteredChildren = node.children
          .map(filterTree)
          .filter(Boolean);
        if (filteredChildren.length) {
          return { ...node, children: filteredChildren };
        }
      }
      return null;
    };

    const newData = {};
    for (const key in orgData) {
      newData[key] = {
        ...orgData[key],
        structure: orgData[key].structure
          .map(filterTree)
          .filter(Boolean)
      };
    }
    return newData;
  }, [searchTerm]);

  const renderTree = (nodes, path = "") => {
    return nodes.map((node, i) => {
      const nodePath = `${path}${i}`;
      const hasChildren = node.children && node.children.length > 0;
      const isCollapsed = collapsed[nodePath];

      return (
        <li key={nodePath}>
          <div
            className={`chart-node ${
              searchTerm &&
              node.name.toLowerCase().includes(searchTerm.toLowerCase())
                ? "highlight"
                : ""
            }`}
          >
            {hasChildren && (
              <span
                className={`toggle-icon ${isCollapsed ? "collapsed" : ""}`}
                onClick={() => toggleNode(nodePath)}
              >
                ▶
              </span>
            )}
            <span className="node-name">{node.name}</span>
          </div>
          {hasChildren && !isCollapsed && (
            <ul>{renderTree(node.children, nodePath + "-")}</ul>
          )}
        </li>
      );
    });
  };

  const section = filteredData[activeTab];

  return (
    <>
   

    <div className="container py-4">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="fw-bold">
          Healthcare & Medical Education Institution
        </h1>
        <p className="text-muted">Interactive Organizational Structure</p>
      </header>
 <section className="mb-4 pb-4 border-bottom">
  <h2 className="h4 fw-bold mb-3">Apex Governing & Executive Leadership</h2>
  <p className="text-muted mb-4">
    This level provides strategic direction and oversight for the entire institution.
  </p>
  
  <div className="row text-center g-3">
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Chairperson / President</h3>
        <p className="small text-muted">(of the Trust/Society)</p>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Board of Trustees</h3>
        <p className="small text-muted">Governing Council</p>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Director-General / CEO</h3>
        <p className="small text-muted">Entire Institution</p>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Chief Operating Officer</h3>
        <p className="small text-muted">(COO)</p>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Chief Financial Officer</h3>
        <p className="small text-muted">(CFO)</p>
      </div>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
      <div className="bg-light p-3 rounded">
        <h3 className="fw-semibold fs-5">Chief Administrative Officer</h3>
        <p className="small text-muted">(CAO)</p>
      </div>
    </div>
  </div>
</section>
      {/* Tabs */}
      <div className="mb-3 d-flex gap-2 flex-wrap">
        {Object.keys(orgData).map((key) => (
          <button
            key={key}
            className={`btn ${
              activeTab === key ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {key.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a designation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Chart */}
      <div className="card p-3">
        <h3>{section.title}</h3>
        <p className="text-muted">{section.intro}</p>
        <div className="org-chart">
          <ul>{renderTree(section.structure)}</ul>
        </div>
      </div>
    </div>
    </>
  );
}
