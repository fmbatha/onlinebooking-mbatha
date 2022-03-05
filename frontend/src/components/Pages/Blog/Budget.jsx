import React from 'react';
import {Link} from 'react-router-dom';

export default function Budget() {
    return (
        <div>
             <div className="mobilewrapper">
        <div className="snap-drawers">
          {/* <!-- Left Sidebar--> */}
          <div className="snap-drawer snap-drawer-left">
            <div className="mobilemenu-close">
              <i className="fas fa-times"></i>
            </div>
            <ul id="menu-primary-menu" className="mobilex-menu">
              <li id="menu-item-1854" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1854">
                <Link to="/">Home</Link>
                <ul className="sub-menu">
                  <li id="menu-item-18622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18622">
                    <Link to="/splash">Splash Page</Link>
                  </li>
               
                </ul>
              </li>
              <li id="menu-item-1846" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1846">
                <Link to="#">Properties</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1861" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1861">
                    <Link to="#">List &#8211; Standard</Link>
                  </li>
                  <li id="menu-item-1849" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1849">
                    <Link to="property">Property Page</Link>
                    <ul className="sub-menu">
                      <li id="menu-item-1848" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1848">
                        <Link to="/sunny_dorm">Sidebar Left</Link>
                      </li>
                      <li id="menu-item-1850" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1850">
                        <Link to="/downtown">Sidebar Right</Link>
                      </li>
                      <li id="menu-item-1855" className="menu-item menu-item-type-post_type menu-item-object-estate_property menu-item-1855">
                        <Link to="/bedroom">Video In Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-1856" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1856">
                    <Link to="#">Search by</Link>
                    <ul className="sub-menu">
                      <li id="menu-item-1858" className="menu-item menu-item-type-taxonomy menu-item-object-property_area menu-item-1858">
                        <Link to="/manhattan">Area</Link>
                      </li>
                      <li id="menu-item-1859" className="menu-item menu-item-type-taxonomy menu-item-object-property_category menu-item-1859">
                        <Link to="/apartment">Category</Link>
                      </li>
                      <li id="menu-item-1860" className="menu-item menu-item-type-taxonomy menu-item-object-property_action_category menu-item-1860">
                        <Link to="/shared">Type</Link>
                      </li>
                      <li id="menu-item-18634" className="menu-item menu-item-type-taxonomy menu-item-object-property_features menu-item-18634">
                        <Link to="/parking">Free Parking on Premises</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1847" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1847">
                <Link to="#">Owners</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1862" className="menu-item menu-item-type-post_type menu-item-object-estate_agent menu-item-1862">
                    <Link to="/amber_demo">Amber Leigh</Link>
                  </li>
                  <li id="menu-item-1863" className="menu-item menu-item-type-post_type menu-item-object-estate_agent menu-item-1863">
                    <Link to="/john_demo">John Doe</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1851" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1851">
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                  <li id="menu-item-1872" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1872">
                    <Link to="/welcoming">Post &#8211; No Sidebar</Link>
                  </li>
                  <li id="menu-item-1873" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1873">
                    <Link to="/greathost">Post &#8211; Image Slider</Link>
                  </li>
                  <li id="menu-item-1874" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1874">
                    <Link to="/budget">Post &#8211; Sidebar Left</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1853" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1853">
                <Link to="#">Features</Link>
                <ul className="sub-menu">
                  <li id="menu-item-18624" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18624">
                    <Link to="/short_codes">WP Rentals Shortcodes</Link>
                  </li>
                  <li id="menu-item-18625" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18625">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1846" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1846">
                <Link to="/Dashboard">Dashboard</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mobilewrapper-user">
        <div class="snap-drawers">
          {/* <!-- Right Sidebar--> */}
          <div class="snap-drawer snap-drawer-right">
            <div class="mobilemenu-close-user">
              <i class="fas fa-times"></i>
            </div>

            <div class="login_sidebar_mobile">
              <h3 class="widget-title-sidebar" id="login-div-title-mobile">
                Login
              </h3>
              <div class="login_form" id="login-div-mobile">
                <div class="loginalert" id="login_message_area_wd_mobile"></div>
                <input type="text" class="form-control" name="log" id="login_user_wd_mobile" placeholder="Username" />
                <input type="password" class="form-control" name="pwd" id="login_pwd_wd_mobile" placeholder="Password" />
                <input type="hidden" name="loginpop" id="loginpop_mobile" value="0" />
                <input type="hidden" id="security-login-mobile" name="security-login-mobile" value="047063c315-1638969714" />
                <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-login-but-wd-mobile">
                  Login
                </button>
                <div class="login-links">
                  <Link to="#" id="widget_register_mobile">
                    Need an account? Register here!
                  </Link>
                  <Link to="#" id="forgot_pass_widget_mobile">
                    Forgot Password?
                  </Link>
                </div>
                <div class="wpestate_social_login" id="facebooklogin_mb" data-social="facebook">
                  <i class="fab fa-facebook-f"></i> Login with Facebook
                </div>
                <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
              </div>

              <h3 class="widget-title-sidebar" id="register-div-title-mobile">
                Register
              </h3>
              <div class="login_form" id="register-div-mobile">
                <div class="loginalert" id="register_message_area_wd_mobile"></div>
                <input type="text" name="user_login_register" id="user_login_register_wd_mobile" class="form-control" placeholder="Username" />
                <input type="text" name="user_email_register" id="user_email_register_wd_mobile" class="form-control" placeholder="Email" />
                <div class="acc_radio">
                  <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                  <div class="radiolabel" for="acctype0">
                    I only want to book
                  </div>
                  <br />
                  <input type="radio" name="acc_type" id="acctype1" value="0" required />
                  <div class="radiolabel" for="acctype1">
                    I want to rent my property
                  </div>
                </div>
                <input type="checkbox" name="terms" id="user_terms_register_wd_mobile" />
                <label id="user_terms_register_wd_label_mobile" for="user_terms_register_wd_mobile">
                  I agree with
                  <Link to="./../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">
                    terms &amp; conditions
                  </Link>
                </label>
                <input type="hidden" id="security-register-mobile" name="security-register-mobile" value="75fa241f7f-1638969714" />
                <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd_mobile">
                  Register
                </button>
                <div class="login-links">
                  <Link to="#" id="widget_login_sw_mobile">
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>

            <div id="mobile_forgot_wrapper">
              <h3 class="widget-title-sidebar" id="forgot-div-title_mobile">
                Reset Password
              </h3>
              <div class="login_form" id="forgot-pass-div_mobile">
                <div class="loginalert" id="forgot_pass_area_shortcode_wd_mobile"></div>
                <div class="loginrow">
                  <input type="text" class="form-control" name="forgot_email" id="forgot_email_mobile" placeholder="Enter Your Email Address" size="20" />
                </div>
                <input type="hidden" id="security-login-forgot_wd_mobile" name="security-login-forgot_wd_mobile" value="33233a3efc" />
                <input type="hidden" name="_wp_http_referer" value="/homepage-elementor/" />
                <input type="hidden" id="postid" value="0" />
                <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mobile" name="forgot">
                  Reset Password
                </button>
                <div class="login-links shortlog">
                  <Link to="#" id="return_login_shortcode_mobile">
                    Return to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

<div class="website-wrapper is_header_type1 is_search_type1 topbar_show_mobile_no" id="all_wrapper">
    <div class="container main_wrapper wide">
        <div class="master_header master_ wide master_header_wide_no hover_type_5">
                <div class="mobile_header">
                        <div class="mobile-trigger"><i class="fas fa-bars"></i></div>
                        <div class="mobile-logo">
                                <Link to="./../index.html"> <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1_transparent.png" class="img-responsive retina_ready" alt="logo" /> </Link>
                        </div>
                        <div class="mobile-trigger-user"><i class="fas fa-user-circle"></i></div>
                </div>

                <div class="header_wrapper header_type1 header_align_left header_wide_no">
                        <div class="header_wrapper_inside">
                                <div class="logo">
                                    <Link to="./../index.html">
                                            <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1.png" class="img-responsive retina_ready" alt="logo" />
                                    </Link>
                                </div>

                                <div class="user_menu" id="user_menu_u">
                                    <div class="signuplink" id="topbarlogin">Login</div>
                                    <div class="signuplink" id="topbarregister">Sign Up</div>
                                    <Link to="/add_new_listing" id="submit_action">Submit Property</Link>
                                </div>

            <nav id="access">
              <ul id="menu-primary-menu-1" class="menu">
                <li id="menu-item-1854" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="/">
                    Home
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-18622" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/splash">
                        Splash Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1846" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Properties
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1861" class="menu-item menu-item-type-custom menu-item-object-custom">
                      <Link class="menu-item-link" to="#">
                        List &#8211; Standard
                      </Link>
                    </li>
                    <li id="menu-item-1849" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link class="menu-item-link" to="#">
                        Property Page
                      </Link>
                      <ul class="sub-menu">
                        <li id="menu-item-1848" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/sunny_dorm">
                            Sidebar Left
                          </Link>
                        </li>
                        <li id="menu-item-1850" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/downtown">
                            Sidebar Right
                          </Link>
                        </li>
                        <li id="menu-item-1855" class="menu-item menu-item-type-post_type menu-item-object-estate_property">
                          <Link class="menu-item-link" to="/bedroom">
                            Video In Post
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1856" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link class="menu-item-link" to="#">
                        Search by
                      </Link>
                      <ul class="sub-menu">
                        <li id="menu-item-1858" class="menu-item menu-item-type-taxonomy menu-item-object-property_area">
                          <Link class="menu-item-link" to="/manhattan">
                            Area
                          </Link>
                        </li>
                        <li id="menu-item-1859" class="menu-item menu-item-type-taxonomy menu-item-object-property_category">
                          <Link class="menu-item-link" to="/apartment">
                            Category
                          </Link>
                        </li>
                        <li id="menu-item-1860" class="menu-item menu-item-type-taxonomy menu-item-object-property_action_category">
                          <Link class="menu-item-link" to="/shared">
                            Type
                          </Link>
                        </li>
                        <li id="menu-item-18634" class="menu-item menu-item-type-taxonomy menu-item-object-property_features">
                          <Link class="menu-item-link" to="/parking">
                            Free Parking on Premises
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1847" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Owners
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1862" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                      <Link class="menu-item-link" to="/amber_demo">
                        Amber Leigh
                      </Link>
                    </li>
                    <li id="menu-item-1863" class="menu-item menu-item-type-post_type menu-item-object-estate_agent">
                      <Link class="menu-item-link" to="/john_demo">
                        John Doe
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1851" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Blog
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-1872" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="/welcoming">
                        Post &#8211; No Sidebar
                      </Link>
                    </li>
                    <li id="menu-item-1873" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="greathost">
                        Post &#8211; Image Slider
                      </Link>
                    </li>
                    <li id="menu-item-1874" class="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link class="menu-item-link" to="/budget">
                        Post &#8211; Sidebar Left
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1853" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="#">
                    Features
                  </Link>
                  <ul class="sub-menu">
                    <li id="menu-item-18624" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/shortcodes">
                        WP Rentals Shortcodes
                      </Link>
                    </li>
                    <li id="menu-item-18625" class="menu-item menu-item-type-post_type menu-item-object-page">
                      <Link class="menu-item-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1854" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu">
                  <Link class="menu-item-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <!-- #access --> */}
    </div>
</div>
</div>
<div class="header_media with_search_newtype">
                                   <div class="wpestate_header_image full_screen_no parallax_effect_yes">
                                       <img src="http://wprentals.org/wp-content/uploads/2015/04/header_image.png"  style={{height: 580}} alt="" />
                                   </div>

                                   <div class="search_wrapper type2 advpos_image search_wr_newtype with_search_form_float" id="search_wrapper" data-postid="190">
                                          <div class="adv-2-header">Make a Reservation</div>
                                          <div class="adv-2-wrapper"></div>
                                          <div class="adv-search-2 adv_extended_class 190 advanced_search_form_wrapper" data-postid="190">
                                                 <form role="search" method="get" action="./advanced-search/">
                                                        <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                                                               <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_location_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> <input type="hidden" id="advanced_city" class="form-control" name="advanced_city" data-value="" value="" />
                                                               <input type="hidden" id="advanced_area" class="form-control" name="advanced_area" data-value="" value="" />
                                                               <input type="hidden" id="advanced_country" class="form-control" name="advanced_country" data-value="" value="" />
                                                               <input type="hidden" id="property_admin_area" name="property_admin_area" value="" />
                                                               {/* <script type="text/javascript">
                                                                      //<![CDATA[
                                                                      jQuery(document).ready(function () {
                                                                             var availableTags = [1];
                                                                             jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal,#search_locationhalf_autointernal").autocomplete({
                                                                                    source: function (request, response) {
                                                                                           var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                                           response(results.slice(0, 10));
                                                                                    },
                                                                                    select: function (a, b) {
                                                                                           jQuery(".stype").val(b.item.category);

                                                                                           if (document.getElementById("search_location_filter_autointernal")) {
                                                                                                  jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                                                  wpestate_start_filtering_ajax_map(1);
                                                                                           }
                                                                                    },
                                                                             });
                                                                      });
                                                                      //]]>
                                                               </script> */}
                                                        </div>
                                                        <div class="col-md-12 Check-In calendar_icon"><input type="text" id="check_in" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                        <div class="col-md-12 Check-Out calendar_icon"><input type="text" id="check_out" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                        <div class="col-md-12 Guests guest_no_drop">
                                                               <div class="dropdown custom_icon_class form-control">
                                                                      <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
                                                                             Guests
                                                                             <span class="caret caret_filter"></span>
                                                                      </div>
                                                                      <input type="hidden" name="guest_no" id="guest_no" value="" />
                                                                      <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                                                                             <li role="presentation" data-value="all">Guests</li>
                                                                             <li data-value="1" value="1">1</li>
                                                                             <li data-value="2" value="2">2</li>
                                                                             <li data-value="3" value="3">3</li>
                                                                             <li data-value="4" value="4">4</li>
                                                                             <li data-value="5" value="5">5</li>
                                                                             <li data-value="6" value="6">6</li>
                                                                             <li data-value="7" value="7">7</li>
                                                                             <li data-value="8" value="8">8</li>
                                                                             <li data-value="9" value="9">9</li>
                                                                             <li data-value="10" value="10">10</li>
                                                                             <li data-value="11" value="11">11</li>
                                                                             <li data-value="12" value="12">12</li>
                                                                             <li data-value="13" value="13">13</li>
                                                                             <li data-value="14" value="14">14</li>
                                                                             <li data-value="15" value="15">15</li>
                                                                      </ul>
                                                               </div>
                                                        </div>
                                                        <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                        <div class="col-md-12"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                                                 </form>
                                          </div>
                                          {/* <script type="text/javascript">
                                                 //<![CDATA[
                                                 jQuery(document).ready(function () {
                                                        var availableTags = [1];
                                                        jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal").autocomplete({
                                                               source: function (request, response) {
                                                                      var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                      response(results.slice(0, 10));
                                                               },
                                                               select: function (a, b) {
                                                                      jQuery(".stype").val(b.item.category);

                                                                      if (document.getElementById("search_location_filter_autointernal")) {
                                                                             jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                             wpestate_start_filtering_ajax_map(1);
                                                                      }
                                                               },
                                                        });
                                                 });
                                                 //]]>
                                          </script> */}
                                   </div>
                            </div>

                            <div id="adv-search-header-mobile">Advanced Search</div>

                            <div class="adv-search-mobile" id="adv-search-mobile">
                                   <div class="advanced_search_form_wrapper" data-postid="190">
                                          <form role="search" method="get" action="./advanced-search/">
                                                 <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                                                        <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_locationmobile_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> <input type="hidden" id="advanced_citymobile" class="form-control" name="advanced_city" data-value="" value="" />
                                                        <input type="hidden" id="advanced_areamobile" class="form-control" name="advanced_area" data-value="" value="" />
                                                        <input type="hidden" id="advanced_countrymobile" class="form-control" name="advanced_country" data-value="" value="" />
                                                        <input type="hidden" id="property_admin_areamobile" name="property_admin_area" value="" />
                                                        {/* <script type="text/javascript">
                                                               //<![CDATA[
                                                               jQuery(document).ready(function () {
                                                                      var availableTags = [1];
                                                                      jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal,#search_locationhalf_autointernal").autocomplete({
                                                                             source: function (request, response) {
                                                                                    var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                                    response(results.slice(0, 10));
                                                                             },
                                                                             select: function (a, b) {
                                                                                    jQuery(".stype").val(b.item.category);

                                                                                    if (document.getElementById("search_location_filter_autointernal")) {
                                                                                           jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                                           wpestate_start_filtering_ajax_map(1);
                                                                                    }
                                                                             },
                                                                      });
                                                               });
                                                               //]]>
                                                        </script> */}
                                                 </div>
                                                 <div class="col-md-12 Check-In calendar_icon"><input type="text" id="check_in_mobile" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                 <div class="col-md-12 Check-Out calendar_icon"><input type="text" id="check_out_mobile" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                 <div class="col-md-12 Guests guest_no_drop">
                                                        <div class="dropdown custom_icon_class form-control">
                                                               <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
                                                                      Guests
                                                                      <span class="caret caret_filter"></span>
                                                               </div>
                                                               <input type="hidden" name="guest_no" id="guest_no" value="" />
                                                               <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                                                                      <li role="presentation" data-value="all">Guests</li>
                                                                      <li data-value="1" value="1">1</li>
                                                                      <li data-value="2" value="2">2</li>
                                                                      <li data-value="3" value="3">3</li>
                                                                      <li data-value="4" value="4">4</li>
                                                                      <li data-value="5" value="5">5</li>
                                                                      <li data-value="6" value="6">6</li>
                                                                      <li data-value="7" value="7">7</li>
                                                                      <li data-value="8" value="8">8</li>
                                                                      <li data-value="9" value="9">9</li>
                                                                      <li data-value="10" value="10">10</li>
                                                                      <li data-value="11" value="11">11</li>
                                                                      <li data-value="12" value="12">12</li>
                                                                      <li data-value="13" value="13">13</li>
                                                                      <li data-value="14" value="14">14</li>
                                                                      <li data-value="15" value="15">15</li>
                                                               </ul>
                                                        </div>
                                                 </div>
                                                 <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                 <div class="col-md-12"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                                          </form>
                                   </div>
                                   {/* <script type="text/javascript">
                                          //<![CDATA[
                                          jQuery(document).ready(function () {
                                                 var availableTags = [1];
                                                 jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal").autocomplete({
                                                        source: function (request, response) {
                                                               var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                               response(results.slice(0, 10));
                                                        },
                                                        select: function (a, b) {
                                                               jQuery(".stype").val(b.item.category);

                                                               if (document.getElementById("search_location_filter_autointernal")) {
                                                                      jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                      wpestate_start_filtering_ajax_map(1);
                                                               }
                                                        },
                                                 });
                                          });
                                          //]]>
                                   </script> */}
                            </div>
                            {/* <script type="text/javascript">
                                   //<![CDATA[
                                   jQuery(document).ready(function () {
                                          var availableTags = [1];
                                          jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal").autocomplete({
                                                 source: function (request, response) {
                                                        var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                        response(results.slice(0, 10));
                                                 },
                                                 select: function (a, b) {
                                                        jQuery(".stype").val(b.item.category);

                                                        if (document.getElementById("search_location_filter_autointernal")) {
                                                               jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                               wpestate_start_filtering_ajax_map(1);
                                                        }
                                                 },
                                          });
                                   });
                                   //]]>
                            </script> */}

                            <div class="content_wrapper row">
                                   <div itemscope itemtype="http://schema.org/Article" id="post" class="row content-fixed post-190 post type-post status-publish format-standard has-post-thumbnail hentry category-holiday-ideas category-hospitality category-uncategorized tag-holiday-ideas tag-hospitality">
                                          <div class="col-md-12 breadcrumb_container">
                                                 <ol class="breadcrumb">
                                                        <li><a href="./../../../../index.html">Home</a></li>
                                                        <li><a href="./../../../../category/holiday-ideas/index.html">Holiday Ideas</a>, <a href="./../../../../category/hospitality/index.html">Hospitality</a>, <a href="./../../../../category/uncategorized/index.html">Uncategorized</a></li>
                                                        <li class="active">5 Best Budget Vacations</li>
                                                 </ol>
                                          </div>
                                          <div class="col-md-8 col-md-push-4">
                                                 <span class="entry-title listing_loader_title">Your search results</span>
                                                 <div class="loader-inner ball-pulse" id="internal-loader">
                                                        <div class="double-bounce1"></div>
                                                        <div class="double-bounce2"></div>
                                                 </div>

                                                 <div id="listing_ajax_container"></div>
                                                 <img itemprop="image" src="./../../../../wp-content/uploads/2018/08/6-1-1-1-1170x921.jpg" class="schema_div_noshow b-lazy img-responsive" alt="" />
                                                 <div itemprop="dateModified" class="schema_div_noshow">April 20, 2015</div>

                                                 <div class="schema_div_noshow" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                                                        <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                                                               <img src="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1.png" />
                                                               <meta itemprop="url" content="https://demo1.wprentals.org/wp-content/uploads/2019/09/demo1.png" />
                                                        </div>
                                                        <meta itemprop="name" content="MyCorp" />
                                                 </div>
                                                 <link class="schema_div_noshow" itemprop="mainEntityOfPage" href="./index.html" />

                                                 <div class="single-content single-blog">
                                                        <h1 itemprop="headline" class="entry-title single-title">5 Best Budget Vacations</h1>
                                                        <div class="meta-element-head" itemprop="datePublished">Published on April 20, 2015 by <span itemprop="author">admin</span></div>

                                                        <p>In spring 2013, ahead of her parents’ two-week visit, Dawn decided that a makeover was in order. She incorporated color and pattern, yielding an interior more in line with what one might expect in a beach town in Southern California: sun-kissed yellow walls; a swath of Kelly green in the kitchen; a long table, topped with a vibrant print, that functions for reading, dining, or doing work; a lime-hued bathroom; and cheery polka-dotted bedding. But it’s easy to see why guests are often charmed before ever setting foot inside: Just beyond the blue-and-white cottage-like structure’s Dutch door is a deck with a view of a pond and a garden that includes a Meyer lemon tree.</p>
                                                        <p>
                                                               <a href="http://stage.wprentals.org/wp-content/uploads/2015/04/demo515-3.jpg"><img loading="lazy" class="alignnone size-full wp-image-97" src="http://stage.wprentals.org/wp-content/uploads/2015/04/demo515-3.jpg" alt="demo51" width="1024" height="576" /></a>
                                                        </p>
                                                        <p>After her parents’ stay, Dawn thought to herself: “Well, I’ve got this room that’s completely remodeled. What should I do with it?” She approached her husband about putting it on WP Rentals. He was hesitant at first; in part because in order to get to the guesthouse, you have to walk right by the couple’s own residence. So they started out with just single (one-person) bookings before allowing pairs. “Now he’s a bigger social person with my guests than me,” laughs Dawn.</p>

                                                        <div class="meta-info">
                                                               <div class="meta-element"><strong>Category: </strong><a href="./../../../../category/holiday-ideas/index.html">Holiday Ideas</a>, <a href="./../../../../category/hospitality/index.html">Hospitality</a>, <a href="./../../../../category/uncategorized/index.html">Uncategorized</a></div>

                                                               <div class="prop_social">
                                                                      <span class="prop_social_share">Share</span>
                                                                      <a href="http://www.facebook.com/sharer.php?u=./2015/04/20/5-best-budget-vacations/&amp;t=5+Best+Budget+Vacations" target="_blank" class="share_facebook"><i class="fab fa-facebook-f"></i></a>
                                                                      <a href="http://twitter.com/home?status=5+Best+Budget+Vacations+.%2F2015%2F04%2F20%2F5-best-budget-vacations%2F" class="share_tweet" target="_blank"><i class="fab fa-twitter"></i></a>
                                                                      <a href="mailto:email@email.com?subject=5+Best+Budget+Vacations&amp;body=.%2F2015%2F04%2F20%2F5-best-budget-vacations%2F" class="share_email" target="_blank"><i class="far fa-envelope"></i></a>
                                                                      <a href="http://pinterest.com/pin/create/button/?url=./2015/04/20/5-best-budget-vacations/&amp;media=./wp-content/uploads/2018/08/6-1-1-1-1920x790.jpg&amp;description=5+Best+Budget+Vacations" target="_blank" class="share_pinterest"> <i class="fab fa-pinterest-p fa-2"></i> </a>
                                                               </div>
                                                        </div>
                                                 </div>

                                                 {/* <!-- #related posts start--> */}

                                                 <div class="related_posts blog_list_wrapper row">
                                                        <h2>Related Posts</h2>
                                                        <div class="col-md-6 property_flex">
                                                               <div class="blog_unit_back" data-link="./2015/04/21/what-guests-want-to-know/">
                                                                      <div class="listing-unit-img-wrapper">
                                                                             <img src="./../../../../wp-content/uploads/2015/04/diving-1-1-400x242.jpeg" class="b-lazy img-responsive" alt="What Guests Want to Know" />
                                                                             <div class="price_unit_wrapper"></div>
                                                                      </div>
                                                                      <div class="blog-title">
                                                                             <a href="./../../21/what-guests-want-to-know/index.html" class="blog-title-link"> What Guests Want to Know </a>

                                                                             <div class="blog-unit-content">It’s no surprise that location is everything for guests who book an WP Rentals. But what was surprising for us was the conundrum this topic ...</div>

                                                                             <div class="category_tagline">
                                                                                    <span class="span_widemeta"> Apr 21, 2015</span> ,
                                                                                    <span class="span_widemeta span_comments"><i class="far fa-comment"></i> 4</span>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div class="col-md-6 property_flex">
                                                               <div class="blog_unit_back" data-link="./2015/04/21/how-to-be-a-great-host/">
                                                                      <div class="listing-unit-img-wrapper">
                                                                             <img src="./../../../../wp-content/uploads/2015/04/dolphin-1-1-400x242.jpeg" class="b-lazy img-responsive" alt="How to be a Great Host for Renters" />
                                                                             <div class="price_unit_wrapper"></div>
                                                                      </div>
                                                                      <div class="blog-title">
                                                                             <a href="./../../21/how-to-be-a-great-host/index.html" class="blog-title-link"> How to be a Great Host for R... </a>

                                                                             <div class="blog-unit-content">Elle put together some easy steps every host can follow to prevent hosting from becoming more of a chore than a reward. “Some of our ...</div>

                                                                             <div class="category_tagline">
                                                                                    <span class="span_widemeta"> Apr 21, 2015</span> ,
                                                                                    <span class="span_widemeta span_comments"><i class="far fa-comment"></i> 2</span>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>

                                                 {/* <!-- #end related posts -->

                                                 <!-- #comments start--> */}
                                                 <div class="wrapper_content">
                                                        <div id="comments">
                                                               <h2>One thought on &ldquo;<span>5 Best Budget Vacations</span>&rdquo;</h2>

                                                               <ul class="commentlist">
                                                                      <li class="comment even thread-even depth-1" id="li-comment-11">
                                                                             <div class="blog_author_image singlepage">
                                                                                 <img src="https://secure.gravatar.com/avatar/2816d28dee2839a68a1cd80d35f367e1?s=55&#038;d=mm&#038;r=g" alt="" />
                                                                             </div>
                                                                             <div id="comment-11" class="comment">
                                                                                    <div class="comment-meta">
                                                                                           <div class="comment-author vcard">
                                                                                                  <div class="comment_name">Loraine</div>
                                                                                                  <span class="comment_date"> on April 21, 2015</span>
                                                                                           </div>
                                                                                           {/* <!-- .comment-author .vcard --> */}
                                                                                    </div>

                                                                                    <div class="comment-content">
                                                                                           <p>This site was very easy to use. I needed a place in NYC and found pone in my budget big enough for me and some friends. We paid on the website and everything worked out great!</p>

                                                                                           <a rel="nofollow" class="comment-reply-link" href="./index.html?replytocom=11#respond" data-commentid="11" data-postid="190" data-belowelement="comment-11" data-respondelement="respond" data-replyto="Reply to Loraine" aria-label="Reply to Loraine"><i class="fas fa-reply"></i> Reply</a>
                                                                                    </div>
                                                                             </div>
                                                                             {/* <!-- #comment-## --> */}
                                                                      </li>
                                                                      {/* <!-- #comment-## --> */}
                                                               </ul>

                                                               <div id="respond" class="comment-respond">
                                                                      <h3 id="reply-title" class="comment-reply-title">
                                                                             Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="./index.html#respond" style={{display: 'none'}}>Cancel Reply</a></small>
                                                                      </h3>
                                                                      <form action="./wp-comments-post.php" method="post" id="commentform" class="comment-form">
                                                                             <p class="comment-notes">Your email address will not be published.</p>
                                                                             <p class="comment-form-comment"><label for="comment"></label><textarea id="comment" class="form-control" name="comment" cols="45" rows="8" aria-required="true" placeholder="Comment"></textarea></p>
                                                                             <p class="comment-form-author"><input id="author" name="author" type="text" class="form-control" value="" size="30" aria-required="true" placeholder="Name" /></p>
                                                                             <p class="comment-form-email"><input id="email" name="email" type="text" class="form-control" value="" size="30" aria-required="true" placeholder="Email" /></p>
                                                                             <p class="comment-form-url"><input id="url" name="url" type="text" class="form-control" value="" size="30" placeholder="Website" /></p>
                                                                             <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                                                                             <p class="form-submit">
                                                                                    <input name="submit" type="submit" id="submit" class="submit" value="Post Comment" /> <input type="hidden" name="comment_post_ID" value="190" id="comment_post_ID" />
                                                                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                                                                             </p>
                                                                      </form>
                                                               </div>
                                                               {/* <!-- #respond --> */}
                                                        </div>
                                                        {/* <!-- #comments --> */}
                                                 </div>
                                                 {/* <!-- end comments --> */}
                                          </div>

                                          {/* <!-- begin sidebar --> */}
                                          <div class="clearfix visible-xs"></div>

                                          <div class="col-xs-12 col-md-4 col-md-pull-8 sidebar_post widget-area-sidebar" id="primary">
                                                 <ul class="xoxo">
                                                        <li id="wpestate_advanced_search_widget-2" class="widget-container advanced_search_sidebar">
                                                               <h3 class="widget-title-sidebar">Advanced Search</h3>
                                                               <div class="adv-search-2 adv_extended_class 190 advanced_search_form_wrapper" data-postid="190">
                                                                      <form role="search" method="get" action="./advanced-search/">
                                                                             <div class="col-md-12 Where_do_you_want_to_go_? map_icon">
                                                                                    <input type="hidden" class="stype" id="stype" name="stype" value="tax" /><input type="text" id="search_locationsidebar_autointernal" class="form-control" name="search_location" placeholder="Where do you want to go ?" value="" /> <input type="hidden" id="advanced_citysidebar" class="form-control" name="advanced_city" data-value="" value="" />
                                                                                    <input type="hidden" id="advanced_areasidebar" class="form-control" name="advanced_area" data-value="" value="" />
                                                                                    <input type="hidden" id="advanced_countrysidebar" class="form-control" name="advanced_country" data-value="" value="" />
                                                                                    <input type="hidden" id="property_admin_areasidebar" name="property_admin_area" value="" />
                                                                                    {/* <script type="text/javascript">
                                                                                           //<![CDATA[
                                                                                           jQuery(document).ready(function () {
                                                                                                  var availableTags = [1];
                                                                                                  jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal,#search_locationhalf_autointernal").autocomplete({
                                                                                                         source: function (request, response) {
                                                                                                                var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                                                                response(results.slice(0, 10));
                                                                                                         },
                                                                                                         select: function (a, b) {
                                                                                                                jQuery(".stype").val(b.item.category);

                                                                                                                if (document.getElementById("search_location_filter_autointernal")) {
                                                                                                                       jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                                                                       wpestate_start_filtering_ajax_map(1);
                                                                                                                }
                                                                                                         },
                                                                                                  });
                                                                                           });
                                                                                           //]]>
                                                                                    </script> */}
                                                                             </div>
                                                                             <div class="col-md-12 Check-In calendar_icon"><input type="text" id="check_in_widget" name="check_in" placeholder="Check-In" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                                             <div class="col-md-12 Check-Out calendar_icon"><input type="text" id="check_out_widget" name="check_out" placeholder="Check-Out" class="advanced_select form-control custom_icon_class_input" value="" /></div>
                                                                             <div class="col-md-12 Guests guest_no_drop">
                                                                                    <div class="dropdown custom_icon_class form-control">
                                                                                           <div data-toggle="dropdown" id="guest_no_toogle" class="filter_menu_trigger" data-value="">
                                                                                                  Guests
                                                                                                  <span class="caret caret_filter"></span>
                                                                                           </div>
                                                                                           <input type="hidden" name="guest_no" id="guest_no" value="" />
                                                                                           <ul class="dropdown-menu filter_menu" role="menu" aria-labelledby="guest_no_toogle">
                                                                                                  <li role="presentation" data-value="all">Guests</li>
                                                                                                  <li data-value="1" value="1">1</li>
                                                                                                  <li data-value="2" value="2">2</li>
                                                                                                  <li data-value="3" value="3">3</li>
                                                                                                  <li data-value="4" value="4">4</li>
                                                                                                  <li data-value="5" value="5">5</li>
                                                                                                  <li data-value="6" value="6">6</li>
                                                                                                  <li data-value="7" value="7">7</li>
                                                                                                  <li data-value="8" value="8">8</li>
                                                                                                  <li data-value="9" value="9">9</li>
                                                                                                  <li data-value="10" value="10">10</li>
                                                                                                  <li data-value="11" value="11">11</li>
                                                                                                  <li data-value="12" value="12">12</li>
                                                                                                  <li data-value="13" value="13">13</li>
                                                                                                  <li data-value="14" value="14">14</li>
                                                                                                  <li data-value="15" value="15">15</li>
                                                                                           </ul>
                                                                                    </div>
                                                                             </div>
                                                                             <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" value="061de97250" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                                             <div class="col-md-12"><input name="submit" type="submit" class="advanced_search_submit_button" value="Search" /></div>
                                                                      </form>
                                                               </div>
                                                               {/* <script type="text/javascript">
                                                                      //<![CDATA[
                                                                      jQuery(document).ready(function () {
                                                                             var availableTags = [1];
                                                                             jQuery("#search_location_autointernal,#search_locationmobile_autointernal,#search_locationsidebar_autointernal,#search_locationshortcode_autointernal,#search_location_filter_autointernal").autocomplete({
                                                                                    source: function (request, response) {
                                                                                           var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                                                                                           response(results.slice(0, 10));
                                                                                    },
                                                                                    select: function (a, b) {
                                                                                           jQuery(".stype").val(b.item.category);

                                                                                           if (document.getElementById("search_location_filter_autointernal")) {
                                                                                                  jQuery("#search_location_filter_autointernal").val(b.item.label);
                                                                                                  wpestate_start_filtering_ajax_map(1);
                                                                                           }
                                                                                    },
                                                                             });
                                                                      });
                                                                      //]]>
                                                               </script> */}
                                                        </li>
                                                        <li id="wpestate_login_widget-2" class="widget-container loginwd_sidebar">
                                                               <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                               <div class="login_sidebar">
                                                                      <h3 class="widget-title-sidebar" id="login-div-title">Login</h3>
                                                                      <div class="login_form" id="login-div">
                                                                             <div class="loginalert" id="login_message_area_wd"></div>

                                                                             <input type="text" class="form-control" name="log" id="login_user_wd" placeholder="Username" />
                                                                             <input type="password" class="form-control" name="pwd" id="login_pwd_wd" placeholder="Password" />
                                                                             <input type="hidden" name="loginpop" id="loginpop_wd" value="0" />

                                                                             <input type="hidden" id="security-login-wd" name="security-login-wd" value="b22625985b-1638969727" />
                                                                             <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-login-but-wd">Login</button>

                                                                             <div class="navigation_links">
                                                                                    <a href="#" id="widget_register_sw">Don&#039;t have an account?</a> |
                                                                                    <a href="#" id="forgot_pass_widget">Forgot Password?</a>
                                                                             </div>

                                                                             <div class="login-links">
                                                                                    <div class="wpestate_social_login" id="facebooklogin_wd" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                                                                                    <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
                                                                             </div>
                                                                      </div>

                                                                      <h3 class="widget-title-sidebar" id="register-div-title">Register</h3>
                                                                      <div class="login_form" id="register-div">
                                                                             <div class="loginalert" id="register_message_area_wd"></div>
                                                                             <input type="text" name="user_login_register" id="user_login_register_wd" class="form-control" placeholder="Username" />
                                                                             <input type="text" name="user_email_register" id="user_email_register_wd" class="form-control" placeholder="Email" />
                                                                             <div class="acc_radio">
                                                                                    <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                                                                                    <div class="radiolabel" for="acctype0">I only want to book</div>
                                                                                    <br />
                                                                                    <input type="radio" name="acc_type" id="acctype1" value="0" required />
                                                                                    <div class="radiolabel" for="acctype1">I want to rent my property</div>
                                                                             </div>
                                                                             <input type="checkbox" name="terms" id="user_terms_register_wd" /><label id="user_terms_register_wd_label" for="user_terms_register_wd">I agree with <a href="./../../../../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a> </label><input type="hidden" id="security-register-wd" name="security-register-wd" value="9811465b0a-1638969727" /><button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-submit-register_wd">Register</button>
                                                                             <div class="login-links">
                                                                                    <a href="#" id="widget_login_sw">Back to Login</a>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <h3 class="widget-title-sidebar" id="forgot-div-title_shortcode">Reset Password</h3>
                                                               <div class="login_form" id="forgot-pass-div_shortcode">
                                                                      <div class="loginalert" id="forgot_pass_area_shortcode_wd"></div>
                                                                      <div class="loginrow">
                                                                             <input type="text" class="form-control" name="forgot_email" id="forgot_email_shortcode" placeholder="Enter Your Email Address" size="20" />
                                                                      </div>
                                                                      <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                                      <input type="hidden" id="postid" value="0" />
                                                                      <button class="wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_shortcode" name="forgot">Reset Password</button>
                                                                      <div class="login-links shortlog">
                                                                             <a href="#" id="return_login_shortcode">Return to Login</a>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                 </ul>
                                          </div>
                                          {/* <!-- end sidebar --> */}
                                   </div>
                            </div>
                            {/* <!-- end content_wrapper started in header or full_width_row from prop list --> */}

                            <footer id="colophon" class="footer_back_repeat">
                                   <div id="footer-widget-area" class="row">
                                          <div id="first" class="widget-area col-md-4">
                                                 <ul class="xoxo">
                                                        <li id="text-2" class="widget-container widget_text">
                                                               <h3 class="widget-title-footer">ABOUT WP RENTALS</h3>
                                                               <div class="textwidget">
                                                                      <p>WP RENTALS is committed to delivering a high level of expertise, customer service, and attention to detail to the market of accommodation booking .</p>
                                                                      <p>We built the most featured WordPress theme for such a project. Test and convince yourself.</p>
                                                               </div>
                                                        </li>
                                                        <li id="wpestate_multiple_currency_widget-1" class="widget-container multiple_currency_widget">
                                                               <h3 class="widget-title-footer">Change Your Currency</h3>
                                                               <div class="dropdown form-control">
                                                                      <div data-toggle="dropdown" id="sidebar_currency_list" class="sidebar_filter_menu">€ <span class="caret"></span></div>

                                                                      <input type="hidden" name="filter_curr[]" value="" />
                                                                      <ul id="list_sidebar_curr" class="dropdown-menu filter_menu list_sidebar_currency" role="menu" aria-labelledby="sidebar_currency_list">
                                                                             <li role="presentation" data-curpos="before" data-coef="1" data-value="€" data-symbol="€" data-symbol2="€" data-pos="-1">€</li>
                                                                             <li role="presentation" data-curpos="before" data-coef="0.765" data-value="$" data-symbol="$" data-symbol2="USD" data-pos="0">$</li>
                                                                             <li role="presentation" data-curpos="after" data-coef="1.587" data-value="£" data-symbol="£" data-symbol2="GBP" data-pos="1">£</li>
                                                                      </ul>
                                                               </div>
                                                               <input type="hidden" id="wprentals_change_currency" value="d33f6ebf0a" />
                                                        </li>
                                                 </ul>
                                          </div>
                                          {/* <!-- #first .widget-area --> */}

                                          <div id="second" class="widget-area col-md-4">
                                                 <ul class="xoxo">
                                                        <li id="wpestate_contact_widget-1" class="widget-container contact_sidebar">
                                                               <h3 class="widget-title-footer">Contact</h3>
                                                               <div class="contact_sidebar_wrap">
                                                                      <p class="widget_contact_addr"><i class="fas fa-home"></i>3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302</p>
                                                                      <p class="widget_contact_phone"><i class="fas fa-phone"></i><a href="tel:%28305%29+555-4446">(305) 555-4446</a></p>
                                                                      <p class="widget_contact_email"><i class="far fa-envelope"></i><a href="mailto:email@yourdomain.com">email@yourdomain.com</a></p>
                                                                      <p class="widget_contact_url"><i class="fas fa-desktop"></i><a href="http://demo1.wprentals.org/">WP Rentals</a></p>
                                                               </div>
                                                        </li>
                                                        <li id="wpestate_social_widget-1" class="widget-container social_sidebar">
                                                               <h3 class="widget-title-footer">Social Links:</h3>
                                                               <div class="social_sidebar_internal">
                                                                      <a href="#" target="_blank"><i class="fas fa-rss fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="#" target="_blank"><i class="fab fa-twitter fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-dribbble fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-google-plus-g fa-fw"></i></a><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                                               </div>
                                                        </li>
                                                 </ul>
                                          </div>
                                          {/* <!-- #second .widget-area --> */}

                                          <div id="third" class="widget-area col-md-4">
                                                 <ul class="xoxo">
                                                        <li id="wpestate_footer_latest_widget-2" class="widget-container latest_listings">
                                                               <h3 class="widget-title-footer">Latest Listings</h3>

                                                               <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="137">
                                                                      <div class="property_listing" data-link="./properties/huge-sunny-villa-east-side/">
                                                                             <div class="listing-unit-img-wrapper">
                                                                                    <a href="./../../../../properties/huge-sunny-villa-east-side/index.html"><img itemprop="image" src="./../../../../wp-content/uploads/2018/08/9-1-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                                                    <div class="price_unit_wrapper"></div>
                                                                             </div>

                                                                             <div class="title-container">
                                                                                    <div class="category_name">
                                                                                           <a itemprop="url" href="./../../../../properties/huge-sunny-villa-east-side/index.html" class="listing_title_unit">
                                                                                                  <span itemprop="name"> Huge Sunny Villa &#8211; East Side </span>
                                                                                           </a>
                                                                                    </div>

                                                                                    <div class="category_tagline"><a href="./../../../../area/east-side/index.html" rel="tag">East Side</a>,</div>

                                                                                    <div class="price_unit">€ 500<span class="pernight"> /night</span></div>
                                                                             </div>
                                                                      </div>
                                                               </div>

                                                               <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="119">
                                                                      <div class="property_listing" data-link="./properties/beautiful-cabin-simple-price/">
                                                                             <div class="listing-unit-img-wrapper">
                                                                                    <a href="./../../../../properties/beautiful-cabin-simple-price/index.html"><img itemprop="image" src="./../../../../wp-content/uploads/2018/08/4-1-1-1-scaled-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                                                    <div class="price_unit_wrapper"></div>
                                                                             </div>

                                                                             <div class="title-container">
                                                                                    <div class="category_name">
                                                                                           <a itemprop="url" href="./../../../../properties/beautiful-cabin-simple-price/index.html" class="listing_title_unit">
                                                                                                  <span itemprop="name"> Beautiful Cabin, Simple Price </span>
                                                                                           </a>
                                                                                    </div>

                                                                                    <div class="category_tagline"><a href="./../../../../area/brightwood/index.html" rel="tag">Brightwood</a>, <a href="./../../../../city/philadelphia/index.html" rel="tag">Philadelphia</a></div>

                                                                                    <div class="price_unit">€ 64<span class="pernight"> /night</span></div>
                                                                             </div>
                                                                      </div>
                                                               </div>

                                                               <div itemscope itemtype="http://schema.org/Product" class="listing_wrapper col-md-12 property_unit_v1 property_flex" data-org="12" data-listid="115">
                                                                      <div class="property_listing" data-link="./properties/victorian-bed-breakfast/">
                                                                             <div class="listing-unit-img-wrapper">
                                                                                    <a href="./../../../../properties/victorian-bed-breakfast/index.html"><img itemprop="image" src="./../../../../wp-content/uploads/2018/08/3-1-1-400x314.jpg" class="b-lazy img-responsive wp-post-image lazy-hidden" alt="image" /></a>
                                                                                    <div class="price_unit_wrapper"></div>
                                                                             </div>

                                                                             <div class="title-container">
                                                                                    <div class="category_name">
                                                                                           <a itemprop="url" href="./../../../../properties/victorian-bed-breakfast/index.html" class="listing_title_unit">
                                                                                                  <span itemprop="name"> Victorian Bed &#038; Breakfast </span>
                                                                                           </a>
                                                                                    </div>

                                                                                    <div class="category_tagline"><a href="./../../../../area/mattapan/index.html" rel="tag">Mattapan</a>, <a href="./../../../../city/boston/index.html" rel="tag">Boston</a></div>

                                                                                    <div class="price_unit">€ 65<span class="pernight"> /night</span></div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div class="latest_listings"></div>
                                                        </li>
                                                 </ul>
                                          </div>
                                          {/* <!-- #third .widget-area --> */}
                                   </div>
                                   {/* <!-- #footer-widget-area --> */}

                                   <div class="sub_footer">
                                          <div class="sub_footer_content">
                                                 <span class="copyright"> Copyright 2019 | WP Estate. All Rights Reserved. </span>

                                                 <div class="subfooter_menu"></div>
                                          </div>
                                   </div>
                            </footer>
                            {/* <!-- #colophon --> */}

                            <a href="#" class="backtop"><i class="fas fa-chevron-up"></i></a>
                     </div>
                     {/* <!-- end class container --> */}

                     <div class="social_share_wrapper social_share_half_map_on_right">
                            <a class="social_share share_facebook_side" href="https://www.facebook.com/wpestate" target="_blank"><i class="fab fa-facebook-f"></i></a>

                            <a class="social_share share_twiter_side" href="https://twitter.com/WPESTATE" target="_blank"><i class="fab fa-twitter"></i></a>

                            <a class="social_share share_linkedin_side" href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>

                            <a class="social_share share_pinterest_side" href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>

                            <a class="social_share share_instagram_side" href="#" target="_blank"><i class="fab fa-instagram"></i></a>

                            <a class="social_share share_youtube_side" href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                     </div>
              </div>
              {/* <!-- end website wrapper -->

              <!-- Modal --> */}
              <div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                            <div class="modal-content">
                                   <div class="modal-header">
                                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                          <h2 class="modal-title_big">
                                                 Log in or Sign up to continue
                                                 <h4 class="modal-title" id="myModalLabel">Please fill in the log in or register forms</h4>
                                          </h2>
                                   </div>

                                   <div class="modal-body">
                                          <div id="ajax_login_div" class="">
                                                 <div class="login_form" id="login-div">
                                                        <div class="loginalert" id="login_message_area"></div>

                                                        <div class="loginrow">
                                                               <input type="text" class="form-control" name="log" id="login_user" placeholder="Username" size="20" />
                                                        </div>

                                                        <div class="loginrow">
                                                               <input type="password" class="form-control" name="pwd" placeholder="Password" id="login_pwd" size="20" />
                                                        </div>

                                                        <input type="hidden" name="loginpop" id="loginpop" value="0" />
                                                        <input type="hidden" id="security-login" name="security-login" value="e724658239-1638969727" />

                                                        <button id="wp-login-but" class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" data-mixval="190">Login</button>
                                                        <div class="navigation_links">
                                                               <a href="#" id="reveal_register">Don&#039;t have an account?</a> |
                                                               <a href="#" id="forgot_password_mod">Forgot Password</a>
                                                        </div>
                                                 </div>
                                                 {/* <!-- end login div--> */}
                                                 <div class="login-links">
                                                        <div class="wpestate_social_login" id="facebooklogin" data-social="facebook"><i class="fab fa-facebook-f"></i> Login with Facebook</div>
                                                        <input type="hidden" class="wpestate_social_login_nonce" value="428ebbade6" />
                                                 </div>
                                                 {/* <!-- end login links--> */}
                                          </div>
                                          {/* <!-- /.ajax_login_div --> */}

                                          <div id="ajax_register_div" class="">
                                                 <div class="login_form shortcode-login">
                                                        <div class="loginalert" id="register_message_area"></div>

                                                        <div class="loginrow">
                                                               <input type="text" name="user_login_register" id="user_login_register" class="form-control" placeholder="Username" size="20" />
                                                        </div>
                                                        <div class="loginrow">
                                                               <input type="text" name="user_email_register" id="user_email_register" class="form-control" placeholder="Email" size="20" />
                                                        </div>
                                                        <div class="acc_radio">
                                                               <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                                                               <div class="radiolabel" for="acctype0">I only want to book</div>
                                                               <br />
                                                               <input type="radio" name="acc_type" id="acctype1" value="0" required />
                                                               <div class="radiolabel" for="acctype1">I want to rent my property</div>
                                                        </div>
                                                        <input type="checkbox" name="terms" id="user_terms_register_sh" />
                                                        <label id="user_terms_register_sh_label" for="user_terms_register_sh">I agree with <a href="./../../../../terms-and-conditions/index.html" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a> </label><button id="wp-submit-register" style={{marginTop: 10}} class="wpb_button wpb_btn-info wpb_btn-small wpestate_vc_button vc_button">Create an account</button>
                                                        <p id="reg_passmail">*A password will be e-mailed to you</p>
                                                        <input type="hidden" id="security-register" name="security-register" value="1d3cbbf3c8-1638969727" />
                                                 </div>
                                                 <div id="reveal_login"><a href="#">Already a member? Sign in!</a></div>
                                                 <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                          </div>

                                          <div class="login_form" id="forgot-pass-div_mod">
                                                 <div class="loginalert" id="forgot_pass_area_shortcode"></div>
                                                 <div class="loginrow">
                                                        <input type="text" class="form-control forgot_email_mod" name="forgot_email" id="forgot_email_mod" placeholder="Enter Your Email Address" size="20" />
                                                 </div>
                                                 <input type="hidden" id="security-login-forgot_wd" name="security-login-forgot_wd" value="85e46689b6" /><input type="hidden" name="_wp_http_referer" value="/2015/04/20/5-best-budget-vacations/" />
                                                 <input type="hidden" id="postid" value="0" />
                                                 <button class="wpb_button wpb_btn-info wpb_regularsize wpestate_vc_button vc_button" id="wp-forgot-but_mod" name="forgot">Reset Password</button>

                                                 <a href="#" id="return_login_mod">Return to Login</a>
                                          </div>
                                   </div>
                                   {/* <!-- /.modal-content --> */}
                            </div>
                            {/* <!-- /.modal-dialog --> */}
                     </div>
                     {/* <!-- /.modal --> */}
              </div>
              {/* <!-- /.login model --> */}
              <input type="hidden" id="wprentals_ajax_filtering" value="c7f2599346" /> 
              <input type="hidden" id="wpestate_ajax_log_reg" value="36cd982787" />
        </div>
    )
}
