import React from 'react';
import FilterableTable from './Helpers.js';

class ExperiencesContents extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        experiences:[
          {
            name:"Google STEP 2020",
            discription:"10週間のワークショップに参加しました．アルゴリズムなどについて学びました．",
            link:"https://github.com/NaomiatLibrary/STEP2020",
          },
          {
            name:"AWS Japan Solutions Architect/Professional services サマーインターンシップ(2020)",
            discription:"3日間のインターンに参加し，AWSについて学びました．チームで課題に取り組み，優勝を収めました．",
          },
          {
            name:"AtCoder",
            discription:"プログラミングコンテストに参加し，アルゴリズムの知識を深めています．Highestは1502(水色上位)です(2020/05/10時点)．主にC++で解いています．",
            link:"https://atcoder.jp/users/NaomiatLibrary",
          },
          {
            name:"東京大学Summer Founders Program 2019",
            discription:"視線方向の音を増幅する補聴器の開発に取り組みました，言語はJavascriptとPureDataを用いました．",
          },
          {
            name:"日本情報オリンピック(2015,2017)",
            discription:"予選をAランクで突破し，本戦に参加しています．2015年には理事長賞をいただきました(女子で一位だったため)．",
            link:"https://www.ioi-jp.org/joi/2014/2015-ho-invited-list.html",
          },
          {
            name:"パソコン甲子園(2015)",
            discription:"2015年にチームで参加し，桜蔭学園として予選を突破しました（577チーム中11位）．",
            link:"http://web-ext.u-aizu.ac.jp/pc-concours/2015/final/f_finalteam.html",
          },
          {
            name:"日本情報オリンピック夏季セミナー(2014,2016)",
            discription:"夏季セミナーに参加し，本を読んでその内容について発表しました．リンクは2014年のスライドです．",
            link:"https://www.slideshare.net/sakura-mike/ss-38485234",
          },
        ]
      }
    }
    render() {
      return (
        <div>
            <h1>Experiences</h1>
          <FilterableTable products={this.state.experiences}/>
        </div>
      );
    }
}

  export default ExperiencesContents;