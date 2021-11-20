import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';

const A8 = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Route path={["/", "/a8", "/a8/practice"]}exact={true}>
            <Practice/>
      </Route>

      <Route path="/a8/twitter">
              <Build/>
      </Route>
   
    </div>
    </BrowserRouter>
  );
}

export default A8;