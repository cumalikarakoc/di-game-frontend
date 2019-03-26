import React from "react";
import PropTypes from "prop-types";
import image from "./../../../assets/dragon.gif";

const Enemy = ({ height, width }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        width: `${width}px`,
        height: `${height}px`
      }}
    />
  );
};

Enemy.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

export default Enemy;
