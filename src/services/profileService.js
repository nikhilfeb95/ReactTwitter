const PROFILE_API = 'https://web-dev-node-nikhil.herokuapp.com/api/profile';

export const fetchAllProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profileData =>
            dispatch({
                type: 'fetch-profile-data',
                profileData
            })
        );

export const saveProfileData = (dispatch, profile) =>{
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profileData => 
            dispatch({
                type : 'fetch-profile-data',
                profileData
            }));
} 