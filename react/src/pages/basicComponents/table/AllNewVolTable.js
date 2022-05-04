import React from 'react';
import "./table.css";
import axios from 'axios';



function AllNewVolTable({ newVolData }) {
  var status = [
    "לא",
    "כן"
  ]
  function handleClickApprove(user_id) {
    //event.preventDefault();
    axios.put(`http://localhost:3001/approvedVolunteer/${user_id}`)
      .then(response => {
        if (response.status === 200) {
          alert("אושר בהצלחה!");
        }
      })
      .catch(err => console.warn(err));
  }; 
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">שם </th>
          <th scope="col">טלפון</th>
          <th scope="col">מייל</th>
          <th scope="col">עיר</th>
          <th scope="col">שכונה</th>
          <th scope="col">רחוב</th>
          <th scope="col">מקומות ברכב</th>
          <th scope="col">מעלון ?</th>
          <th scope="col"> מזדמן?</th>

        </tr>
      </thead>
      <tbody>
        {newVolData.map((item) => (
          <tr>
            <td>{item.Name}</td>
            <td>{item.Phone_number}</td>
            <td>{item.Mail}</td>
            <td>{item.City}</td>
            <td>{item.Neighborhood}</td>
            <td>{item.Street}</td>
            <td>{item.Num_places}</td>
            <td>{status[item.Car_leaflet]}</td>
            <td>{status[item.Casual_status]}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">אשר</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}
export default AllNewVolTable;
