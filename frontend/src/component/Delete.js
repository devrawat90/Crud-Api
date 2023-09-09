import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Delete() {
  const [roll, setroll] = useState();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [course, setcourse] = useState("");
  const [address, setaddress] = useState("");
  const [duration, setduration] = useState("");
  const [mode, setmode] = useState("");

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
        <Show
          roll={roll}
          name={name}
          course={course}
          age={age}
          address={address}
          duration={duration}
        />
      ) : (
        <h1>no record found</h1>
      )}
    </div>
  );
}

function Show(props) {
  const navigate = useNavigate();

  const deletedata = async () => {
    console.log("delete");

    let data = await fetch(`/delete/data/${props.roll}`, {
      method: "Delete",
    });

    alert("item deleted");
    navigate("/")
  };
  return (
    <div className="wid">
      <Table variant="success">
        <tbody>
          <tr>
            <th>Records related to Roll</th>
            <td>{props.roll}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Course</th>
            <td>{props.course}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>{props.duration}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{props.address}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" onClick={deletedata}>
        confirm to delete
      </Button>
    </div>
  );
}
