import React from 'react';

const profileData = {
    GGoalG : {
        name: '홍녕기',
        description: 'Coder'
    },
    Marine : {
        name: '양현준',
        description: 'Frontend Engineer'
    }
}

function Profile({ match }){
    const {username} = match.params;
    const profile = profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile ;