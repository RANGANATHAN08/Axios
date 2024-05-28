import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6642ed793c01a059ea20d240.mockapi.io/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  return (
   <div className="table-responsive">
        <table className="table table-info">
          <thead>
            <tr>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};

export default Home;