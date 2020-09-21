import React from 'react';

function FloatingIcon(){
    return(
        <div>here is icon</div>
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
            <div>discription</div>
        </div>
    );
}
class HomeContents extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="Contents">
          <h1>Home</h1>
          <FloatingIcon/>
          <MyName/>
          <MyBelonging/>
        </div>
      );
    }
  }

  export default HomeContents;