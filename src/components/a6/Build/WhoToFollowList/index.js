import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from './who.json'

const WhoToFollowList = () => {
    return (
    <ul className="list-group wd-right-corner">
        <li className="list-group-item  wd-left-logos"><strong>Who to follow</strong></li>
        {
            who.map(who => {
                return(
                    <WhoToFollowListItem who={who}/>
                );
            })   
        }
    </ul>
    ); }
    
export default WhoToFollowList;