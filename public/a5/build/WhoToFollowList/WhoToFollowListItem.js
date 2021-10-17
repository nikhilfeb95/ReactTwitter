const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item wd-left-logos">
        <div class = "row align-items-center">
            <div class = "col-2 me-0 pe-0">
                <img src="${who.avatarIcon}" class="img-fluid rounded-circle wd-follow-icons 
                img-circle">
            </div>
            <div class = "col-6 ps-0">
                <div class="row pb-0 mb-0">
                    <span class="text-nowrap"><h6 class = "wd-title-header d-inline">
                        <strong>${who.userName}</strong>
                    </h6>
                    <i class="fas fa-check-circle d-lg-inline"></i>
                    </span>  
                </div>
                <div class = "row pt-0 mt-0">
                    <span class = "wd-title">@${who.handle}</span>
                </div>
            </div>
            <div class = "col-4 align-items-center">
                <button class="btn btn-primary rounded-pill"><strong>Follow</strong></button>
            </div>
        </div>
    </li>
`);

}

export default WhoToFollowListItem;