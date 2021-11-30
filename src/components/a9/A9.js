import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';

const A9 = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Route path={["/", "/a9", "/a9/practice"]}exact={true}>
            <Practice/>
      </Route>

      <Route path="/a9/twitter">
              <Build/>
      </Route>
   
    </div>
    </BrowserRouter>
  );
}

export default A9;