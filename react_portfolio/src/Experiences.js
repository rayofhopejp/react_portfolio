import React from 'react';
import FilterableTable from './Helpers.js';

class ExperiencesContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        experiences:[
          　{name:"Google STEP 2020",discription:"10週間のワークショップに参加しました．"},
        ]
      }
    }
    render() {
      return (
        <div className="Contents">
            <h1>Experiences</h1>
          <FilterableTable products={this.state.experiences}/>
        </div>
      );
    }
}

  export default ExperiencesContents;