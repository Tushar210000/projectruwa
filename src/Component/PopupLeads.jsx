import React, { useEffect, useState } from 'react';

const PopupLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
   const token=localStorage.getItem('token')
  const fetchLeads = async () => {
    try {
      const response = await fetch('https://ruwa-back-2.onrender.com/api/popup/admin/popup/getAll', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await response.json();
      console.log("Fetched popup leads from backend:", data);

      const formatted = data.map((item, index) => ({
        _id: item._id ,
        name: item.name || '',
        email: item.email || '',
        phone: item.mobile || '',
        city: item.city || '',
        message: item.agree ? "✅ Agreed T&C" : "❌ Not Agreed",
        datetime: new Date(item.createdAt || Date.now()).toLocaleString(),
      }));

      const sorted = formatted.sort((a, b) => (a.datetime < b.datetime ? 1 : -1));
      setLeads(sorted);
    } catch (error) {
      console.error('Failed to fetch popup leads:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

 const handleDelete = async (_id) => {
  if (window.confirm('Are you sure you want to delete this lead?')) {
    try {
      const res = await fetch(`https://ruwa-back-2.onrender.com/api/popup/admin/delete/${_id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }

      });

      if (res.ok) {
        setLeads((prev) => prev.filter((lead) => lead._id !== _id));
        alert("Lead deleted successfully");
      } else {
        const err = await res.json();
        alert(err.message || "Failed to delete lead");
      }
    } catch (error) {
      console.error("Error deleting lead:", error);
      alert("Server error while deleting lead");
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
          <h5 className="mb-0">Popup Leads Table</h5>
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
                <th className="d-none d-md-table-cell">Agreement</th>
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
                  <td className="d-none d-md-table-cell">{lead.message}</td>
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

export default PopupLeads;
