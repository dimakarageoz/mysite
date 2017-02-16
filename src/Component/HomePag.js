import React, {Component} from 'react';
import '../../src/HomePag.css'

var inform={
name : "Dart",
sername: "Vaider",
states : "Dark side is top."
}

class HomePag extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text : '',
      newsBlocks : []
    };
    this.handleTextChange=this.handleTextChange.bind(this);
  }
  handleTextChange(event){
    this.setState({
      text : event.target.value
    });
  }

render(){
  return(
         <div className="Pag">
                <div className="Image">
                <div className="Info">
                    <h2>Mr {inform.name} {inform.sername}</h2>
                    <p>{inform.states}</p>
                </div>
                <img src="./_XExPtRJgM8.jpg" />
                </div>
                <div className="News">
                <h1>Yo {inform.name}! How do you do?</h1>
                <input
                       type="text"
                       placeholder="Введите название группы"
                       value={this.state.text}
                       onChange={ this.handleTextChange } />

                <div className="NewDiv">{this.state.newsBlocks}</div>
                </div>
         </div>

  );
}




}

export default HomePag;
