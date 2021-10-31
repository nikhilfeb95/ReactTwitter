import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/ExploreComponents";
import HomeList from "./HomeScreen/HomeList";
import PostSummaryList from "./PostSummaryItem";

const Build = () => {
    return(
        <BrowserRouter>
            <div class="row mt-2">
                <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                    <Route path = {["/a6/twitter/explore", "/a6/build"]} exact={true}>
                        <NavigationSidebar active="explore"/>
                    </Route>
                    <Route path = "/a6/twitter/home" exact={true}>
                        <NavigationSidebar active="home"/>
                    </Route>
                </div>
                <div class = "col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
                    <Route path = {["/a6/twitter/explore", "/a6/build"]} exact={true}>
                        <ExploreComponent/>
                    </Route>
                    <Route path = "/a6/twitter/home" exact={true}>
                        <HomeList/>
                    </Route>
                </div>
                <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <Route path = {["/a6/twitter/explore", "/a6/build"]} exact={true}>
                    <WhoToFollowList/>
                </Route>
                <Route path = "/a6/twitter/home" exact={true}>
                    <PostSummaryList/>
                </Route>
                </div>  
            </div>
        </BrowserRouter>
    )
};
export default Build;