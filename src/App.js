import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = fetch("https://reqres.in/api/users?page=2");
    response
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch(() => console.log("failed"));
  };

  console.log(users);

  const user = {
    name: "Allan",
    job: "leader-tech",
  };

  const setData = async () => {
    const response = fetch("https://reqres.in/api/users", {
      method: "POST",
      data: user,
    });
    response
      .then((response) => console.log("user saved"))
      .catch(() => console.log("failed"));
  };

  return (
    <div className="App">
      <button className="btn" onClick={setData}>
        Agregar usuario
      </button>
      <hr></hr>
      <h1>Lista de usuarios</h1>
      {users.map((user, id) => {
        return (
          <div className="container" key={id}>
            <img className="img-style" src={user.avatar} alt="avatar-user" />
            <span className="name">
              <span className="name-text">Nombre:</span> {user.first_name}
            </span>
            <span className="last-name">
              <span className="last-name-text">Apellido:</span> {user.last_name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
