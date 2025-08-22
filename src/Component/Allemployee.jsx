import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Container, Card, Alert } from "react-bootstrap";

export default function Allemployee() {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const token=localStorage.getItem('token')
  // Fetch employees from backend
 // Fetch employees from backend
const fetchEmployees = async () => {
  try {
    const res = await axios.get("https://ruwa-back-2.onrender.com/api/users/employees", {
      method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });
    setEmployees(res.data.employees); // backend returns { success, count, employees }
  } catch (err) {
    setMessage("❌ Error fetching employees: " + err.message);
  }
};

// Delete employee
// const deleteEmployee = async (id) => {
//   if (!window.confirm("Are you sure you want to delete this employee?")) return;

//   try {
//     await axios.delete(`http://localhost:5000/api/users/employees/${id}`, {
//       withCredentials: true, // send cookies (auth)
//     });
//     setMessage("✅ Employee deleted successfully!");
//     setEmployees((prev) => prev.filter((emp) => emp._id !== id));
//   } catch (err) {
//     setMessage("❌ Error deleting employee: " + err.message);
//   }
// };


  // Delete employee
  const deleteEmployee = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/employees/${_id}`);
      setMessage("✅ Employee deleted successfully!");
      setEmployees(employees.filter((emp) => emp._id !== _id));
    } catch (err) {
      setMessage("❌ Error deleting employee: " + err.message);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0 rounded-4">
        <Card.Body>
          <h2 className="text-center text-primary fw-bold mb-4">Employee List</h2>

          {message && <Alert variant="info">{message}</Alert>}

          <Table striped bordered hover responsive className="text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr key={emp._id}>
                    <td>{index + 1}</td>
                    <td>{emp.name}</td>
                    <td>{emp._id}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteEmployee(emp._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
