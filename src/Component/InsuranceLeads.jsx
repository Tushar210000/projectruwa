import React, { useEffect, useState } from "react";

const InsuranceApplications = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const appsPerPage = 5;

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token"); // 🔑 Adjust if you store differently
      const res = await fetch("https://last-2-ltig.onrender.com/api/services/apply-insurance/admin/all", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        // credentials: "include",
      });
      const data = await res.json();
      console.log("Fetched insurance applications:", data);

      const formatted = data.map((item, index) => ({
        id: item._id,
        name: item.fullName || "",
        email: item.email || "",
        type: item.insuranceType || "",
        appliedBy: item.appliedBy?.name || "N/A",
        role: item.appliedBy?.role || "N/A",
        status: item.status || "PENDING",
        date: new Date(item.createdAt || Date.now()).toLocaleString(),
      }));

      setApplications(formatted);
    } catch (err) {
      console.error("Failed to fetch insurance applications:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`https://last-2-ltig.onrender.com/api/services/apply-insurance/admin/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      fetchApplications();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filtered = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.appliedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * appsPerPage;
  const indexOfFirst = indexOfLast - appsPerPage;
  const currentApps = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / appsPerPage);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h5 className="mb-0">Insurance Applications</h5>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name, email, insurance type, or appliedBy"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-responsive" style={{ overflowX: "auto" }}>
          <table
            className="table table-bordered table-striped"
            style={{ minWidth: "900px" }}
          >
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Insurance Type</th>
                <th>Applied By</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentApps.length > 0 ? (
                currentApps.map((app, i) => (
                  <tr key={app.id}>
                    <td className="text-center">{indexOfFirst + i + 1}</td>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.type}</td>
                    <td>{app.appliedBy}</td>
                    <td>{app.role}</td>
                    <td>
                      <span
                        className={`badge ${
                          app.status === "APPROVED"
                            ? "bg-success"
                            : app.status === "REJECTED"
                            ? "bg-danger"
                            : app.status === "WITHDRAWN"
                            ? "bg-warning"
                            : "bg-secondary"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td>{app.date}</td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="REJECTED">REJECTED</option>
                        <option value="WITHDRAWN">WITHDRAWN</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
          <span>
            Showing {indexOfFirst + 1}–
            {Math.min(indexOfLast, filtered.length)} of {filtered.length}
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
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

export default InsuranceApplications;
