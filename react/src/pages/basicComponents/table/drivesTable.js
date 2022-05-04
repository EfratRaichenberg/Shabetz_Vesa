import React from 'react';
import "./table.css";



function DrivesTable({ drivesdata }) {
  var days = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי"
  ]

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">שם מתנדב</th>
          <th scope="col">יום</th>
          <th scope="col">שעת יציאה</th>
          <th scope="col">יעד נסיעה</th>
        </tr>
      </thead>
      <tbody>
        {drivesdata.map((item) => (
          <tr>
            <td>{item.Name}</td>
            <td>{days[item.Day]}</td>
            <td>{item.Hour}</td>
            <td>{item.Hospital}</td>
            <td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default  DrivesTable;
