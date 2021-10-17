import hideLink from "./hideLink.js";

const  PostListItem = (post) => {
    return(`         
        <div class="wd-row">
            <div class="wd-col-twentyPercent col-2 ps-2">
                <img src="${post.profilePic}" class="wd-col-twentyPercent">
            </div>
            <div class="wd-col-eightyPercent col-10">
                <div class="wd-author">
                    <p id="author-name">${post.userName}</p>
                    <p id="author-handle">${post.userHandle}</p>
                    <p id="author-date-post">${post.time}</p>
                </div><br>
                <div class="wd-content">
                    <p> ${post.postPreStatus} <a href="#" class = "wd-status-link">${post.statusLink}</a> ${post.postPostStatus}</p>
                </div>
                <div class="wd-border wd-main-image">
                    <div>
                        <img src="${post.postImage}" class="img-fluid">
                    </div>
                    ${hideLink(post)}
                </div>
                <div class="row wd-post-response">
                    <div class="col-3 wd-single-response">
                        <a href="#">
                            <div class = "row">
                                <div class = "col-3">
                                    <i class="far fa-comment wd-para-col"></i>
                                </div>
                                <div class = "col-9 ps-1">
                                    <p class="wd-para-col ps-0 pe-0">${post.comments}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class= "col-3 wd-single-response">
                        <a href="#">
                            <div class = "row">
                                <div class = "col-3">
                                    <i class="fa fa-retweet wd-para-col"></i>
                                </div>
                                <div class = "col-9 ps-1">
                                    <p class="wd-para-col ps-0 pe-0">${post.reTweets}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-3 wd-single-response">
                        <a href="#">
                        <div class = "row">
                            <div class = "col-3">
                                <i class="fa fa-heart wd-para-col"></i>
                            </div>
                            <div class = "col-9 ps-1">
                                <p class="wd-para-col ps-0 pe-0">${post.Likes}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="col-3 wd-single-response">
                        <a href="#">
                            <span class = "p-0">
                                <i class="fas fa-upload wd-para-col"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostListItem;