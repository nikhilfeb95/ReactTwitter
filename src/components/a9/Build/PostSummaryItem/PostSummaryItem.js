import React from "react";

const PostSummaryItem = (  {
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
        }
    }) => {
    return(
        <li className="list-group-item wd-post-items">
            <div className = "row" >
                <div className = "col-10 wd-title-white">
                    <div className = "row">
                        <span className = "wd-title">{post.topic}</span>
                    </div>
                    <div className = "row">
                        <span><h6 className = "wd-title-header d-inline">
                        <strong>{post.userName}</strong>
                        </h6>
                        <i className="fas fa-check-circle d-lg-inline"></i>
                        <span className="wd-title d-inline">-{post.time}</span>
                        </span>
                    </div>
                    <div className="row">
                        <h6>
                            <strong>
                                {post.title}
                            </strong>
                        </h6>
                    </div>
                </div>
                <div className = "col-2">
                    <img src= {post.image} className="img-fluid rounded" alt = "post list image"/>
                </div>
            </div>
        </li>
        );
}

export default PostSummaryItem;