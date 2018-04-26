import React from 'react';

import './portfolio.css';
import PortfolioData  from './model.js';
import ProjectItem from './ProjectItem.js';

class PortfolioComponent extends React.Component{

  constructor(props) {
   super(props);
   this.state = {
     data: PortfolioData
   };
 }

  render(){
      return (
      <ul>
          {this.state.data.map(
              year => <li className="year">{year.year}

                        <div>
                        {year.projects.map(
                            project => <li className="project">
                                    <ProjectItem description={project.name} images={project.screenshots} />

                                    </li>
                        )}
                        </div>
                      </li>
          )}

      </ul>
      );
  }
}

export default PortfolioComponent;
