import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z]*$/.test(firstName) || !/^[a-zA-Z]*$/.test(lastName)) {
      // If input contains anything other than letters
      setFullName(""); // Clear full name if invalid input
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
