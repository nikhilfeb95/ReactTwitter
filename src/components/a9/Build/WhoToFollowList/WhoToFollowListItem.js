import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchAllWho } from "../../services/whoService";

const WhoToFollowListItem = ({
    who = {
        avatarIcon: '../../../../Images/NASA.png',
        userName: 'NASA',
        handle: 'NASA',
        }   
    }) => 
    {
        return(
        <li className="list-group-item wd-left-logos">
            <div className = "row align-items-center">
                <div className = "col-2 me-0 pe-0">
                    <img src= {who.avatarIcon} className="img-fluid rounded-circle wd-follow-icons 
                    img-circle"/>
                </div>
                <div className = "col-6 ps-0">
                    <div className="row pb-0 mb-0">
                        <span className="text-nowrap"><h6 className = "wd-title-header d-inline">
                            <strong>{who.userName}</strong>
                        </h6>
                        <i className="fas fa-check-circle d-lg-inline"></i>
                        </span>  
                    </div>
                    <div className = "row pt-0 mt-0">
                        <span className = "wd-title">@{who.handle}</span>
                    </div>
                </div>
                <div className = "col-4 align-items-center">
                    <button className="btn btn-primary rounded-pill"><strong>Follow</strong></button>
                </div>
            </div>
        </li>
);
}

export default WhoToFollowListItem;