import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import './App.css';
import HomeContents from './Home.js';
import WorksContents from './Works.js';
import ExperiencesContents from './Experiences.js';
import ContactsContents from './Contacts.js';


class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ul>
          {this.props.pages.map((p)=>
            <li>
              <NavLink to={{pathname: "/"+p}} exact activeStyle={{color: "gray"}}>
                {p}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
/*
function MenuButton(props){
  return(
    <li className="MenuButton" onClick={()=>props.onClick(props.name)}>
        {props.name}
    </li>
  );
}

class Contents extends React.Component {
  render() {
    return (
      <div className="Contents">
        {this.props.page}
      </div>
    );
  }
}
*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlePageChange=this.handlePageChange.bind(this);
    this.state={
      page:<HomeContents/>
    };
    this.pages={
      "Home":HomeContents,
      "Works":WorksContents,
      "Experiences":ExperiencesContents,
      "Contacts":ContactsContents
    };
  }
  handlePageChange(name){
    this.setState({page:this.pages[name]});
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Toolbar pages={Object.keys(this.pages)} handlePageChange={this.handlePageChange}/>
          <Switch>
            {Object.entries(this.pages).map( ([key, value]) =>
              <Route exact path={"/"+key} component={value}/> 
            )}
            <Route exact component={HomeContents} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
