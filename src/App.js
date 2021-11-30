import './vendors/bootstrap/css/bootstrap.min.css'
import {BrowserRouter, Route} from "react-router-dom";
import A6 from './components/a6/A6';
import A7 from './components/a7/A7';
import A8 from './components/a8/A8';

import { Link } from 'react-router-dom';
import './App.css';
import A9 from './components/a9/A9';

function App() {
  return (  
      <BrowserRouter>
        <div className="container">
        <Link to = "/a9/practice">
              Link to A9
          </Link>
          <br/>
          <Link to = "/a8/practice">
              Link to A8
          </Link>
          <br/>
          <Link to = "/a7/practice">
            Link to A7 
          </Link>
          <br/>
          <Link to = "/a6/practice">
            Link to A6
          </Link>
          <br/>
          <Route path={"/a7"}>
              <A7/>
          </Route> 
          <Route path={"/a6"}>
              <A6/>
          </Route>
          <Route path={"/a8"}>
              <A8/>
          </Route>
          <Route path={"/a9"}>
              <A9/>
          </Route>
        </div>
      </BrowserRouter>
  );
}
export default App;
