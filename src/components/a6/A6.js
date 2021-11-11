import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';

const A6 = () => {
  return (
    <BrowserRouter>
        <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
              <Practice/>
        </Route>

        <Route path="/a6/twitter" >
                <Build/>
        </Route>
    </BrowserRouter>
  );
}

export default A6;