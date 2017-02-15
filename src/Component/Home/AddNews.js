import React from 'react';

class AddNews extends React.Component{
constructor(props){
  super(props);
  this.state={
    text : ''
  }
  this.cluk=this.cluk.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
}

  handleTextChange(event){
    this.setState({
      text : event.target.value,
    });
  }
  cluk(){
    let text =this.state.text;
    this.setState({
      text : ''
    });
    this.props.NewsAdd(text);
  }

render(){
  var inform=this.props.inform;
  return(
    <div className="News">
    <h1>Yo {inform.name}! How do you do?</h1>
    <input
           type="text"
           value={this.state.text}
           onChange={ this.handleTextChange } />
    <button type="button" className="NewPush" onClick={this.cluk}>
    Add new
    </button>
    </div>
  )
}


}

export default AddNews;
