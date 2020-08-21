import React from 'react';

const TabCategories = () => {
    return (
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                        aria-selected="true">Expense</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                        aria-selected="false">Income</a>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="list-group">

                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">home</span> House</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">fastfood</span> Food & Drink</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">directions_bus</span> Transportation</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">flight_takeoff</span> Travel</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">shopping_cart</span> Groceries</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">live_tv</span> Entertainment</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">sports_handball</span> Sports</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">medical_services</span> Medical</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">school</span> Education</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">shopping_bag</span> Shopping</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">offline_bolt</span> Utilities</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><span className="material-icons">loyalty</span> Donations</a>
                    </div>

                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <a href="#!" class="list-group-item list-group-item-action"><i class="fas fa-award fa-lg"></i> Award</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><i class="fas fa-gift fa-lg"></i> Gift</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><i class="fas fa-hand-holding-usd fa-lg"></i> Salary</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><i class="fas fa-percent fa-lg"></i> Interest Money</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><i class="fab fa-sellcast fa-lg"></i> Selling</a>
                        <a href="#!" class="list-group-item list-group-item-action"  data-dismiss="modal"><i class="fas fa-box-open fa-lg"></i> Other</a>
                </div>

            </div>
        </div>
    )
}

export default TabCategories;