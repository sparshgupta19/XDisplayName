import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName && lastName) {
      const fullNameResult = `${firstName} ${lastName}`;
      setFullName(fullNameResult);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="name-form">
        <h1>Display Full Name</h1>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} data-testid="first-name-input" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} data-testid="last-name-input" />
        </label>
        <br />
        <button type="submit" data-testid="submit-button">Submit</button>
      </form>

      {fullName && (
        <div data-testid="full-name-display">
          <h2 data-testid="full-name-heading">Full Name:</h2>
          <p data-testid="full-name-content">{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
