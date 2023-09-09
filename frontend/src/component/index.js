import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiArchiveBoxXMark, HiPencilSquare } from "react-icons/hi2";

function Index() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/get")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
    // console.log(data);
  }, []);
  console.log(data);

  const remove = async (id) => {
    let data = await fetch(`/delete/${id}`, {
      method: "Delete",
    });
    let result = await data.json();
    if (result) {
      alert("record deleted");
    }
    navigate("/");
  };

  return (
    <div className="widt">
      <h1>Data of the Students: </h1>
      <Table striped bordered hover responsive variant="dark" size="">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Course</td>
            <td>Roll_no</td>
            <td>Age</td>
            <td>Duration</td>
            <td>Address</td>
            <td>operation</td>
          </tr>
          {data.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.roll_no}</td>
              <td>{item.age}</td>
              <td>{item.duration}</td>
              <td>{item.address}</td>
              <td className="mr">
                <span className="mr">
                  <Link to={"/delete/" + item._id}>
                    <HiArchiveBoxXMark onClick={() => remove(item._id)} />
                  </Link>
                </span>
                <span className="mr">
                  <Link to={"/update/" + item._id}>
                    <HiPencilSquare />
                  </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Index;
