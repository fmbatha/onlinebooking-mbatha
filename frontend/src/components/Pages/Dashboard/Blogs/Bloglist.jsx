import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Helmet} from 'react-helmet'


const Bloglist = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
        getBlogs();
    }, []);

	const getBlogs = async () => {
        const response = await axios.get('http://localhost:3003/blogs');
        setBlogs(response.data);
       
    }
    const deleteBlogs = async (id) => {
      await axios.delete(`http://localhost:3003/blogs/${id}`);
      getBlogs();
  }
	
	return (
	
		<div class='text-left'>



			<div class='app-admin-wrap layout-sidebar-large'>
				<Sidebar />
				<Topbar />
				<div class='main-content-wrap sidenav-open d-flex flex-column'>
			
					{/* <!-- ============ Body content start ============= --> */}
					<div class='main-content'>
						<section class='content-header'>
							<div class="row">
								<div class="col-4">
									<h3>
										Blog
										<small>Control panel</small>
									</h3>

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

					
                        <div class="box-body">
              <div class="table-responsive">
              <table class="display table table-striped table-bordered" id="zero_configuration_table"  width="100%">
                    <thead>
                    <tr>
                      <th>ID </th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Blog Content</th>
                      <th>Posted by</th>
                      <th>Posted on</th>
                      <th>status</th>
                      <th width="60px">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                          {blogs.map((val, index) => (
                            <tr key ={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.blog_img}</td>
                            <td>{val.title}</td>
                            <td>{val.blog_content}</td>
                            <td>{val.posted_by}</td>
                            <td>{val.createdAt}</td>
                            <td>
                          <Link to="javascript:void(0)" id="1" onclick="Activate_Deactive_blog(this.id,'Deactive')"><span class="label label-primary">Active</span>
                                                          
                            </Link></td>
                            <td>
                              <Link to="/blog_description" class="btn btn-xs btn-primary"><i class="glyphicon glyphicon-eye-open" title="View"></i> </Link>
                              <Link to={`/edit/${val.id}`} class="btn btn-xs btn-default"> <i class="glyphicon glyphicon-edit" title="Edit"></i>  </Link>
                              <Link onClick={ () => deleteBlogs(val.id) } type="button" id="1" class="btn btn-xs btn-danger"><i class="glyphicon glyphicon-trash" title="Delete"></i> </Link>           
                            </td>
                        </tr>
                            
                          ))}                   
                    </tbody>
                    
                  </table>
                  
              </div>
          </div>

						
		
					</div>
				</div>
			</div>

            <Helmet>
    <script src="/dist-assets/js/plugins/jquery-3.3.1.min.js"></script>
    <script src="/dist-assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="/dist-assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="/dist-assets/js/scripts/script.min.js"></script>
    <script src="/dist-assets/js/scripts/sidebar.large.script.min.js"></script>
    <script src="/dist-assets/js/scripts/sidebar.script.min.js"></script>
    <script src="/dist-assets/js/plugins/echarts.min.js"></script>
    <script src="/dist-assets/js/scripts/echart.options.min.js"></script>
    <script src="/dist-assets/js/scripts/dashboard.v1.script.min.js"></script>
</Helmet>
		</div>
	);

}

export default Bloglist;
