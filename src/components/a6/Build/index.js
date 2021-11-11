import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Build = () => {
    return(
        <div>
            <Route path={["/", "/a6/twitter/home", "/a6/twitter"]} exact={true}  component={HomeScreen}/>
            <Route path="/a6/twitter/explore" exact={true} component={ExploreScreen}/>
        </div>
    );
};
export default Build;