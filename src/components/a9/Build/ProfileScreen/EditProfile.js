import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import {saveProfileData } from "../../services/profileService";

const EditProfile = () =>{
    
    let[newInput, setProfileData] = useState({})
    const dispatch = useDispatch();    
    const saveChanges = () => {
        let names = {};
        if(newInput.name){
            const firstName = newInput.name.split(" ")[0];
            const lastName = newInput.name.split(" ")[1];
            names = {firstName, lastName}
            delete newInput.name;
        }
        const editedProfileData = {...profileData, ...newInput, ...names};
        saveProfileData(dispatch, editedProfileData)
    }
    const profileData = useSelector((state) => state.profile)
    return(
        <>
            <div className = "row">
                <div className = "col-2">
                    <Link to="/a9/twitter/profile"><i className="fas fa-times" aria-hidden="true"></i></Link>
                </div>
                <div className = "col-8">
                    <div className = "row pb-0 mb-0">
                        <h3>Edit Profile</h3>
                    </div>
                </div>
                <div className="col-2 mb-2">
                    <Link to = "/a9/twitter/profile">
                        <button className="btn btn-light rounded-pill wd-save-btn" onClick={saveChanges}>
                            <strong>Save</strong>
                        </button>
                    </Link>
                </div>
            </div>

            <div className= "wd-image-holder">
                <div className="row wd-bannerImage">
                    <img src={profileData.bannerPicture} />
                </div>

                <div className = "row p-0">
                        <img src={profileData.profilePicture} className="rounded-circle wd-profile-image-edit ms-3 img-fluid p-0"/>
                </div>
            </div>
            <div className = "wd-details-form">
                <ul className="list-group">
                    <li className="list-group-item wd-item-list"
                    style={{'border-top-left-radius': '15px','border-top-right-radius': '15px'}}>  
                        <label>Name</label>  
                        <input type="text" defaultValue={profileData.firstName + " " + profileData.lastName} className="form-control ps-0 ms-0" name="name"
                        onChange = {e => setProfileData((value) => ({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>
                    <li className="list-group-item wd-item-list">
                        <label>Bio</label>
                        <textarea defaultValue={profileData.bio} className="form-control" name = "bio"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name]: e.target.value}))}> 
                        </textarea>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Location</label>
                        <input type="text" placeholder="Name" defaultValue={profileData.location} className="form-control ps-0 ms-0" name = "location"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <input type="text" placeholder="Website" defaultValue={profileData.website} className="form-control ms-0 ps-0" name = "website"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>      
                    <li className="list-group-item wd-item-list">
                        <label>Birth Date</label>
                        <input type="text" placeholder="Name" defaultValue={profileData.dateOfBirth} className="form-control ps-0 ms-0" name = "dateOfBirth"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default EditProfile;