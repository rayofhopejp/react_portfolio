import React from 'react';
import FilterableTable from './Helpers.js';

class ContactsContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        contacts:[
          　{name:"Twitter",link:"https://twitter.com/NaomiatLibrary"},
            {name:"GitHub",link:"https://github.com/NaomiatLibrary"}
        ]
      }
    }
    render() {
      return (
        <div className="Contents">
            <h1>Contacts</h1>
          <FilterableTable products={this.state.contacts}/>
        </div>
      );
    }
}

export default ContactsContents;