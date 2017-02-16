import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class NewsWoll extends React.Component{
constructor(props){
  super(props);
  this.q=this.q.bind(this);
}
q(event){
  let del=event.target.value;
  this.props.DeleteNews(del);
}
  render(){
    var mass=this.props.data;
    var NewData = mass.map((item, index)=>
    <div key={index} className="BorderNew">
    <p>
    {item}
    </p>
    <button onClick={this.q}
            className="glyphicon glyphicon-trash"
            value={index}
          />
    </div>
    )
    return(
       <div>
       {NewData}
       </div>
    )
  }
}
export default NewsWoll;
