import React, {useState, useEffect} from 'react'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Blogs =()  =>{
    const [title, setTitle] = useState('');
    const [blog_img, setBlog_img] = useState('')
    const [blog_content, setBlog_content] = useState('')
  
  
  
    const history = useHistory();
  
    const saveBlogs = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3003/blogs',{
            title: title,
            blog_img: blog_img,
            blog_content: blog_content

                 
        });
        history.push("/bloglist");
    }


  return (
  
        <div class='app-admin-wrap layout-sidebar-large'>
			    <Topbar />
                <Sidebar />
			
		<div class='main-content-wrap sidenav-open d-flex flex-column'>
        <div class="row">
								<div class="col-4">
									<h5>
										Blog List
										<small>Control Panel</small>
									</h5>

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
                            <div class="box-header">
                <div class="row">
                    <div class="col-sm-8">
                        <h3 class="box-title">Add New Blog
                      </h3><br/>
                      <small>Please don not refresh page while adding blog. If you refresh page then you loose "Auto Save " property</small>
                    </div>
                    <div class="col-sm-4">
                         <Link to="/bloglist" class="btn btn-primary pull-right"><i class="fa fa-eye"></i> View Blogs</Link>
                    </div>
                </div>
              
             
               
          	<input type="hidden" name="_token" value="SfAplavsWLoHXXQ5ZYysNwwFWLe0NEQbGPB7EeSj"/>
                   <div class="form-group">
                  <br/>
                        <label>Blog title</label>
                        <input type="hidden" class="form-control" name="title" id="title" />
                        
                        <input type="hidden" class="form-control" name="posted_by" id="posted_by" value=""/>
                  <input type="text" class="form-control" name="title" id="title" placeholder="Enter Blog title" value={title} onChange={ (e) =>  setTitle(e.target.value)} required=""/>
                  
                 
              </div>
              {/* <div class="form-group">
                  <label>Blog Category</label>
                 <select name="blog_cat" class="form-control">
                     <option value=""> Select category</option>
                     <option value="cat_1"> Cat 1</option>
                     <option value="cat_2"> Cat 2</option>
                     <option value="cat_3"> Cat 3</option>
                 </select>
              </div> */}
              
              <div class="form-group">
                  <label>Blog Image <small>(Image Size should be approx 400px*300px )</small></label>
                  <input type="file" class="form-control" name="blog_img" value={blog_img} onClick = {(e) => setBlog_img(e.target.value)} placeholder="Enter Blog title" required=""/>
              </div>
              {/* <!-- tools box --> */}
              <div class="box-body pad">
              <textarea id="editor1" class="blog_content" name="blog_content" rows="20" value = {blog_content} onChange= {(e) => setBlog_content(e.target.value)} placeholder="Enter Blog description here ">               </textarea>
              
             
              <br />
            
            </div>
              <div class="pull-right box-tools">     
              <div class="float-lg-left">
                    <Link class='btn btn-primary' onClick={saveBlogs} to='/bloglist'>
                        Submit
                    </Link>
                </div> 
              </div>
              {/* <!-- /. tools --> */}
            </div>

    </div>
    </div>
  )
}

export default Blogs