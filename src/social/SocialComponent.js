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
                  onClick={ this.props.linkedInOnClick }
                  />
            </div>

            <div className="row">
                  <SocialItem name="Snapchat"
                  image="https://img-23.ccm2.net/NckD0LrAT-aqj1KfXBsWNwYirwI=/3be803aeba104480810187fb4bf71a23/ccm-faq/qV2kB3TbZyA4DRRlWlhHaz-snapchat-logo.png"
                  onClick={ this.props.snapchatOnClick }
                  />
            </div>

            <div className="row">
                  <SocialItem name="Facebook"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png"
                  onClick={ this.props.facebookOnClick }
                  />
            </div>

            <div className="row">
                  <SocialItem name="Github"
                  image="https://image.flaticon.com/icons/svg/25/25231.svg"
                  onClick={ this.props.githubOnClick }
                  />
            </div>
        </div>

      )
  }
}

export default SocialComponent;
