import React from 'react';

import './social.css';

import SocialItem from './SocialItem.js';

class SocialComponent extends React.Component{
  render(){
      return (
        <div className="row" >
            <div className="row">
                  <SocialItem name="LinkedIn"
                  image="http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png"
                  url="https://www.linkedin.com/in/%C5%82ukasz-marczak-a8242899/"
                  />
            </div>

            <div className="row">
                    <SocialItem name="Skype"
                    image="http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Apps-Skype-alt-Metro-icon.png"
                    url="https://join.skype.com/invite/mms3s7oy3tQY"
                    />
              </div>

            <div className="row">
                  <SocialItem name="Facebook"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png"
                  url="https://www.facebook.com/LukaszMMarczak?ref=bookmarks"
                  />
            </div>
            
            <div className="row">
                  <SocialItem name="Github"
                  image="https://image.flaticon.com/icons/svg/25/25231.svg"
                  url="http://github.com/Marchuck"
                  />
            </div>
        </div>

      )
  }
}

export default SocialComponent;
