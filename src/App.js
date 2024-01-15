import React, { useState } from 'react';

function FullNameDisplay() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== '' || lastName.trim() !== '') {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>

      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>

      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      {fullName && <p>Full Name: {fullName}</p>}
    </form>
  );
}

export default FullNameDisplay;
