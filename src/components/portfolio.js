import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';

class Work extends React.Component {
  static propTypes = {
    projects: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Work</h1>
        {Object.keys(this.props.projects).map(key => (
          <div className="portfolio-item" key={key}>
            <Link to={`/work/${this.props.projects[key].name}`}>
              <h1>{this.props.projects[key].name}</h1>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Work;
