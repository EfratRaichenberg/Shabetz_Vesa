import React from 'react';
import "./table.css";



function AllPassTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">שם נוסע</th>
          <th scope="col">טלפון</th>
          <th scope="col">מייל</th>
          <th scope="col">עיר</th>
          <th scope="col">שכונה</th>
          <th scope="col">רחוב</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.Name}</td>
            <td>{item.Phone_number}</td>
            <td>{item.Mail}</td>
            <td>{item.City}</td>
            <td>{item.Neighborhood}</td>
            <td>{item.Street}</td>
            <td>
              {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">שלח לי פידבק :)</button> */}
              {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                          <input type="text" class="form-control" id="recipient-name" />
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="col-form-label">Message:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default AllPassTable;
