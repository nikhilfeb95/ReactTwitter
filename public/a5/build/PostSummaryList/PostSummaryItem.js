const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item wd-post-items">
            <div class = "row" >
                <div class = "col-10 wd-title-white">
                    <div class = "row">
                        <span class = "wd-title">${post.topic}</span>
                    </div>
                    <div class = "row">
                        <span><h6 class = "wd-title-header d-inline">
                        <strong>${post.userName}</strong>
                        </h6>
                        <i class="fas fa-check-circle d-lg-inline"></i>
                        <span class="wd-title d-inline">-${post.time}</span>
                        </span>
                    </div>
                    <div class="row">
                        <h6>
                            <strong>
                                ${post.title}
                            </strong>
                        </h6>
                    </div>
                </div>
                <div class = "col-2">
                    <img src= "${post.image}" class="img-fluid rounded">
                </div>
            </div>
        </li>
        `);
}

export default PostSummaryItem;