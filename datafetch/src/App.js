import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((res) => console.log("posting dat", res))
      .catch((err) => console.log(err));
  };
  const arr = data.map((data, index) => {
    return (
      <tr>
        <td style={{ border: "1px solid black" }}>{data.id}</td>
        <td style={{ border: "1px solid black" }}>{data.title}</td>
        <td style={{ border: "1px solid black" }}>{data.body}</td>
      </tr>
    );
  });
  return (
    <>
      <form action="">
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr />
        <label htmlFor="">Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <hr />
        <button onClick={postData}>POST</button>
      </form>
      <table>
        <tr>
          <th style={{ border: "1px solid black" }}>ID</th>
          <th style={{ border: "1px solid black" }}>TITLE</th>
          <th style={{ border: "1px solid black" }}>BODY</th>
        </tr>
        {arr}
      </table>
    </>
  );
}

export default App;
