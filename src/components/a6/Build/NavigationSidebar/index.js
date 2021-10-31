import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <div classNameName = "list-group">
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fab fa-twitter"></i>
            </a>
            <Link to ="/a6/twitter/home" className={`list-group-item wd-left-logos ${active === 'home' ? 'active' : '' }`} 
             href = "../HomeScreen/index.html">
                <i className="fas fa-home"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Home</span>
            </Link>
            <Link to = "/a6/twitter/explore" className={`list-group-item wd-left-logos ${active === 'explore' ? 'active' : '' }`} 
            href = "../ExploreScreen/explore.html">
                <strong><i className="fas fa-hashtag"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Explore</span></strong>
            </Link>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-bell"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Notifications</span>
            </a>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-envelope"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Messages</span>
            </a>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-bookmark"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Bookmarks</span>
            </a>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-list-ul"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Lists</span>
            </a>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-user"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">Profile</span>
            </a>
            <a className="list-group-item wd-left-logos" href = "/#">
                <i className="fas fa-ellipsis-h"></i><span className = "ps-2 d-none d-xl-inline d-xxl-inline">More</span>
            </a>
            <div className="d-grid mt-2">
                <button type="button" className="btn btn-lg btn-primary rounded-pill mt-2 d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none"><strong>Tweet</strong></button>
                <button type="button" className="btn btn-lg btn-primary rounded-pill mt-2 d-none d-sm-block d-xxl-none d-xl-none d-lg-none d-md-none"><i className="fab fa-twitter"></i></button>
            </div>
        </div>
    );
}
export default NavigationSidebar;
