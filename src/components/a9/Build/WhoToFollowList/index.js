import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector, useDispatch} from "react-redux";
import { fetchAllWho } from "../../services/whoService";

const WhoToFollowList = () => {
    const [whos, setWhos] = useState([])
    useEffect(() => fetchAllWho()
                        .then(whos => setWhos(whos)))
    return (
    <ul className="list-group wd-right-corner">
        <li className="list-group-item  wd-left-logos"><strong>Who to follow</strong></li>
        {
            whos.map(who => {
                return(
                    <WhoToFollowListItem who={who}/>
                );
            })   
        }
    </ul>
    ); }
    
export default WhoToFollowList;