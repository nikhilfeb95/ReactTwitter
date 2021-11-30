import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { fetchAllProfile } from "../../services/profileService";

const ProfileComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => fetchAllProfile(dispatch), [])
    const profileData = useSelector((state) => state.profile)
    console.log(profileData)
    return(
        <>
            <div className = "row">
                    <div className = "col-2">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </div>
                    <div className = "col-10">
                        <div className = "row pb-0 mb-0">
                            <h3>{profileData.firstName + " " + profileData.lastName}</h3>
                        <div className = "row pt-0 mt-0">
                            <p>5126 Tweets</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className= "wd-image-holder">
                    <div className="row wd-bannerImage">
                        <img src={profileData.bannerPicture}/>
                    </div>

                    <div className = "row">
                        <div className = "col-8 wd-avatar-div">
                            <img src= {profileData.profilePicture} className="rounded-circle ms-3 wd-profile-image img-fluid" />
                        </div>
                        <div className = "col-4 align-items-center">
                            <Link to="/a9/twitter/profile/editProfile"><button className="btn btn-primary wd-edit-btn rounded-pill mt-3">
                                <strong>Edit Profile</strong>
                            </button></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className = "row">
                        <h3>{profileData.firstName + " " + profileData.lastName}</h3>
                    </div>
                    <div className = "row">
                        <p>@{profileData.handle}</p>
                    </div>
                    <div className = "row">
                        <p>{profileData.bio}</p>
                    </div>
                    <div className = "row">
                        <div className = "col-3 pe-0">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>{profileData.location}</span>
                        </div>
                        <div className = "col-4">
                            <i className="fa fa-smile-beam" aria-hidden="true"></i>
                            <span>Born </span>
                            <span>{profileData.dateOfBirth}</span>
                        </div>
                        <div className = "col-3 ps-0">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <span>{profileData.dateJoined}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className = "col-3">
                            <span>
                                <span>{profileData.followingCount}</span>
                                <span>Following</span>
                            </span>
                        </div>
                        <div className="col-9">
                            <span>
                                <span>{profileData.followersCount}</span>
                                <span>Followers</span>
                            </span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProfileComponent;