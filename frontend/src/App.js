import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Avatars from "./components/Avatar"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/avatars" component={Avatars}/>
    </Switch>
  </BrowserRouter>
);

export default App;
