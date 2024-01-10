import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === "" || lastName === "") {
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Full Name Display</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      {fullName && <p>{`Full Name: ${fullName}`}</p>}
    </form>
  );
};

export default App;
