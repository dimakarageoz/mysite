import React, {Component} from 'react';
import '../../../src/css/HomePag.css';
import NewsWoll from './NewsWoll';
import AddNews from './AddNews';
import Inform from './Inform';
var inform={
name : "Dart",
sername: "Vaider",
states : "Dark side is top."
}

class HomePag extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news : []
    };
    this.NewsAdd=this.NewsAdd.bind(this);
    this.DeleteNews=this.DeleteNews.bind(this);
  }
  NewsAdd(NewText){
    let mass = this.state.news;
    mass.unshift(NewText);
    this.setState({
            mass
    });
  }
  DeleteNews(del){
  let mass=this.state.news;
  let deleteEl = mass.splice(del, 1)

  this.setState({
    mass
  });
  }

  render(){
    return(
           <div className="Pag">
                  <Inform  inform={inform} />
                  <div className="News">
                  <AddNews inform={inform} NewsAdd={this.NewsAdd} />
                  <NewsWoll data={this.state.news} DeleteNews={this.DeleteNews}/>
                  </div>
           </div>

    );
  }

}

export default HomePag;
