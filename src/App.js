import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      setFullName(""); // Clear full name if any field is empty
      return;
    }

    setFullName(`${firstName.trim()} ${lastName.trim()}`);
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
          required // Input is required
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
          required // Input is required
        />
      </div>
      <button type="submit" disabled={!firstName || !lastName}>
        Submit
      </button>
      {fullName && <p>{`Full Name: ${fullName}`}</p>}
    </form>
  );
};

export default App;
