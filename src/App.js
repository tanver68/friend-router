import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componants/Home/Home';
import NoMatch from './Componants/NoMatch/NoMatch';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route exact path='/'>
             <Home />
        </Route>
        <Route path='*'>
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
