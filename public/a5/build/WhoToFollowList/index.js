import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    console.log(who);
    return (`
    <ul class="list-group wd-right-corner">
        <li class="list-group-item  wd-left-logos"><strong>Who to follow</strong></li>
        ${
            who.map(todo => {
                return(WhoToFollowListItem(todo));
            }).join('')
        }

    </ul>
`); }
export default WhoToFollowList;
