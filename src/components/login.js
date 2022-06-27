import '../App.css';
import React from 'react';

const UserLogin = () => {
    return (
        <div className='App'>
         
          <form className = "form-horizontal" role = "form">
              <div>
                <h3 className='title-margin'>User Login</h3>
              </div>

      
              <div className="form-group">
                <label for="inputEmail3" className="col-xs-2 col-md-4 control-label">Email</label>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputPassword3" className="col-xs-2 col-md-4 control-label">Password</label>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <div className=" col-xs-12 col-md-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12 col-md-10">
                  <button type="submit" className="btn btn-default">Sign in</button>
                </div>
              </div>

          
              
            </form>
            
        </div>
        
      );
    }
    export default UserLogin;

