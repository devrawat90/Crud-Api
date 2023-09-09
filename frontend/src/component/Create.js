import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const [roll_no, setroll_no] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [duration, setduration] = useState("");
  const navigate = useNavigate()





  function formsubmit(e) {

    e.preventDefault();


    fetch("/create", {
      method: "post",
      body: JSON.stringify({ name, course, roll_no, age, address, duration }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("new record created")
    navigate('/')
  }
  return (
    <div>
      <h3 className="inputbox App">Create New Data:</h3>

      <form className="App" onSubmit={formsubmit}>
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
          value={roll_no}
          placeholder="Enter Roll "
          onChange={(e) => setroll_no(e.target.value)}
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
  );
}
