import React from 'react';
import PropTypes from 'prop-types';
// import firebase from 'firebase';

class Work extends React.Component {
  static propTypes = {
    projects: PropTypes.object
  };

  render() {
    return (
      <page>
        <h1>Work</h1>
        {Object.keys(this.props.projects).map(key => <h1>project.name</h1>)}
      </page>
    );
  }
}

export default Work;
