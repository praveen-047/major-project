import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Avatars from "./components/Avatars"
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/avatars" component={Avatars}/>
      <ProtectedRoute exact path='/' component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default App;
