import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Do something with the form data, such as send it to a server or update the UI
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
