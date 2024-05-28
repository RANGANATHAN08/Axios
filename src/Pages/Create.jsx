import React, { useState } from "react";
import Axios from "Axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Create = () => {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState({
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
  
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setCreateUser((prevUser) => ({
      ...prevUser,
      [name]: value, 
      address: {
        ...prevUser.address,
        [name]: value, 
        geo: {
          ...prevUser.address.geo,
          [name]: value, 
        },
      },
      company: {
        ...prevUser.company,
        [name]: value, 
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://6642ed793c01a059ea20d240.mockapi.io/api/users/",
        createUser
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
                  <label>User Id : </label>
                </th>
                <td className="text-left">
                  <input
                    type="text"
                    name="id"
                    value={createUser.id}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Name : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={createUser.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>User Name : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="username"
                    value={createUser.username}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Email : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={createUser.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Street : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="street"
                    value={createUser.address.street}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Suite : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="suite"
                    value={createUser.address.suite}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>City : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="city"
                    value={createUser.address.city}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Zipcode : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="zipcode"
                    value={createUser.address.zipcode}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Latitude : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="lat"
                    value={createUser.address.geo.lat}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Longitude : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="lng"
                    value={createUser.address.geo.lng}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <label>Phone : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="phone"
                    value={createUser.phone}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <label>Website : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="website"
                    value={createUser.website}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Company Name : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="companyName"
                    value={createUser.company.companyName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Catch Phrase : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="catchPhrase"
                    value={createUser.company.catchPhrase}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>BS : </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="bs"
                    value={createUser.company.bs}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <button className="btn btn-success" type="submit">
                    Create
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

export default Create;

<tr>
  <th></th>
  <td></td>
</tr>;