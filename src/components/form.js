import React, { useState } from "react";

const form = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData("/submit", { answer: 42 }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" onChange={(e)=>setName(e.target.value)} value="John" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default form;
