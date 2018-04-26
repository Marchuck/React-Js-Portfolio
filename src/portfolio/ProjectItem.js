import React from 'react';


class ProjectItem extends React.Component{
  render(){
    return (
      <div className="board-row">

      <div className="portfolio-description">{this.props.description}</div>

      <div  className="board-row">
    {  this.props.images.map(photo =>  <img className="portfolio-image" src={photo} alt="image" width="216" height="384" />) }
      </div>

    </div>)
  }
}

export default ProjectItem;
