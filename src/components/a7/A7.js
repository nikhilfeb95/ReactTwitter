import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';

const A7 = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Route path={["/", "/a7", "/a7/practice"]}exact={true}>
            <Practice/>
      </Route>

      <Route path="/a7/twitter">
              <Build/>
      </Route>
   
    </div>
    </BrowserRouter>
  );
}

export default A7;