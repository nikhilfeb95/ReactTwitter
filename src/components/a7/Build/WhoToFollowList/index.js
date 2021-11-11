import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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