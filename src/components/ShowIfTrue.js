import PropTypes from "prop-types";

const ShowIfTrue = ({children, condition}) => {
  return condition ? children : null;
}

ShowIfTrue.propTypes = {
  condition: PropTypes.bool.isRequired
};

export default ShowIfTrue;
