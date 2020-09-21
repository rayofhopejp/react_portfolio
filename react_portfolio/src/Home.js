import React from 'react';
import Icon from "./pictures/NaomiIcon.jpg";
function FloatingIcon(){
    return(
        <div>
            <img src={Icon} alt="icon" className="Icon"/>
        </div>
    );
}
function MyName(){
    return(
        <div className="TitleText">
            <h1>NaomiatLibrary</h1>
        </div>
    );
}
function MyBelonging(){
    return(
        <div className="DiscriptionText">
            <div>
                I am a student in the University of Tokyo.<br/>
                Works: The websites I made.<br/>
                Experiences: My personal histories (including certifications and careers)<br/>
                Contacts: My accounts.
            </div>
        </div>
    );
}
class HomeContents extends React.Component {
    render() {
      return (
        <div>
          <FloatingIcon/>
          <div className="Texts">
          <MyName/>
          <MyBelonging/>
          </div>
        </div>
      );
    }
  }

  export default HomeContents;