import './vendors/bootstrap/css/bootstrap.min.css'
import Practice from './components/a7/Practice';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './components/a7/Build/'
import A6 from './components/a6/A6';
import A7 from './components/a7/A7';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (  
      <BrowserRouter>
        <div className="container">
          <Link to = "/a7/practice">
            Link to A7 
          </Link>
          <Route path={"/a7"}>
              <A7/>
          </Route> 
          <Link to = "/a6/practice">
            Link to A6
          </Link>
          <Route path={"/a6"}>
              <A6/>
          </Route>
        </div>
      </BrowserRouter>
  );
}
export default App;
