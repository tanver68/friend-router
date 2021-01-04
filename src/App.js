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
import FriendDetail from './Componants/FriendDetail/FriendDetail';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/friend/:friendId'>
            {/* akhane dynamicaly data pache {prothom ongsota friend path e jabe and 2nd ongso dynamicaly change hobe tay avabe lakha hoyece (:friendId) friendId akta variable ata deya amra dynamic id detact korci} */}

           <FriendDetail></FriendDetail>
           
           {/* dynamicaly click korle akhane jabe mane ay path a jabe ,akhn akhane amra oy id er information dakhabo tar jonno react router er (url parameters) ar (useParams) use korbo */}
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
