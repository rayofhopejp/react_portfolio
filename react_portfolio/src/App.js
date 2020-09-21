import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomeContents from './Home.js';
import WorksContents from './Works.js';
import ExperiencesContents from './Experiences.js';
import ContactsContents from './Contacts.js';


class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Toolbar">
        <ul>
          <MenuButton name="Home" onClick={this.props.handlePageChange}/>
          <MenuButton name="Works" onClick={this.props.handlePageChange}/>
          <MenuButton name="Experiences" onClick={this.props.handlePageChange}/>
          <MenuButton name="Contacts" onClick={this.props.handlePageChange}/>
        </ul>
      </div>
    );
  }
}
function MenuButton(props){
  return(
    <li className="MenuButton" onClick={()=>props.onClick(props.name)}>
        {props.name}
    </li>
  );
}
class Contents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Contents">
        {this.props.page}
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.handlePageChange=this.handlePageChange.bind(this);
    this.state={
      page:<HomeContents/>
    };
  }
  handlePageChange(name){
    const pages={
      "Home":<HomeContents/>,
      "Works":<WorksContents/>,
      "Experiences":<ExperiencesContents/>,
      "Contacts":<ContactsContents/>
    };
    this.setState({page:pages[name]});
  }
  render(){
    return (
      <div className="App">
        <Toolbar handlePageChange={this.handlePageChange}/>
        <Contents page={this.state.page}/>
      </div>
    );
  }
}

export default App;
