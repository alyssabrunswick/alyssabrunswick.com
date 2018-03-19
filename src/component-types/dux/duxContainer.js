// @flow
/*
   NOTE: This file was auto-generated for a component
   named "dux"; it is intended to be modified as
   needed to be useful.
*/

import {connect} from 'react-redux';

import dux from './dux';

const mapStateToProps = (state: Object) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fn: () => {
      dispatch();
    },
  }
};

const duxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(dux);

export default duxContainer;
