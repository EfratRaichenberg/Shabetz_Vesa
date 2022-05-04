import React from 'react';
import "./table.css";



function DriveForToTable({ data }) {
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
          <th scope="col">שם נוסע</th>
          <th scope="col">יום</th>
          <th scope="col">שעת יציאה</th>
          <th scope="col">תחנת מוצא</th>
          <th scope="col">יעד נסיעה</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>יאיר קצבורג</td>
            <td>אהרון כהן</td>
            <td>שני</td>
            <td>09:30</td>
            <td>טרומפלדור 27</td>
            <td>שניידר</td>
          </tr>
          <tr>
            <td>יאיר קצבורג</td>
            <td>יהודה כץ</td>
            <td>שני</td>
            <td>09:30</td>
            <td>בילו 6</td>
            <td>בלינסון</td>
          </tr>
          <tr>
            <td>ברוך לוין</td>
            <td>מיכאל לוי</td>
            <td>שני</td>
            <td>10:30</td>
            <td>ישעיהו המשורר 1</td>
            <td>בלינסון</td>
          </tr>
          <tr>
            <td>חגי אשר</td>
            <td>יעקב כהנמן</td>
            <td>שני</td>
            <td>11:00</td>
            <td>הפלמ''ח 1</td>
            <td>מעייני הישועה</td>
          </tr>
          <tr>
            <td>זאבי פרידמן</td>
            <td>איתמר בנחמו</td>
            <td>שני</td>
            <td>12:15</td>
            <td>הקישון 3</td>
            <td>מעייני הישועה</td>
          </tr>
          <tr>
            <td>אוריאל פוקס</td>
            <td>משה ליכטיג</td>
            <td>שני</td>
            <td>14:15</td>
            <td>פרדו 3</td>
            <td>שניידר</td>
          </tr>
          <tr>
            <td>מיכאל וייס</td>
            <td>יונתן לוי</td>
            <td>שני</td>
            <td>14:15</td>
            <td>נועם אלימלך 13</td>
            <td>תל השומר</td>
          </tr>
      </tbody>
    </table>
  )
}
export default  DriveForToTable;
