import React, { useEffect, useState } from "react";
import Axios from "Axios";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(); 
  }, [deleteUser]);
  

  const fetchData = async () => {
    await Axios
      .get("https://6642ed793c01a059ea20d240.mockapi.io/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  
  const handleDelete = async (id) => {
    await Axios
      .delete(`https://6642ed793c01a059ea20d240.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteUser(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="table-responsive">
      <table className="table table-danger">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Catch Phrase</th>
            <th>BS</th>
            <th colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.address.geo.lat}</td>
                <td>{user.address.geo.lng}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.companyName}</td>
                <td>{user.company.catchPhrase}</td>
                <td>{user.company.bs}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-success m-5"
        onClick={() => navigate("/create")}
      >
        Create
      </button>
    </div>
  );
};

export default Users;