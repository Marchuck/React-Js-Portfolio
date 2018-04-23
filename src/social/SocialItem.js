import React from 'react';
import '../index.css';
class SocialItem extends React.Component{
  render(){
      return (
        <div className="board-row">
        <img src={this.props.image} alt="image" width="72" height="72" onClick={this.props.onClick}/>
         <div >{this.props.name}</div>
      </div>)
  }
}

export default SocialItem;
