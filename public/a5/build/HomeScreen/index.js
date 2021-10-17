import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "./PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function($) {
    $('#wd-home').append(`
    <div class = "row mt-2">
        <div class="col-2 col-md-2 col-lg-2 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        <div class = " col-6 col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
            ${PostList()}
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block d-xl-block d-xxl-block col-md-0 col-sm-0 col-xs-0 wd-right-corner">
            ${PostSummaryList()}
        </div>
    </div>
    `);
})($);