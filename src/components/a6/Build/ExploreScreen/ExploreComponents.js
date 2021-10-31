import React from "react";
import PostSummaryList from "../PostSummaryItem";
import './explore.css'
const ExploreComponent = () => {
    return(
     <>   
        <div className = "wd-search-and-tabs">
            <div className="row">
                <div className = "col-11 wd-search-bar">
                    <i className="fas fa-search ms-3"></i>
                    <input type="text" className="form-control rounded-pill bg-dark ms-2" placeholder="Search Twitter" />  
                </div>
                <div className="col-1 pt-1">
                    <i className="fas fa-cog mt-2 wd-cog"></i>
                </div>
            </div>
                <div className="row pe-5">
                    <ul className="nav nav-tabs mt-2 ms-3 ">
                        <li className="nav-item">
                            <a className="nav-link active wd-tabs" href="/#">For You</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link wd-tabs" href="/#">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-tabs" href="/#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-tabs" href="/#">Sports</a>
                        </li>
                        <li className="nav-item d-none d-xxl-inline d-xl-inline">
                            <a className="nav-link wd-tabs" href="/#" tabindex="-1">Entertainment</a>
                        </li>
                    </ul> 
                </div>
        </div>

            <div className = "row mt-3 ms-0 ps-0">
                    <div className = "row wd-image-container ms-0 ps-0 wd-img">
                        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1" className="img-fluid p-0 m-0" />
                        <div className="bottom-left"><p className = "wd-image-title">Space X's Starship</p></div>
                    </div>
                    <PostSummaryList/>
            </div>
    </>
    );
}
export default ExploreComponent;
