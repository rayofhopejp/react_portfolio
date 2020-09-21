import React from 'react';
import FilterableTable from './Helpers.js';

class WorksContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          works:[
            　{
                name:"A Survey on Natural Language Processing for Fake News Detection(2018)",
                discription:"大学1年生夏のインターンシップで執筆したsurveyです．LREC2020に採択されました．",
                link:"https://arxiv.org/abs/1811.00770"
              },
              {
                name:"LiHabit(2020)",
                discription:"睡眠記録をつけるアプリです.Ruby on Railsの練習に作りました．",
                link:"https://naomiatlibrary.com:9292/"
              },
              {
                name:"CovidGraph(2020)",
                discription:"新型コロナの感染者数をプロットするアプリです．flaskの練習に作りました．",
                link:"https://naomiatlibrary.com/CovidGraph/"
              },
              {
                name:"Portfolio(2020)",
                discription:"このサイトです．Reactの練習に作りました．",
                link:"https://naomiatlibrary.com"
              },
              {
                name:"文豪チャット(2017)",
                discription:"高校2年生の時に作った，口調を真似してくれる会話ボットです．言語はC++，DxLibを用いて作りました．",
                link:"https://www.vector.co.jp/soft/winnt/amuse/se515415.html"
              },
              {
                name:"Wish on Beasts(2015)",
                discription:"中学3年生の時に作ったアクションゲームです．言語はC++，WINAPIを用いて作りました．",
                link:"https://www.vector.co.jp/soft/winnt/game/se508162.html"
              },
              {
                name:"狼の舞(2016)",
                discription:"高校1年生の時に作ったボードゲームです．言語はC++，DxLibを用いて作りました．",
                link:"https://www.vector.co.jp/soft/winnt/game/se511665.html"
              },
          ]
      }
    }
    render() {
      return (
        <div>
            <h1>Works</h1>
          <FilterableTable products={this.state.works}/>
        </div>
      );
    }
}

  export default WorksContents;