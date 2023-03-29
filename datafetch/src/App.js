import axios from "axios";

function App() {
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://example.com/api/resource', {
        data: {
          id: 1,
          name: 'John Doe'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
