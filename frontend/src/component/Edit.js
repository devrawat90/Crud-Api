import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Edit() {
  const [roll, setroll] = useState();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [course, setcourse] = useState("");
  const [address, setaddress] = useState("");
  const [duration, setduration] = useState("");
  const [mode, setmode] = useState("");
  const navigate = useNavigate();

  const getdata = async (e) => {
    e.preventDefault();
    console.log(roll);
    const data = await fetch(`/delete/${roll}`);
    const result = await data.json();
    console.log(result);
    const item = result[0];
    console.log(item);
    setmode(item);

    setname(item.name);
    setage(item.age);
    setaddress(item.address);
    setcourse(item.course);
    setduration(item.duration);
  };
  const formupdate = async (e) => {
    e.preventDefault();
    console.log("clicked updated");
    const data = await fetch(`/update/data/${roll}`, {
      method: "put",
      body: JSON.stringify({ name, course, age, address, duration }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    console.log(result);
    if (result.modifiedCount === 1) {
      alert("Record Updated");
    }
    navigate("/");
  };

  return (
    <div>
      <form className="App" onSubmit={getdata}>
        <input
          className="inputbox"
          type="text"
          placeholder="enter Roll numbere here.."
          onChange={(e) => setroll(e.target.value)}
        />
        <input className="inputbox" type="submit" value="Find Reacord" />
      </form>
      {mode ? (
        <div>
          <h3 className="inputbox App">Update Data:</h3>

          <form className="App" onSubmit={formupdate}>
            <input
              className="inputbox"
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              value={course}
              placeholder=" Enter Course name"
              onChange={(e) => setcourse(e.target.value)}
            />

            <input
              className="inputbox"
              type="text"
              value={age}
              placeholder="Enter Age "
              onChange={(e) => setage(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              value={address}
              placeholder="Enter Address"
              onChange={(e) => setaddress(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              value={duration}
              placeholder="course duration"
              onChange={(e) => setduration(e.target.value)}
            />

            <input className="inputbox" type="submit" value="submit" />
          </form>
        </div>
      ) : (
        <h1>no record found</h1>
      )}
    </div>
  );
}
