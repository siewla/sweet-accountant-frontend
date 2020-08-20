import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const Accounts = (props) => {
    return (
        <React.Fragment>
            <div className="accounts z-depth-1 card">
                <p>Credit: 0</p>
                <p>Debit: 0</p>
                <p>Balance: 0</p>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            Add an account
        </Tooltip>
                    }
                >
                    <Button variant="primary"><i class="fas fa-plus-circle fa-lg"></i></Button>
                </OverlayTrigger>
            </div>
            <div className="table-accounts z-depth-1 card">
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Balance</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
        </React.Fragment>
    )
}

export default Accounts;
