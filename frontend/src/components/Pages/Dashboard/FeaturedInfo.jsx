import React from 'react'

export default function FeaturedInfo() {
    return (
        <div>
                {/* <!-- =============== Left side End ================--> */}
        <div class="main-content-wrap sidenav-open d-flex flex-column">
            {/* <!-- ============ Body content start ============= --> */}
            <div class="main-content">
                <div class="breadcrumb">
                   
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </div>
                <div class="separator-breadcrumb border-top"></div>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        {/* <!-- CARD ICON--> */}
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card card-icon mb-4">
                                    <div class="card-body text-center"><i class="i-Home1"></i>
                                        <p class="text-muted mt-2 mb-2">Today&apos;s Properties</p>
                                        <p class="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card card-icon mb-4">
                                    <div class="card-body text-center"><i class="i-Add-User"></i>
                                        <p class="text-muted mt-2 mb-2">Total Users</p>
                                        <p class="text-primary text-24 line-height-1 m-0">21</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card card-icon mb-4">
                                    <div class="card-body text-center"><i class="i-Shop"></i>
                                        <p class="text-muted mt-2 mb-2">Total Reservations</p>
                                        <p class="text-primary text-24 line-height-1 m-0">4021</p>
                                    </div>
                                </div>
                            </div>
                          
                            
                          
                        </div>
                    </div>
                
                </div>
                {/* <!-- end of row--> */}
                <div class="row">
                    <div class="col-md-6">
                        <div class="card o-hidden mb-4">
                            <div class="card-header d-flex align-items-center">
                                <h3 class="w-50 float-left card-title m-0">Total Reservations</h3>
                                <div class="dropdown dropleft text-right w-50 float-right">
                                    <button class="btn bg-gray-100" id="dropdownMenuButton_table1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="nav-icon i-Gear-2"></i></button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton_table1"><a class="dropdown-item" href="#">Add new user</a><a class="dropdown-item" href="#">View All users</a><a class="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table dataTable-collapse text-center" id="user_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Smith</td>
                                                <td><img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                                <td>Smith@gmail.com</td>
                                                <td><span class="badge badge-success">Active</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jhon Doe</td>
                                                <td><img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                                <td>Jhon@gmail.com</td>
                                                <td><span class="badge badge-info">Pending</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Alex</td>
                                                <td><img class="rounded-circle m-0 avatar-sm-table" src="../../dist-assets/images/faces/1.jpg" alt="" /></td>
                                                <td>Otto@gmail.com</td>
                                                <td><span class="badge badge-warning">Not Active</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of col--> */}
                    <div class="col-md-6">
                        <div class="card o-hidden mb-4">
                            <div class="card-header d-flex align-items-center">
                                <h3 class="w-50 float-left card-title m-0">Total Properties</h3>
                                <div class="dropdown dropleft text-right w-50 float-right">
                                    <button class="btn bg-gray-100" id="dropdownMenuButton_table2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="nav-icon i-Gear-2"></i></button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton_table2"><a class="dropdown-item" href="#">Add new user</a><a class="dropdown-item" href="#">View All users</a><a class="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table dataTable-collapse text-center" id="sales_table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Host name</th>
                                                <th scope="col">Space Type</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Hs morad</td>
                                                <td>Kumar</td>
                                                <td></td>
                                                <td><span class="badge badge-success">Delivered</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Iphone</td>
                                                <td>23-10-2019</td>
                                                <td>$300</td>
                                                <td><span class="badge badge-info">Pending</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Watch</td>
                                                <td>12-10-2019</td>
                                                <td>$30</td>
                                                <td><span class="badge badge-warning">Not Delivered</span></td>
                                                <td><a class="text-success mr-2" href="#"><i class="nav-icon i-Pen-2 font-weight-bold"></i></a><a class="text-danger mr-2" href="#"><i class="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of col--> */}
                    {/* <!-- travel-different-countries--> */}
                    <div class="col-lg-6 col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Travel Different Countries</div>
                                <div class="ul-widget-app__poll-list mb-4">
                                    <h3 class="heading mr-2">2589</h3>
                                    <div class="d-flex"><span class="text-muted text-12">From Uganda</span><span class="t-font-boldest ml-auto">33%<i class="i-Turn-Up-2 text-14 text-success font-weight-700"></i></span></div>
                                    <div class="progress progress--height-2 mb-3">
                                            <div class="progress-bar bg-primary" role="progressbar" style={{ width: 25 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="ul-widget-app__poll-list mb-4">
                                    <h3 class="heading mr-2">4589</h3>
                                    <div class="d-flex"><span class="text-muted text-12">From U.S.A</span><span class="t-font-boldest ml-auto">63%<i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i></span></div>
                                    <div class="progress progress--height-2 mb-3">
                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: 55 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="ul-widget-app__poll-list mb-4">
                                    <h3 class="heading mr-2">7589</h3>
                                    <div class="d-flex"><span class="text-muted text-12">From Canada</span><span class="t-font-boldest ml-auto">73%<i class="i-Turn-Up-2 text-14 text-success font-weight-700"></i></span></div>
                                    <div class="progress progress--height-2 mb-3">
                                            <div class="progress-bar bg-dark" role="progressbar" style={{ width: 33 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="ul-widget-app__poll-list mb-4">
                                    <h3 class="heading mr-2">3589</h3>
                                    <div class="d-flex"><span class="text-muted">From France</span><span class="t-font-boldest ml-auto">13%<i class="i-Turn-Down-2 text-14 text-danger font-weight-700"></i></span></div>
                                    <div class="progress progress--height-2 mb-3">
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: 13 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- notification--> */}
                    <div class="col-lg-6 col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Notification</div>
                                <div class="ul-widget-app__browser-list">
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Bell1 text-white bg-warning rounded-circle p-2 mr-3"></i><span class="text-15">You have 9 pending Tasks</span><span class="text-mute">in a sec</span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Internet text-white green-500 rounded-circle p-2 mr-3"></i><span class="text-15">Traffic Overloaded</span><span class="text-mute">4 Hours ago</span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Shopping-Cart text-white cyan-500 rounded-circle p-2 mr-3"></i><span class="text-15">New Order Received</span><span class="text-mute">yesterday </span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Add-UserStar text-white teal-500 rounded-circle p-2 mr-3"></i><span class="text-15">New User </span><span class="text-mute">2 April </span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Bell text-white purple-500 rounded-circle p-2 mr-3"></i><span class="text-15">New Update </span><span class="text-mute">2 April </span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Shopping-Cart text-white bg-danger rounded-circle p-2 mr-3"></i><span class="text-15">New Order Received</span><span class="text-mute">yesterday </span></div>
                                    <div class="ul-widget-app__browser-list-1 mb-4"><i class="i-Internet text-white green-500 rounded-circle p-2 mr-3"></i><span class="text-15">Traffic Overloaded</span><span class="text-mute">4 Hours ago</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- best-sellers--> */}
                    <div class="col-xl-8 col-md-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="ul-widget__head">
                                    <div class="ul-widget__head-label">
                                        <h3 class="ul-widget__head-title">Best Sellers</h3>
                                    </div>
                                    <div class="ul-widget__head-toolbar">
                                        <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                                            <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#ul-widget5-tab1-content" role="tab" aria-selected="true">Latest</a></li>
                                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ul-widget5-tab2-content" role="tab" aria-selected="false">Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ul-widget__body">
                                    <div class="tab-content">
                                        <div class="tab-pane active show" id="ul-widget5-tab1-content">
                                            <div class="ul-widget5">
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/iphone-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">19,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">1046</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/speaker-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">29,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">4500</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/watch-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">23,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">2046</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="ul-widget5-tab2-content">
                                            <div class="ul-widget5">
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/speaker-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">19,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">1046</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/iphone-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">29,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">4500</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                                <div class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img src="../../dist-assets/images/products/watch-1.jpg" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">Great Logo Designn</a>
                                                            <p class="ul-widget5__desc">UI lib admin themes.</p>
                                                            <div class="ul-widget5__info"><span>Author:</span><span class="text-primary">Jon Snow</span><span>Released:</span><span class="text-primary">23.08.17</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">23,200</span><span class="ul-widget5__sales text-mute">sales</span></div>
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">2046</span><span class="ul-widget5__sales text-mute">votes</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- latest-log--> */}
                    <div class="col-lg-6 col-xl-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="ul-widget__head">
                                    <div class="ul-widget__head-label">
                                        <h3 class="ul-widget__head-title">Latest Log</h3>
                                    </div>
                                    <div class="ul-widget__head-toolbar">
                                        <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                                            <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#__g-widget-s6-tab1-content" role="tab" aria-selected="true">Today</a></li>
                                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#__g-widget-s6-tab2-content" role="tab" aria-selected="false">Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ul-widget__body">
                                    <div class="tab-content">
                                        <div class="tab-pane active show" id="__g-widget-s6-tab1-content">
                                            <div class="ul-widget-s6__items">
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-primary ul-widget6__dot"></p>
                                                    </span><span class="ul-widget-s6__text">12 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-success ul-widget6__dot"></p>
                                                    </span>
                                                    <p class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-primary m-2">Primary</span></p><span class="ul-widget-s6__time">14 mins</span>
                                                </div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-warning ul-widget6__dot"></p>
                                                    </span><span class="ul-widget-s6__text">System error -<a class="typo_link text-danger" href="#">Danger state text</a></span><span class="ul-widget-s6__time">2 hrs </span></div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-danger ul-widget6__dot"></p>
                                                    </span><span class="ul-widget-s6__text">12 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-info ul-widget6__dot"></p>
                                                    </span>
                                                    <p class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-success m-2">Primary</span></p><span class="ul-widget-s6__time">14 mins</span>
                                                </div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-dark ul-widget6__dot"></p>
                                                    </span><span class="ul-widget-s6__text">System error -<a class="typo_link text-danger" href="#">Danger state text</a></span><span class="ul-widget-s6__time">2 hrs </span></div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-primary ul-widget6__dot"></p>
                                                    </span><span class="ul-widget-s6__text">12 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                        <p class="badge-dot-success ul-widget6__dot"></p>
                                                    </span>
                                                    <p class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-danger m-2">Primary</span></p><span class="ul-widget-s6__time">14 mins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="__g-widget-s6-tab2-content">
                                            <div class="ul-widget2">
                                                <div class="ul-widget-s6__items">
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-danger ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">44 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-warning ul-widget6__dot"></p>
                                                        </span>
                                                        <p class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-primary m-2">Primary</span></p><span class="ul-widget-s6__time">14 mins</span>
                                                    </div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-primary ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">System error -<a class="typo_link text-danger" href="#">Danger state text</a></span><span class="ul-widget-s6__time">2 hrs </span></div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-danger ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">12 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-info ul-widget6__dot"></p>
                                                        </span>
                                                        <p class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-success m-2">Primary</span></p><span class="ul-widget-s6__time">14 mins</span>
                                                    </div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-dark ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">System error -<a class="typo_link text-danger" href="#">Danger state text</a></span><span class="ul-widget-s6__time">2 hrs </span></div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-primary ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">12 new users registered</span><span class="ul-widget-s6__time">Just Now</span></div>
                                                    <div class="ul-widget-s6__item"><span class="ul-widget-s6__badge">
                                                            <p class="badge-dot-success ul-widget6__dot"></p>
                                                        </span><span class="ul-widget-s6__text">System shutdown<span class="badge badge-pill badge-danger m-2">Primary</span></span><span class="ul-widget-s6__time">14 mins</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end of row--> */}
                {/* <!-- end of main-content --> */}
                </div>
                {/* <!-- Footer Start --> */}
            <div class="flex-grow-1"></div>
      
            {/* <!-- fotter end --> */}
        </div>
 

        </div>
    )
}
