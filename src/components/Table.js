import '../App.css';
import React from 'react';

const TableUser = () => {
    return (
        <div className='App '>
            
          <form className = " form-horizontal" role = "form">
    
            <div>
              <div>
              <h3 className='title-margin'>User Details</h3>
              </div>
            
                  <table className = "col-xs-12 col-sm-8 col-md-8 table table-hover ">
                      
                      
                      <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Nationality</th>
                          </tr>
                      </thead>
                      
                      <tbody>
                          <tr>
                            <td>Suzy</td>
                            <td>Hanry</td>
                            <td>suzy123@</td>
                            <td>23</td>
                            <td>Female</td>
                            <td>Malaysian</td>
                          </tr>
                          
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>John123@</td>
                            <td>35</td>
                            <td>Male</td>
                            <td>Non-Malaysian</td>
                          </tr>
                          
                          <tr>
                            <td>Uma</td>
                            <td>Pume</td>
                            <td>Pume123@</td>
                            <td>32</td>
                            <td>Female</td>
                            <td>Non-Malaysian</td>
                          </tr>
                          
                      </tbody>
                    </table>
              </div>
          
              
            </form>
            
        </div>
        
      );
    }
    export default TableUser;

