import React from 'react';
import Profile from '../parameter-query/Profile';
import { Route, Link } from 'react-router-dom';

function Profiles(){
    const a = '사용자';
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to='/profile/person1'>홍녕기</Link></li>
                <li><Link to='/profile/person2'>김철환</Link></li>
            </ul>

            <Route path='/profiles' exact render={()=><div>{a}를 선택해주세요.</div>}/>
            <Route path='/profile/:username' component={Profile} />
        </div>
    )
}

export default Profiles;