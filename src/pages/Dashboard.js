import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../dashboard.css';

class Dashboard extends Component {

  render() {
      return (
        <div class="d-flex"  id="wrapper">

    
    <div class=" border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Logo</div>
      <div class="list-group list-group-flush">
        <Link to ="/" class="list-group-item list-group-item-action menulist"><i class="fa fa-fw fa-home fa-lg"></i>Home</Link>
        <Link to ="/dashboard" class="list-group-item list-group-item-action menulist"><i class="fa fa-fw fa-address-book fa-lg"></i>Accounts</Link>
        <Link to ="/dashboard" class="list-group-item list-group-item-action menulist"><i class="fa fa-fw fa-bell-o fa-lg"></i>Alerts</Link>
        <Link to ="/dashboard" class="list-group-item list-group-item-action menulist"><i class="fa fa-fw fa-history fa-lg"></i>Action Logs</Link>
        <Link to ="/dashboard" class="list-group-item list-group-item-action menulist"><i class="fa fa-fw fa-question fa-lg"></i>Help</Link>
      </div>
    </div>
   
    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light border-bottom">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
          <Link to ="/" class="nav-link"> <i class="fa fa-fw fa-home"></i>Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
          <Link to ="/dashboard" class="nav-link"><i class="fa fa-fw fa-address-book"> </i>Accounts</Link>
          </li>
          <li class="nav-item">
          <Link to ="/dashboard" class="nav-link"><i class="fa fa-fw fa-bell-o"></i>Alerts</Link>
          </li>
          <li class="nav-item">
          <Link to ="/dashboard" class="nav-link"><i class="fa fa-fw fa-history"></i>Action Logs</Link>
          </li>
          <li class="nav-item">
          <Link to ="/dashboard" class="nav-link"><i class="fa fa-fw fa-question"></i>Help</Link>
          </li>
          </ul>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
          <i class="fa fa-user-circle-o fa-2x"></i>
          </li>
            <li class="nav-item dropdown">
              <Link to ="/dashboard" class="nav-link dropdown-toggle">
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid">
      <div class="row">
                    <div class="col-md-5">
                    <div class="card">
                            <div class="header">
                                <h4 class="title">Client&nbsp;Details</h4>
                                
                            </div>
                            <table class="table table-bordered table-striped">
                                    <thead>
                                      <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Client Name</th>
                                        <th scope="col">Project Details</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>It is a long established fact </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>It is a long established fact </td>
                                        
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>It is a long established fact </td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                  </div>
                                  <div class="card">
                            <div class="header">
                                <h4 class="title">Transactions</h4>
                                
                            </div>
                                  <table class="table  table-bordered table-striped">
                                  <thead>
                                    <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Due Date</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Mark</td>
                                      <td>03/11/2019</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Jacob</td>
                                      <td>18/06/2019</td>
                                      
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Larry</td>
                                      <td>27/7/2019</td>
                                      
                                    </tr>
                                  </tbody>
                                </table>
                       </div>
                        </div>
                    <div class="col-md-7">
                    <div class="card invoice">
                    <ul class="tabs">
        <li class="tab current" data-tab="tab-1">
            <div class="cons">
         <i class="fa fa-file-text-o"></i></div>Documents</li>
         <li  data-tab="tab-2">
            <div class="cons">
         <i class="fa fa-money"></i></div>Invoices</li>
         <li  data-tab="tab-3">
            <div class="cons">
         <i class="fa fa-comments-o"></i></div>Messages</li>
         <li  data-tab="tab-4">
            <div class="cons">
         <i class="fa fa-cloud-upload"></i></div>Uploads</li>
         </ul>
         <div class="tabline">
         <div class="add_new">
        <p><Link to ="">+ Add New</Link></p>
    </div>
    <div class="add_old">
       <div class="search">
  <span ><i class="fa fa-search"></i></span>
  <input class="searchbar" placeholder="Search here" />
</div>
    </div>
    
</div>
         <div id="tab-1" class="tab-content tab current">

                            <table class="table table-bordered table-striped">
                                    <thead>
                                      <tr>
                                        <th scope="col">Document Name</th>
                                        <th scope="col">Document Details</th>
                                        <th scope="col"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td >UnCompleted Profile</td>
                                        <td>It is a long established fact that a reader</td>
                                        <td><i class="fa fa-ellipsis-v"></i></td>
                                      </tr>
                                      <tr>
                                      <td >UnCompleted Profile</td>
                                      <td>It is a long established fact that a reader</td>
                                      <td><i class="fa fa-ellipsis-v"></i></td>
                                      </tr>
                                      <tr>
                                      <td >UnCompleted Profile</td>
                                      <td>It is a long established fact that a reader</td>
                                      <td><i class="fa fa-ellipsis-v"></i></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                   
                            </div>
                            <div id="tab-2" class="tab-content">
                            </div>
                            
                            
                            <div id="tab-3" class="tab-content">
                               
                            </div>
                            
                            <div id="tab-4" class="tab-content">
                               
                               
                            </div>
                        </div>
                            </div>
            </div> 
      
      </div>
    </div>
  </div>

    );
  }
}

export default Dashboard;