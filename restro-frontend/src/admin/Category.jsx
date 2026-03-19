import React from 'react'
import Sidebar from '../components/Sidebar' 
import Header from '../components/Header'
import Footer from '../components/Footer'

function Category() {
  return (
    <>
      <div class="content-wrapper">
        <div class="page-header">
          <h3 class="page-title"> Cataegory Table </h3>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Category Table</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Category Data</h4>
                <p className="card-description"> 
                </p>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Name </th>
                        <th> Description </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                          
                        </td>
                        <td> </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td> </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td>  </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td>  </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td>  </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td>  </td>
                        
                      </tr>
                      <tr>
                        <td className="py-1">
                        </td>
                        <td>  </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
