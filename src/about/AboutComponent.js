import React from 'react';


const aboutContent = "Hello, my name is Łukasz Marczak. I am 25 years old and I really like mobile programming, especially Android.\n"

class AboutComponent extends React.Component{
  render(){
      return (
        <div>
            <div className="about-text" >{aboutContent}</div>

            <div className="about-text"> <a href={"mailto:"+this.props.email}>Email me</a></div>
        </div>
      )
  }
}

export default AboutComponent;
