import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ExercisePage from "./components/ExercisePage";
import ExercisePage2 from "./components/ExercisePage/two";
import ExercisePage3 from "./components/ExercisePage/three";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/1">
          <ExercisePage />
        </Route>
        <Route exact path="/2">
          <ExercisePage2 />
        </Route>
        <Route exact path="/3">
          <ExercisePage3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
