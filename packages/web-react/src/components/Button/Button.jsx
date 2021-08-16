import PropTypes from 'prop-types';
import React from 'react';

const getButtonColorClassname = (color) => {
  if (color === 'primary') {
    return 'lmc-Button--primary';
  }

  if (color === 'secondary') {
    return 'lmc-Button--secondary';
  }

  if (color === 'tertiary') {
    return 'lmc-Button--tertiary';
  }

  return null;
};

export const Button = ({ color, label, onClick, type }) => (
  <button
    className={['lmc-Button', getButtonColorClassname(color)].join(' ')}
    onClick={onClick}
    type={type}
  >
    {label}
  </button>
);

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

Button.propTypes = {
  /**
   * Emotion color variant.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Button label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Function to be called on button click.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * HTML `type` attribute.
   */
  type: PropTypes.oneOf(['button', 'submit']),
};

export default Button;
