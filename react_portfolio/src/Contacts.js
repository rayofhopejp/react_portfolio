import React from 'react';
import FilterableTable from './Helpers.js';
import TwitterIcon from './pictures/Twitter_Social_Icon_Circle_Color.png'

class ContactsContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        contacts:[
            {name:"Google Scholar",link:"https://scholar.google.com/citations?user=Hc0gTU0AAAAJ"},
            {name:"ResearchGate",link:"https://www.researchgate.net/profile/Ray_Oshikawa"},
          　{name:"Twitter",link:"https://twitter.com/NaomiatLibrary",icon:TwitterIcon},
            {name:"GitHub",link:"https://github.com/NaomiatLibrary",icon:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},
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