import React from 'react';
import Icon from '@material-ui/core/Icon';

export default({className, to, onClick}) => (
  <button type ="button" onClick={onClick} className= {`button button--text
  buttton--icon ${className}`} aria-label={to}>
  <Icon className={'controlPrev'}  icon={to}  style={{ fontSize: 60 }} >arrow_back_ios</Icon>
  </button>
)
