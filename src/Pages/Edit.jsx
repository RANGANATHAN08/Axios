import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      companyName: "",
      catchPhrase: "",
      bs: "",
    },
  });
  useEffect(() => {
    fetchData();
  }, []);
  //Function to fetch the data of the user that is to be updated
  const fetchData = async () => {
    await axios
      .get(`https://6642ed793c01a059ea20d240.mockapi.io/api/users/${id}`)
      .then((res) => setEditUser(res.data))
      .catch((error) => console.log(error));
  };
  //Function to handle the changes made
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value, //For id, name, username, email, phone, website
      address: {
        ...prevUser.address,
        [name]: value, // For street, suite, city, zipcode
        geo: {
          ...prevUser.address.geo,
          [name]: value, // For lat, lng
        },
      },
      company: {
        ...prevUser.company,
        [name]: value, // For company name, catchPhrase, bs
      },
    }));
  };

  //Function to update the edited data in the api
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6642ed793c01a059ea20d240.mockapi.io/api/users/${id}`,
        editUser
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/users");
  };
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th>
                <label>User Id :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="id"
                  value={editUser.id}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Name :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editUser.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>User Name :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="username"
                  value={editUser.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  value={editUser.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Street :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="street"
                  value={editUser.address.street}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Suite :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="suite"
                  value={editUser.address.suite}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>City :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="city"
                  value={editUser.address.city}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Zipcode :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="zipcode"
                  value={editUser.address.zipcode}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Latitude :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="lat"
                  value={editUser.address.geo.lat}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Longitude :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="lng"
                  value={editUser.address.geo.lng}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Phone :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="phone"
                  value={editUser.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Website :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="website"
                  value={editUser.website}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Company Name :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="companyName"
                  value={editUser.company.companyName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Catch Phrase :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="catchPhrase"
                  value={editUser.company.catchPhrase}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>BS :</label>
              </th>
              <td>
                <input
                  type="text"
                  name="bs"
                  value={editUser.company.bs}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <button className="btn btn-success" type="submit">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </form>
    </div>
  );
};

export default Edit;