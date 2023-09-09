import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const [roll_no, setroll_no] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [duration, setduration] = useState("");
  const navigate = useNavigate();
  

  const params = useParams();

  console.log(params);

  const getdata = async () => {
    const result = await fetch(`/update/${params.id}`);
    const data = await result.json();
    const item = data[0];
    console.log(item);
    setname(item.name);
    setage(item.age);
    setaddress(item.address);
    setcourse(item.course);
    setduration(item.duration);
    setroll_no(item.roll_no);
    console.log(name);
  };

  useEffect(() => {
    getdata();
  }, []);

  function formsubmit(e) {
    e.preventDefault();

    fetch(`/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, course, roll_no, age, address, duration }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("record updated")
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

        <input className="inputbox" type="submit" value="update" />
      </form>
    </div>
  );
}
