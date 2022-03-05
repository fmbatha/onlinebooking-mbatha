import React from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link } from 'react-router-dom' 

const Blogdescription =()=> {


  return (
    <div>
        <div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='content-wrapper'>
          <section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h4>
										Blog Description
										<small>Control panel</small>
									</h4>

								</div>
								<div class="col-5"></div>

								<div class="col-2">
									<div class="float-lg-right">
									<ol class='breadcrumb'>
										<li>
											<Link to='/dashboard'>
												<i class='fa fa-dashboard'></i> Home
											</Link>
										</li>
							        </ol>

									</div>
									
								

								</div>

							</div>
							
						
						</section>
            <div class="pad margin no-print">
                   <div class="callout callout-info" style={{marginBottom: "0"}}>
                        <h4><i class="fa fa-info"></i> Note:</h4>
                        This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
                      </div>
                    </div>
                    <section class="invoice">
      {/* <!-- title row --> */}
      <div class="row">
        <div class="col-xs-12">
            <Link to="http://localhost:8000/admin/edit-blog/1 " class="btn btn-primary pull-right"><i class="fa fa-pencil"></i> Edit</Link>
        </div>
        <div class="col-xs-12">
          <h2 class="page-header">
            <i class="fa fa-globe"></i> Local History in a Glance
            <small class="pull-right"> 
            Thursday 1st of January 1970 12:00:00 AM</small>
          </h2>
        </div>
        {/* <!-- /.col --> */}
      </div>
      {/* <!-- info row --> */}
      <div class="row invoice-info">
     <img src="http://localhost:8000/public/images/blog_images/1/1586165958.jpg" width="100%" style={{width:400, height:300, objectFfit:'cover'}} class="img-responsive img-thumbnail" align="left" hspace="20" />
        
                  
        <br /><br />
          <p>It’s no surprise that location is everything for guests who book an WP Rentals. But what was surprising for us was the conundrum this topic created in our recent post What guests really want. On one hand there’s travelers: they want to know everything about where they’re going right away—it helps them decide where to book and plan their trip. On the other hand there’s hosts, many of whom naturally want to maintain privacy, especially before a booking is confirmed, and others that want to share every last detail right away.</p>

<p>Is there a way to convey the location details a guest wants without leaving the host feeling over-exposed? We think so. Let this checklist be your guide and everybody wins.</p>

<p><strong>Tips</strong></p>

<p>Provide recommendations early to allow guests to plan their trip.</p>

<p>Filling in your Guidebook on WP Rentals&nbsp;is a great way to compile your recommendations, and it makes it easy to grow and repurpose for future guests.</p>

<p>Personality is appreciated—recommend things you actually do yourself and places you like to go. A concierge might provide recommendations based on what they think an average tourist might like, but your tips can be more personalized.</p> 
       
        {/* <!-- /.col --> */}
      </div>
      
      {/* <!-- /.row --> */}
      
      <div class="row">
          <div class="col-sm-12">
             <h3> Comments</h3>
          </div>
           
                                  <div class="col-sm-12">
              <div class="col-sm-6">
                  <b>Name : Dharma </b><br/>
                   Email : dharma@gmail.com <br />
                    Website : a<br />
                   <b>Comment : if any problem comes up costumer service is ALWAYS there. Literally the guys are trying their best! My profile has over 160 reviews and all my listings are book 3 months ahead!</b> <br />
                </div>
                <div class="col-sm-6">
                    <span class="label label-success"> Published 
                </span></div>

                </div>
               <div class="col-sm-12">
                   <hr />
               </div>
                            <div class="col-sm-12">
              <div class="col-sm-6">
                  <b>Name : Dharma </b><br/>
                   Email : dharmachand2013@gmail.com <br/>
                    Website : <br />
                   <b>Comment : Nice article .....</b> <br />
                </div>
                <div class="col-sm-6">
                                            <span class="label label-success"> Published 
                                    </span></div>
                 
                </div>
               <div class="col-sm-12">
                   <hr />
               </div>
                                
                          
                        </div>

                      {/* <!-- Table row --> */}
                      <div class="row">
                        <div class="col-xs-12 table-responsive">
                        <Link to="http://localhost:8000/admin/blog_list" class="btn btn-success pull-right"><i class="fa fa-arrow-left"></i> Back
                          </Link>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                      {/* <!-- /.row --> */}

                    
                    </section>

                        </div>
                    </div>
                    </div>
        
        </div>
  )
}

export default Blogdescription