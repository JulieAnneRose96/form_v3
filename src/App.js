import logo from './logo.svg';
import './App.css';
import TableUser from './components/Table'
import UserForm from './components/Form'
import UserLogin from './components/login'

function App() {
  return (
    <div className='App container '>
      <h1 className='title-margin'>Bootstrap Form Version-3</h1>
      
        <UserLogin />
      
        <UserForm />
       
        <TableUser />
    </div>
    
  );
}

export default App;
