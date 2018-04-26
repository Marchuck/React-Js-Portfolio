import React from 'react';


class ProjectItem extends React.Component{
  render(){
    return (
      <div className="board-row">

      <div>{this.props.description}</div>
      <img src={this.props.image} alt="image" width="100" height="100" />

    </div>)
  }
}

export default ProjectItem;
