import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './about/about.css';
import PortfolioComponent from './portfolio/PortfolioComponent.js';
import AboutComponent from './about/AboutComponent.js';
import SocialComponent from './social/SocialComponent.js';


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

class Board extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
    items: [
      { title: "Portfolio", selected: true},
      { title: "About", selected: false},
      { title: "Social", selected: false},
    ]
   };
 }

 renderMenuItem(i) {
   return <MenuItem title={this.state.items[i].title}
                    selected={this.state.items[i].selected}
                    onClick={()=>{
                      console.log("clicked: "+i)
                      this.setState({
                      items: [
                        { title: "Portfolio", selected: i===0},
                        { title: "About", selected: i===1},
                        { title: "Social", selected: i===2},
                            ]
                          })
                                }
                            }
        />;
 }

 renderCurrentComponent(){
    for (var i = 0; i < this.state.items.length; i++) {
          if(this.state.items[i].selected){
              return this.renderComponent(i);
          }
    }
 }

 renderComponent(i){
   if (i===0) {
     return <PortfolioComponent />;
   }else if (i===1) {
     return <AboutComponent email="lukmardev@gmail.com"/>;
   }else{
     return <SocialComponent />;
   }
 }


  render() {
    const status = 'Welcome to my page';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderMenuItem(0)}
          {this.renderMenuItem(1)}
          {this.renderMenuItem(2)}
        </div>
        <div className="board-row">
          {this.renderCurrentComponent()}
        </div>

      </div>
    );
  }
}

// ========================================

render((
    <Board />
), document.getElementById('root'));
