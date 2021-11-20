import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./ProfileScreen/EditProfileScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who: who, profile : profile})

const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a8/twitter/home"]} exact={true}  component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
                <Route path = "/a8/twitter/profile" exact={true} component={ProfileScreen}/>
                <Route path = "/a8/twitter/profile/editProfile" exact={true} component={EditProfileScreen}/>
            </div>
        </Provider>
    );
};
export default Build;