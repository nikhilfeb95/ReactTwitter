import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';
import HelloWorld from './HelloWorld';
const A6 = () => {
  return (
    <BrowserRouter>
        <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
              <Practice/>
        </Route>

        <Route path="/a6/twitter" >
                <Build/>
        </Route>

        <Route path = "/a6/hello">
            <HelloWorld/>
        </Route>
    </BrowserRouter>
  );
}

export default A6;