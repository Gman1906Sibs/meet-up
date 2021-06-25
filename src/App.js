import { Route, Switch } from "react-router-dom";
import AllMeetups from './components/pages/AllMeetups';
import Favorites from './components/pages/Favorites';
import NewMeetups from './components/pages/NewMeetups';
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>

      <Route path="/" exact>
          <AllMeetups />
        </Route>

    </div>
    
  );
}

export default App;
