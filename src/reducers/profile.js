
const profileData = {
    firstName: 'Nikhil',    
    lastName: 'Mollay',   
     handle: 'nikmollay',
    profilePicture: '../../../images/ProjProfile.jpg',     
    bannerPicture: '../../../images/banner.jpg',
    bio: 'MS Computer Science Student @ Khoury College of Computer Sciences. Guitar, Piano, Football and a connoisseur of the ancient history, especially early Greek and Babylonian.',   
    website: 'https://nikhilfeb95.github.io/NikhilMollay/',
    location: 'Boston, MA',    
    dateOfBirth: 'February 1, 1995',    dateJoined: 'April 2009',
    followingCount: 312,    followersCount: 180
} 

const profile = (state = profileData, action) =>{
    console.log(action.newInput)
    console.log(state)
    switch(action.type){
        case 'save-information':
            const newProfileData = {};
            if(action.newInput.name){
                newProfileData['firstName'] = action.newInput['name'].split(" ")[0];
                newProfileData['lastName'] = action.newInput['name'].split(" ")[1];
            }
            return {
                    ...state,
                    ...action.newInput,
                    ...newProfileData
            };        
            default:
                return (state)
    }
}

export default profile;