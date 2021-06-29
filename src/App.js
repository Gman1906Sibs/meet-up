import { Route, Switch } from "react-router-dom";
import AllEvents from './components/pages/AllEvents';
import Favorites from "./components/pages/Favorites";
import NewEvents from './components/pages/NewEvents';
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/new-event">
          <NewEvents />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>

      <Route path="/" exact>
          <AllEvents />
        </Route>

    </div>
    
  );
}

export default App;
