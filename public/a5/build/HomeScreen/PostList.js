import post from "./post.js";
import PostListItem from "./PostListItem.js";

const PostList = () => {
    return(`
        ${post.map(item => {
            return(PostListItem(item));
        }).join('')}
    `);
};

export default PostList;