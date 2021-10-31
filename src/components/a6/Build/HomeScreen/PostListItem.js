import HideLink from "./HideLink";

const  PostListItem = (props) => {
    const post = props.post;
    return(         
        <div className="wd-row">
            <div className="wd-col-twentyPercent col-2 ps-2">
                <img src={post.profilePic} className="wd-col-twentyPercent"/>
            </div>
            <div className="wd-col-eightyPercent col-10">
                <div className="wd-author">
                    <p id="author-name">{post.userName}</p>
                    <p id="author-handle">{post.userHandle}</p>
                    <p id="author-date-post">{post.time}</p>
                </div><br/>
                <div className="wd-content">
                    <p> {post.postPreStatus} <a href="#" className = "wd-status-link">{post.statusLink}</a> {post.postPostStatus}</p>
                </div>
                <div className="wd-border wd-main-image">
                    <div>
                        <img src={post.postImage} className="img-fluid" />
                    </div>
                    <HideLink element = {post}/>
                </div>
                <div className="row wd-post-response">
                    <div className="col-3 wd-single-response">
                        <a href="#">
                            <div className = "row">
                                <div className = "col-3">
                                    <i className="far fa-comment wd-para-col"></i>
                                </div>
                                <div className = "col-9 ps-1">
                                    <p className="wd-para-col ps-0 pe-0">{post.comments}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className= "col-3 wd-single-response">
                        <a href="#">
                            <div className = "row">
                                <div className = "col-3">
                                    <i className="fa fa-retweet wd-para-col"></i>
                                </div>
                                <div className = "col-9 ps-1">
                                    <p className="wd-para-col ps-0 pe-0">{post.reTweets}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-3 wd-single-response">
                        <a href="#">
                        <div className = "row">
                            <div className = "col-3">
                                <i className="fa fa-heart wd-para-col"></i>
                            </div>
                            <div className = "col-9 ps-1">
                                <p className="wd-para-col ps-0 pe-0">{post.Likes}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-3 wd-single-response">
                        <a href="#">
                            <span className = "p-0">
                                <i className="fas fa-upload wd-para-col"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostListItem;