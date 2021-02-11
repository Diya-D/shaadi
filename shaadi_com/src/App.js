import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Home from './home';
import Register from './registration';
import Login  from './login'
import Register2 from './reg2';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Switch>
   
     <Route path="/" exact={true}><Login/></Route>
     <Route path="/home"><Home/></Route>
     <Route path="/register"><Register/></Route>
     <Route path="/register2"><Register2/></Route>
    
     
     
   </Switch>
   </div>
 
   </BrowserRouter>
  
  );
}

export default App;
