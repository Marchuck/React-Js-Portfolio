import React from 'react';


const aboutContent = "Hello, my name is Łukasz Marczak. I am 25 years old and I really like frontend programming."

class AboutComponent extends React.Component{
  render(){
      return (<div class="about-text" >{aboutContent}</div>)
  }
}

export default AboutComponent;
