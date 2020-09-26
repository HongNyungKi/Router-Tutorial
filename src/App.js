import React from 'react';
import { Route,Link } from 'react-router-dom';
import Home from './basic/Home';
import About from './basic/About';
import Profiles from './subRoute/Profiles';
import Profile from './parameter-query/Profile';
import History from './addition/History';
import WidthRouterFn from './widthRouter/WidthRouterFn';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필 목록</Link>
        </li>
        <li>
          <Link to='/history'>예제</Link>
        </li>
      </ul>
      <hr />
      <WidthRouterFn />
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} />
      <Route path='/profiles' component={Profiles} />
      <Route path='/profile/:username' component={Profile} /> 
      {/* 파일을 나눠나서 그런가 Profiles컴포넌트에서 Profile기능을 읽어올수없음! */}
      <Route path='/history' component={History} />
      
    </div>
  );
}

export default App;

