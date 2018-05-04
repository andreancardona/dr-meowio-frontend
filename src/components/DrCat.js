import React from 'react';
import { connect } from 'react-redux';

const DrCat = props => {
  return (
    <div className={`image-panel pow-${props.currentTheme.name}`}>
      <img className="cat-image" src="doctorcat-logo.png" alt="Dr. Meowrio" />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(DrCat);
