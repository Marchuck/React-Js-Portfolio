import React from 'react';

import './social.css';

import SocialItem from './SocialItem.js';
import SocialData from './model.js';

class SocialComponent extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     data: SocialData
   };
 }

 render(){
      return (
        <div className="row" >

        {this.state.data
          .map(socialItem =>
              <div className="row">
                    <SocialItem name={socialItem.name}
                    image={socialItem.image}
                    url={socialItem.url}
                    />
              </div>
        )}
        </div>
      )
  }
}

export default SocialComponent;
