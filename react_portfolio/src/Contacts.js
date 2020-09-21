import React from 'react';
import FilterableTable from './Helpers.js';

class ContactsContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        contacts:[
            {name:"Google Scholar",link:"https://scholar.google.com/citations?user=Hc0gTU0AAAAJ"},
            {name:"ResearchGate",link:"https://www.researchgate.net/profile/Ray_Oshikawa"},
          　{name:"Twitter",link:"https://twitter.com/NaomiatLibrary"},
            {name:"GitHub",link:"https://github.com/NaomiatLibrary"},
            {name:"Blog",link:"https://naomi-notebook.hatenablog.com/"},
            
        ]
      }
    }
    render() {
      return (
        <div>
            <h1>Contacts</h1>
          <FilterableTable products={this.state.contacts}/>
        </div>
      );
    }
}

export default ContactsContents;