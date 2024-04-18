import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { FiUser } from "react-icons/fi"; // Import the FiUser icon from react-icons/fi

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <FiUser size={120} color="#007bff" className="mr-4" style={{ marginRight: '20px' }} /> {/* FiUser icon */}
                  <div>
                    <h3 className="mb-1">Admin Dashboard</h3>
                    <p className="text-muted">Welcome back, {auth?.user?.name}!</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 font-weight-bold">Name:</div>
                  <div className="col-sm-9"><span className="underline">{auth?.user?.name}</span></div> {/* Added underline class */}
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 font-weight-bold">Email:</div>
                  <div className="col-sm-9"><span className="underline">{auth?.user?.email}</span></div> {/* Added underline class */}
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 font-weight-bold">Contact:</div>
                  <div className="col-sm-9"><span className="underline">{auth?.user?.phone}</span></div> {/* Added underline class */}
                </div>
                {/* Add more details here as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
