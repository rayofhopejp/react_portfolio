import React from 'react';
import FilterableTable from './Helpers.js';

class WorksContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          works:[
            　{name:"A Survey on Natural Language Processing for Fake News Detection",discription:"大学1年生夏のインターンシップで執筆したsurveyです．LREC2020に採択されました．"},
              {name:"LiHabit",discription:"睡眠記録をつけるアプリです.Ruby on Railsの練習に作りました．"},
              {name:"CovidGraph",discription:"新型コロナの感染者数をプロットするアプリです．flaskの練習に作りました．"},
              {name:"Portfolio",discription:"このサイトです．Reactの練習に作りました．"},
          ]
      }
    }
    render() {
      return (
        <div className="Contents">
            <h1>Works</h1>
          <FilterableTable products={this.state.works}/>
        </div>
      );
    }
}

  export default WorksContents;