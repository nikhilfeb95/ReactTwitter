import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class = "wd-search-and-tabs">
        <div class="row">
            <div class = "col-11 wd-search-bar">
                <i class="fas fa-search ms-3"></i>
                <input type="text" class="form-control rounded-pill bg-dark ms-2" placeholder="Search Twitter">  
            </div>
            <div class="col-1 pt-1">
                <i class="fas fa-cog mt-2 wd-cog"></i>
            </div>
        </div>
            <div class="row pe-5">
                <ul class="nav nav-tabs mt-2 ms-3 ">
                    <li class="nav-item">
                        <a class="nav-link active wd-tabs" href="#">For You</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link wd-tabs" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-tabs" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-tabs" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-xxl-inline d-xl-inline">
                        <a class="nav-link wd-tabs" href="#" tabindex="-1">Entertainment</a>
                    </li>
                </ul> 
            </div>
    </div>
           <!-- image with overlaid text -->
           <div class = "row mt-3 ms-0 ps-0">
                <div class = "row wd-image-container ms-0 ps-0 wd-img">
                    <img src="../Images/SpaceX.png" class="img-fluid p-0 m-0">
                    <div class="bottom-left"><p class = "wd-image-title">Space X's Starship</p></div>
                </div>
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;
