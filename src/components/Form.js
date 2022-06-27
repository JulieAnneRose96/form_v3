import '../App.css';
import React from 'react';

const UserForm = () => {
    return (
        <div className='App'>
            
          <form className = " form-horizontal" role = "form">
            <div>
                    <div>
                    <h3 className='title-margin'>User Form</h3>
                    </div>
        
                    <div className = "form-group">
                        <label for = "firstname" className = "col-xs-2 col-md-2 control-label">First Name</label>
                        <div className = "col-xs-12 col-sm-4 col-md-4">
                            <input type = "text" className = "form-control" id = "firstname" placeholder = "Enter First Name" />
                        </div>

                        <label for = "lastname" className = "col-xs-2 col-md-2 control-label">Last Name</label>
                        
                        <div className = "col-xs-12 col-sm-4 col-md-4">
                            <input type = "text" className = "form-control" id = "lastname" placeholder = "Enter Last Name" />
                        </div>
                    </div>
                    
                    <div className = "form-group">
                        <label for = "email" className = "col-xs-2 col-md-2 control-label">Email</label>
                        
                        <div className = "col-xs-12 col-sm-6 col-md-6">
                            <input type = "text" className = "form-control" id = "email" placeholder = "Enter Email Address" />
                        </div>
                    </div>

                    <div className = "form-group">
                        <label for = "lastname" className = "col-xs-12 col-sm-2 col-md-2 control-label">Age</label>
                        
                        <div className = "col-sm-3">
                            <input type = "text" className = "form-control" id = "age" placeholder = "Enter your Age" />
                        </div>

                        <label for = "name" className = "col-xs-2 col-md-2 control-label">Gender </label>

                        <div className = "col-xs-12 col-sm-2 col-md-2 radio">
                        <label>
                            <input type = "radio" name = "optionsRadios" id = "optionsRadios1" value = "female" checked /> Female    
                        </label>
                        </div>

                        <div className = "col-xs-12 col-sm-2 col-md-2 radio">
                        <label>
                            <input type = "radio" name = "optionsRadios" id = "optionsRadios2" value = "male" /> Male
                        </label>
                        </div>
                    </div>


                    <div className = "form-group">
                        <label for = "email" className = "col-xs-2 col-md-2 control-label">Address</label>
                        
                        <div className = "col-xs-12 col-sm-10 col-md-10">
                            <input type = "text" className = "form-control" id = "address" placeholder = "Enter Address" />
                        </div>
                    </div>

                    <div className = "form-group">
                        <label for = "email" className = "col-xs-2 col-md-2 control-label">City</label>
                        
                        <div className = "col-xs-12 col-sm-4 col-md-4">
                            <input type = "text" className = "form-control" id = "city" placeholder = "Enter City" />
                        </div>

                        <label for = "email" className = "col-xs-2 col-md-2 control-label">State</label>
                        
                        <div className = "col-xs-12 col-sm-4 col-md-4">
                            <input type = "text" className = "form-control" id = "state" placeholder = "Enter State" />
                        </div>

                        
                    </div>

                    <div className = "form-group">
                    <label for = "email" className = "col-xs-2 col-md-2 control-label">Zip Code</label>
                        
                        <div className = "col-xs-12 col-sm-4 col-md-4">
                            <input type = "text" className = "form-control" id = "zipcode" placeholder = "Enter Zip Code" />
                        </div>

                        <label for = "name" className = "col-xs-2 col-md-2 control-label" required>Nationality</label>
                        <div className = " col-xs-12 col-sm-4 col-md-4 form-group">
                            <select className = "col-xs-12 col-sm-4 col-md-4  form-control">
                            <option>Malaysian</option>
                            <option>Non-Malaysian</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                    <label for="exampleFormControlFile1" className="col-xs-2 col-md-2 form-label">Upload Picture</label>
                        <div className="mb-3 col-xs-12 col-sm-4 col-md-4 ">
                        
                        <input type="file" className="col-sm-4 form-control " id="exampleFormControlFile1" />
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
            
        </div>
        
      );
    }
    export default UserForm;

