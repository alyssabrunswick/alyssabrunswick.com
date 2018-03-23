import React from 'react';

// class Project extends React.Component {
//   render() {
//     return (
//       <section>
//         <h1>{this.props.match}</h1>
//         <h3>test</h3>
//       </section>
//     );
//   }
// }

const Project = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

export default Project;
