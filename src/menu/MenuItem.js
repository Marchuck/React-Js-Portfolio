import React from 'react';

class MenuItem extends React.Component{

  toggleState(clicked){
    if (clicked) {
      return "menu-item-clicked";
    }else{
      return "menu-item";
    }
  }

  render() {
    return (
      <button className={this.toggleState(this.props.selected)}
              onClick={this.props.onClick}>
                  {this.props.title}
      </button>
           );
  }
}

export default MenuItem;
