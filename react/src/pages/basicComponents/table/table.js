import React from 'react';
import "./table.css";



function BasicTable({ data }) {
  var days = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי"
  ]
//   var exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function (event) {
//   // Button that triggered the modal
//   var button = event.relatedTarget
//   // Extract info from data-bs-* attributes
//   var recipient = button.getAttribute('data-bs-whatever')
//   // If necessary, you could initiate an AJAX request here
//   // and then do the updating in a callback.
//   //
//   // Update the modal's content.
//   var modalTitle = exampleModal.querySelector('.modal-title')
//   var modalBodyInput = exampleModal.querySelector('.modal-body input')

//   modalTitle.textContent = 'New message to ' + recipient
//   modalBodyInput.value = recipient
// })
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">שם מתנדב</th>
          <th scope="col">יום</th>
          <th scope="col">שעה</th>
          <th scope="col">יעד נסיעה</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.Name}</td>
            <td>{days[item.Day]}</td>
            <td>{item.Hour}</td>
            <td>{item.Hospital}</td>
            <td>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">שלח לי פידבק :)</button>
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


  // return (

  //   <table className="table">
  //     <thead>
  //       <tr>
  //         <th scope="col">#</th>
  //         <th scope="col">First</th>
  //         <th scope="col">Last</th>
  //         <th scope="col">Handle</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <th scope="row">1</th>
  //         <td>Mark</td>
  //         <td>Otto</td>
  //         <td>@mdo</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">2</th>
  //         <td>Jacob</td>
  //         <td>Thornton</td>
  //         <td>@fat</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">3</th>
  //         <td colspan="2">Larry the Bird</td>
  //         <td>@twitter</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // )
}
export default BasicTable;
