const NavigationSidebar = (active) => {
    return(`
        <div class = "list-group">
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item wd-left-logos ${active === 'home' ? 'active' : '' }" 
            href = "../HomeScreen/index.html">
                <i class="fas fa-home"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Home</span>
            </a>
            <a class="list-group-item wd-left-logos ${active === 'explore' ? 'active' : '' }" 
            href = "../ExploreScreen/explore.html">
                <strong><i class="fas fa-hashtag"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Explore</span></strong>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-bell"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Notifications</span>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-envelope"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Messages</span>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-bookmark"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Bookmarks</span>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-list-ul"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Lists</span>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-user"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">Profile</span>
            </a>
            <a class="list-group-item wd-left-logos" href = "#">
                <i class="fas fa-ellipsis-h"></i><span class = "ps-2 d-none d-xl-inline d-xxl-inline">More</span>
            </a>
            <div class="d-grid mt-2">
                <button type="button" class="btn btn-lg btn-primary rounded-pill mt-2 d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none"><strong>Tweet</strong></button>
                <button type="button" class="btn btn-lg btn-primary rounded-pill mt-2 d-none d-sm-block d-xxl-none d-xl-none d-lg-none d-md-none"><i class="fab fa-twitter"></i></button>
            </div>
        </div>
    `);
}
export default NavigationSidebar;
