import post from "./post.json";
import PostListItem from "./PostListItem";
import './homeScreen.css'

const HomeList = () => {
    return(
        <>
            {
                post.map(postItem => {
                    return(
                        <PostListItem post = {postItem}/>
                    );
                })
            }
        </>
    )};

export default HomeList;