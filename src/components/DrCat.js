import React from 'react';

const DrCat = props => {
  return (
    <div className={`image-panel pow-${props.currentTheme}`}>
      <img className="cat-image" src="doctorcat-logo.png" alt="Dr. Meowrio" />
    </div>
  );
};

export default DrCat;
