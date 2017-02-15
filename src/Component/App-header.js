import React, { Component } from 'react';
import {Link} from 'react-router';
import '../css/App-header.css';
class App_header extends Component{
  constructor() {
    super ()
    this.state = {date : new Date()};
  }
  componentDidMount() {
    setInterval(()=>{
    this.setState({
     date: new Date()
   });
  },1000
);
 }

  render (){
    return(
      <div className="App-header">
          <Link to="home"><button className="Home"> Это Дом</button></Link>
          <div className="Timer">{this.state.date.toLocaleTimeString()}</div>
          <div className="ContentButton">
          <Link to="test"><button>Задачи/Ресурсы</button></Link>
          <Link to="music"><button>Музыка</button></Link>
          <Link to="fotochgi"><button>Фото</button></Link>
     </div>
     </div>
);
  }
}

export default App_header;
