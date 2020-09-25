import React from 'react';

const profileData ={
    person1:{
        name:'홍녕기',
        description:'Frontend Developer'
    },
    person2:{
        name:'김철환',
        description:'Marketer'
    }
}

function Profile({ match }){
    const {username} = match.params;
    const profile = profileData[username];

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;