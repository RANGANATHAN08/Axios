import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  //State to set user data when the component gets loaded
  const [users, setUsers] = useState([]);
  //State to manage user data when a data is deleted
  const [deleteUser, setDeleteUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(); //fetch data function will be called whenever deleteUser array gets updated
  }, [deleteUser]);
  
  //function to fetch data from the api
  const fetchData = async () => {
    await axios
      .get("https://6642ed793c01a059ea20d240.mockapi.io/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
//Function to set the id of the user in the state to manage id, once the edit button is clicked
//navigate to edit page
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  //Function to handle to delete
  const handleDelete = async (id) => {
    await axios
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
                    className="btn btn-warning"
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