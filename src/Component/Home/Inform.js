import React from 'react';


class Inform extends React.Component{


render(){
  var inform=this.props.inform;
  return(
    <div className="Image">
    <div className="Info">
        <h2>Mr {inform.name} {inform.sername}</h2>
        <p>{inform.states}</p>
    </div>
    <img src="./_XExPtRJgM8.jpg" />
    </div>
  )
}



}

export default Inform;
