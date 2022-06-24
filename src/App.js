import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bootstrap Form Version-3</h1>
      <form class = "form-horizontal" role = "form">
   
          <div class = "form-group">
              <label for = "firstname" class = "col-sm-2 control-label">First Name</label>
            
              <div class = "col-sm-10">
                <input type = "text" class = "form-control" id = "firstname" placeholder = "Enter First Name" />
              </div>
          </div>
          
          <div class = "form-group">
              <label for = "lastname" class = "col-sm-2 control-label">Last Name</label>
            
              <div class = "col-sm-10">
                <input type = "text" class = "form-control" id = "lastname" placeholder = "Enter Last Name" />
              </div>
          </div>

          <label for = "name">Gender </label>

          <div class = "radio">
            <label>
                <input type = "radio" name = "optionsRadios" id = "optionsRadios1" value = "option1" checked /> Female
                
            </label>
          </div>


          <div class = "radio">
            <label>
                <input type = "radio" name = "optionsRadios" id = "optionsRadios2" value = "option2" /> 
                Male
            </label>
          </div>

          <label for = "name">Nationality</label>

          <div class = "form-group">
            <select class = "form-control">
              <option>Malaysian</option>
              <option>Non-Malaysian</option>
            </select>

            
        </div>
          
          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
            <label class="form-check-label" for="form2Example33">
              Remember me
            </label>
          </div>
          
          <div class = "form-group">
              <div class = "col-sm-offset-2 col-sm-10">
                <button type = "submit" class = "btn btn-default">Submit</button>
              </div>
          </div>
          
        </form>
    </div>
  );
}

export default App;
