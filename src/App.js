import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Bootstrap Form Version-3</h1>
      <form className = "form-horizontal" role = "form">
   
          <div className = "form-group">
              <label for = "firstname" className = "col-sm-2 control-label">First Name</label>
            
              <div className = "col-sm-6">
                <input type = "text" className = "form-control" id = "firstname" placeholder = "Enter First Name" />
              </div>
          </div>
          
          <div className = "form-group">
              <label for = "lastname" className = "col-sm-2 control-label">Last Name</label>
            
              <div className = "col-sm-6">
                <input type = "text" className = "form-control" id = "lastname" placeholder = "Enter Last Name" />
              </div>
          </div>

          <div className = "form-group">
              <label for = "lastname" className = "col-sm-2 control-label">Age</label>
            
              <div className = "col-sm-2">
                <input type = "text" className = "form-control" id = "age" placeholder = "Enter your Age" />
              </div>
          </div>

          <div className='form-group'>
            <label for = "name" className = "col-sm-2 control-label">Gender </label>

            <div className = "col-sm-2 radio">
              <label>
                  <input type = "radio" name = "optionsRadios" id = "optionsRadios1" value = "female" checked /> Female    
              </label>
            </div>

            <div className = "col-sm-2 radio">
            <label>
                <input type = "radio" name = "optionsRadios" id = "optionsRadios2" value = "male" /> Male
            </label>
          </div>
          </div>

          <div className = "form-group">
            <label for = "name" className = "col-sm-2 control-label" >Nationality</label>
              <div className = " col-sm-6 form-group">
                <select className = "col-sm-6  form-control">
                  <option>Malaysian</option>
                  <option>Non-Malaysian</option>
                </select>
              </div>
          </div>


          <div class="form-group">
            <div class="col-sm-4 form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
        </div>
      <button class="pull-left btn btn-primary" type="submit">Submit form</button>
          
        </form>
    </div>
  );
}

export default App;
