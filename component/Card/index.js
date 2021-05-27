import PropTypes from 'prop-types';

const Card = ({ children, variant, className, ...props }) => (
  <div className={`${variant} ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['srvCard', 'projectCard', 'cardBlog']),
};

Card.defaultProps = {
  className: '',
  variant: 'srvCard',
};

export default Card;
