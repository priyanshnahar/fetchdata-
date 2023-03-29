import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log(response.data);
      // Do something with the response, such as update the UI or redirect the user
    } catch (error) {
      console.error(error);
    }
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
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={formData.body} onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
