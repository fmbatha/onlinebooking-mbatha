import React from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link } from 'react-router-dom' 

const Settings = () => {
  return (
    <div>
   <div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='content-wrapper'>
                    <section class="content">
      <div class="row">
        <div class="col-md-3 settings_bar_gap">
          <div class="box box-info box_info">
    <div class="panel-body">
    <h4 class="all_settings">Manage Settings</h4>
        <ul class="nav navbar-pills nav-tabs nav-stacked no-margin" role="tablist">

                      <li class="active">
                <a href="http://localhost:8000/admin/settings" data-group="profile">General</a>
            </li>
                    
                      <li class="">
                <a href="http://localhost:8000/admin/settings/preferences" data-group="profile">Preferences</a>
            </li>
                      
              <li class="">
                  <a href="http://localhost:8000/admin/settings/sms" data-group="sms">SMS Settings</a>
              </li>
          
                      <li class="">
                <a href="http://localhost:8000/admin/settings/banners" data-group="profile">Banners</a>
            </li>
          
                      <li class="">
                <a href="http://localhost:8000/admin/settings/starting_cities" data-group="home_cities">Starting Cities</a>
            </li>
                    
                      <li class="">
                <a href="http://localhost:8000/admin/settings/property_type" data-group="property_type">Property Type</a>
            </li>
          
                      <li class="">
              <a href="http://localhost:8000/admin/settings/space_type" data-group="space_type">Space Type</a>
            </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/bed_type" data-group="bed_type">Bed Type</a>
              </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/currency" data-group="currency">Currency</a>
              </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/country">Country</a>
              </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/amenities_type">Amenities Type</a>
              </li>
          
                      <li class="">
              <a href="http://localhost:8000/admin/settings/email">Email Settings</a>
            </li>
          
                       <li class="">
              <a href="http://localhost:8000/admin/settings/fees">Fees</a>
            </li>
          
                      <li class="">
              <a href="http://localhost:8000/admin/settings/language" data-group="language">Language</a>
            </li>
          
         

                      <li class="">
              <a href="http://localhost:8000/admin/settings/backup" data-group="profile">Database Beckups</a>
            </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/metas" data-group="metas">Metas</a>
              </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/api_informations" data-group="api_informations">Api Credentials</a>
              </li>
          
          
              <li class="">
                  <a href="http://localhost:8000/admin/settings/payment_methods" data-group="payment_methods">Payment Methods</a>
              </li>
          
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/social_links" data-group="social_links">Social Links</a>
              </li>
                    
                      <li class="">
                <a href="http://localhost:8000/admin/settings/privacy_policy" data-group="property_type">Privacy Policy</a>
            </li>
                    
                        <li class="">
                  <a href="http://localhost:8000/admin/settings/roles"><span>Roles &amp; Permissions</span></a>
              </li>
          
                    <li class="">
            <a href="http://localhost:8000/admin/settings/backup" data-group="profile">Database Beckups</a>
          </li>
          
        </ul>
    </div>
</div>        </div>
        {/* <!-- right column --> */}
        <div class="col-md-9">
          {/* <!-- Horizontal Form --> */}
          <div class="box box-info">
            <div class="error_email_settings" style={{display: 'none'}}>  
                <div class="alert alert-warning fade in alert-dismissable">
                  <strong>Warning!</strong> Whoops there was an error. Please verify your below information. <a class="close" href="#" data-dismiss="alert" aria-label="close" title="close">×</a>
                </div>
            </div>
            <div class="box-header with-border">
              <h3 class="box-title">General Setting Form</h3><span class="email_status" style={{display: 'none'}}>(<span style={{color: 'green'}}><i class="fa fa-check" aria-hidden="true"></i>Verified</span>)</span>
            </div>
            {/* <!-- /.box-header -->
            <!-- form start --> */}
            <form id="general_form" method="post" action="http://localhost:8000/admin/settings" class="form-horizontal " enctype="multipart/form-data" novalidate="novalidate">
              <input type="hidden" name="_token" value="SfAplavsWLoHXXQ5ZYysNwwFWLe0NEQbGPB7EeSj" />
              <div class="box-body">
                                  <div class="form-group name">
                                <label for="inputEmail3" class="col-sm-3 control-label">Name <span style={{color: 'red'}}>*</span></label>
                                <div class="col-sm-6">
                                <input type="text" name="name" class="form-control " id="name" value="Corporate Home US" placeholder="Name" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="col-sm-3">
                                <small></small>
                            </div>
                            </div>              
                         <div class="form-group">
                            <label for="inputEmail3" class="col-sm-3 control-label">Logo</label>
                            <div class="col-sm-6">
                                <input type="file" name="photos[logo]" class="form-control " id="photos[logo]" value="" placeholder="Logo" />
                                <span class="text-danger"></span>
                                <br/><img style={{maxWidth:150, paddingTop:0}} src="http://localhost:8000/public/front/images/logos/1634158327_logo.png" />
                                
                                <span name="mySpan" class="remove_logo_preview" id="mySpan"></span>
                                
                                <input id="hidden_company_logo" name="hidden_company_logo" data-rel="1634158327_logo.png" type="hidden" />
    
    
    
    

    
    
                                </div>
                                <div class="col-sm-3">
                                    <small></small>
                                </div>
                                </div>         
                                  <div class="form-group">
                                <label for="inputEmail3" class="col-sm-3 control-label">Favicon</label>
                                <div class="col-sm-6">
                                    <input type="file" name="photos[favicon]" class="form-control validate_field" id="photos[favicon]" value="" placeholder="Favicon" />
                                    <span class="text-danger"></span>
                                    <br /><img style={{maxWidth:150, paddingTop:0}} src="http://localhost:8000/public/front/images/logos/1634158327_favicon.ico" />
                                    
                                    
                                    
                                    
                                    
                                    <span name="mySpan2" class="remove_favicon_preview" id="mySpan2"></span>
                                    
                                    <input id="hidden_company_favicon" name="hidden_company_favicon" data-rel="1634158327_favicon.ico" type="hidden"/>

    
    
                                    </div>
                                    <div class="col-sm-3">
                                        <small></small>
                                    </div>
                                    </div>                   
                                    <div class="form-group email">
                                        <label for="inputEmail3" class="col-sm-3 control-label">Email <span style={{color: 'red'}}>*</span></label>
                                        <div class="col-sm-6">
                                        <input type="text" name="email" class="form-control validate_field" id="email" value="email@yourdomain.com" placeholder="Email" />
                                        
                                        <span class="text-danger"></span>
                                    </div>
                                    <div class="col-sm-3">
                                        <small></small>
                                    </div>
                                    </div>                        
                                              <div class="form-group phone">
                                        <label for="inputEmail3" class="col-sm-3 control-label">Phone <span style={{color: 'red'}}>*</span></label>
                                        <div class="col-sm-6">
                                        <input type="text" name="phone" class="form-control validate_field" id="phone" value="(305) 555-4446" placeholder="Phone" />
                                        <span class="text-danger"></span>
                                    </div>
                                    <div class="col-sm-3">
                                        <small></small>
                                    </div>
                                    </div>             
                                        <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-3 control-label">Address</label>
                                        <div class="col-sm-6">
                                        <textarea name="address" placeholder="Address" rows="3" class="form-control validate_field">3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302</textarea>
                                        <span class="text-danger"></span>
                                    </div>
                                    <div class="col-sm-3">
                                        <small></small>
                                    </div>
                                    </div>      
                            <div class="form-group">
                            <label for="inputEmail3" class="col-sm-3 control-label">About Company</label>
                            <div class="col-sm-6">
                            <textarea name="about_company" placeholder="About Company" rows="3" class="form-control validate_field">&lt;p&gt;CORPORATEHOMEUS is committed to delivering a high level of expertise, customer service, and attention to detail to the market of accommodation booking.&lt;/p&gt;

                        &lt;p&gt;We built the most featured WordPress theme for such a project. Test and convince yourself.&lt;/p&gt;</textarea>
                            <span class="text-danger"></span>
                        </div>
                        <div class="col-sm-3">
                            <small></small>
                        </div>
                        </div>                                
                          <div class="form-group">
                            <label for="inputEmail3" class="col-sm-3 control-label">Head Code</label>
                            <div class="col-sm-6">
                            <textarea name="head_code" placeholder="Head Code" rows="3" class="form-control validate_field"></textarea>
                            <span class="text-danger"></span>
                        </div>
                        <div class="col-sm-3">
                            <small></small>
                        </div>
                        </div>                           
                            <div class="form-group default_currency">
                        <label for="inputEmail3" class="col-sm-3 control-label">Default Currency</label>
                        <div class="col-sm-6">
                            <select class="form-control validate_field" id="default_currency" name="default_currency">
                    <option value="1" selected="">US Dollar</option>
                    <option value="2">Pound Sterling</option>
                    <option value="3">Europe</option>
                    <option value="4">Australian Dollar</option>
                    <option value="5">Singapore</option>
                    <option value="6">Swedish Krona</option>
                    <option value="7">Danish Krone</option>
                    <option value="8">Mexican Peso</option>
                    <option value="9">Brazilian Real</option>
                    <option value="10">Malaysian Ringgit</option>
                    <option value="11">Philippine Peso</option>
                    <option value="12">Swiss Franc</option>
                    <option value="13">India</option>
                    <option value="14">Argentine Peso</option>
                    <option value="15">Canadian Dollar</option>
                    <option value="16">Chinese Yuan</option>
                    <option value="17">Czech Republic Koruna</option>
                    <option value="18">Hong Kong Dollar</option>
                    <option value="19">Hungarian Forint</option>
                    <option value="20">Indonesian Rupiah</option>
                    <option value="21">Israeli New Sheqel</option>
                    <option value="22">Japanese Yen</option>
                    <option value="23">South Korean Won</option>
                    <option value="24">Norwegian Krone</option>
                    <option value="25">New Zealand Dollar</option>
                    <option value="26">Polish Zloty</option>
                    <option value="27">Russian Ruble</option>
                    <option value="28">Thai Baht</option>
                    <option value="29">Turkish Lira</option>
                    <option value="30">New Taiwan Dollar</option>
                    <option value="31">Vietnamese Dong</option>
                    <option value="32">South African Rand</option>
            </select>
                    <span class="text-danger"></span>
                </div>
                <div class="col-sm-3">
                    <small></small>
                </div>
                </div>             
                     <div class="form-group default_language">
                <label for="inputEmail3" class="col-sm-3 control-label">Default Language</label>
                <div class="col-sm-6">
                    <select class="form-control validate_field" id="default_language" name="default_language">
                    <option value="1" selected="">English</option>
                    <option value="2">عربى</option>
                    <option value="3">中文 (繁體)</option>
                    <option value="4">Français</option>
                    <option value="6">Русский</option>
                    <option value="7">Español</option>
                    <option value="8">Türkçe</option>
            </select>
                        <span class="text-danger"></span>
                    </div>
                    <div class="col-sm-3">
                        <small></small>
                    </div>
                    </div>                  
                 <div class="text-center" id="error-message"></div>
              </div>
              {/* <!-- /.box-body --> */}
              <div class="box-footer">
                                <a class="btn btn-default" href="/settings">Cancel</a>
                             <button type="submit" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-info pull-right">Submit</button>
              </div>
              {/* <!-- /.box-footer --> */}
            </form>
          </div>
          {/* <!-- /.box --> */}

          {/* <!-- /.box --> */}
        </div>
        {/* <!--/.col (right) --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
                        
                        </div>
              </div>
              </div>
              </div>
  )
}

export default Settings