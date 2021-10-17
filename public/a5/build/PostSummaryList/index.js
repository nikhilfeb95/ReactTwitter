import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
    ${
        posts.map(item => {
        return(PostSummaryItem(item));
    }).join('')
    }
    `)
};

export default PostSummaryList;