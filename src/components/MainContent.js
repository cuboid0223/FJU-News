import React from 'react';
import MyInfo from './Card';
import Logo from "./Logo";
import QandA from "./QandA";
function MainContent(){
  return(
    <div className="MainContent">
        <MyInfo />
        <Logo />
        <QandA />
    </div>
  )
}

export default MainContent