import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './about/about.css';
import PortfolioComponent from './portfolio/PortfolioComponent.js';
import AboutComponent from './about/AboutComponent.js';
import SocialComponent from './social/SocialComponent.js';
import MenuItem from './menu/MenuItem.js';

var selectedIndex = 0;

class Board extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
    items: this.selectItemAndGetItems(selectedIndex)
   };
 }

 selectItemAndGetItems(selectedIndex){
   return [
     { 'title': "Portfolio", 'selected': 0 === selectedIndex, 'index': 0},
     { 'title': "About", 'selected': 1 === selectedIndex, 'index': 1},
     { 'title': "Social", 'selected': 2 === selectedIndex, 'index': 2},
   ];
 }

 renderMenuItem(i) {
   return <MenuItem title={this.state.items[i].title}
                    selected={this.state.items[i].selected}
                    onClick={()=>
                              {
                                this.setState({ items: this.selectItemAndGetItems(i) })
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
