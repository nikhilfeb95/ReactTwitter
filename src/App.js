import './vendors/bootstrap/css/bootstrap.min.css'
import Build from './components/a6/Build';
import Practice from './components/a6/Practice';
import HelloWorld from './components/a6/HelloWorld';
import ExploreScreen from './components/a6/Build/ExploreScreen/ExploreScreen';
import HomeScreen from './components/a6/Build/HomeScreen/HomeScreen';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <Route path="/a6/hello" exact={true}>
              <HelloWorld/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
              <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
              <Build/>
          </Route>
          <Route path = "/a6/twitter/home">
              <HomeScreen />
          </Route>
          <Route path = "/a6/twitter/explore">
              <ExploreScreen/>
          </Route>
      </div>
    </BrowserRouter>

  );
}

export default App;
