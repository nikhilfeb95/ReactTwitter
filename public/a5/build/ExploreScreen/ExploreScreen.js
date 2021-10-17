import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponents.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-2 col-xl-2">
            ${NavigationSidebar('explore')}
        </div>
        <div class = "col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
            ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
