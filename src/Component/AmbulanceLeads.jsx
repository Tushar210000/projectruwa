
import React, { useEffect, useState } from 'react';

const AmbulanceLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
  const token=localStorage.getItem("token")
 const fetchLeads = async () => {
  try {
    const response = await fetch('https://last-2-ltig.onrender.com/api/services/ambulance-booking/admin/all', {
       method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    console.log("Fetched bookings from backend:", data);

    const formatted = data.map((item, idx) => ({
      _id: item._id, // use MongoDB _id
      name: item.fullName || '',
      email: item.email || '',
      phone: item.phone || '',
      city: item.hospitalPreference || '',
      message: item.message || '',
      datetime: new Date(item.appointmentDate || Date.now()).toLocaleString(),
      status: item.status || 'PENDING'
    }));

    // keep sorting but with Mongo IDs (optional)
    setLeads(formatted);
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
  }
};


  useEffect(() => {
    fetchLeads();
  }, []);

const handleDelete = async (_id) => {
  if (window.confirm('Are you sure you want to delete this booking?')) {
    try {
      const res = await fetch(
        `https://last-2-ltig.onrender.com/api/services/ambulance-booking/admin/delete/${_id}`,
        {
          method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },

        }
      );

      if (!res.ok) throw new Error('Failed to delete');

      setLeads((prev) => prev.filter((lead) => lead._id !== _id));
    } catch (err) {
      console.error(err);
    }
  }
};

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm) ||
    lead.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * leadsPerPage;
  const indexOfFirst = indexOfLast - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h5 className="mb-0">Leads Table</h5>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name, email, phone, or city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="d-none d-md-table-cell">City</th>
                <th className="d-none d-md-table-cell">Message</th>
                <th className="d-none d-lg-table-cell">Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length > 0 ? currentLeads.map((lead) => (
                <tr key={lead._id}>
                  <td className="text-center">{lead._id}</td>
                  <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
                  <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td className="d-none d-md-table-cell">{lead.city}</td>
                  <td
                    className="d-none d-md-table-cell"
                    style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                  >
                    {lead.message}
                  </td>
                  <td className="text-nowrap d-none d-lg-table-cell">{lead.datetime}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(lead._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="8" className="text-center">No leads found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
          <span>
            Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
          </span>
          <div>
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceLeads;
