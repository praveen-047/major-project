import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
