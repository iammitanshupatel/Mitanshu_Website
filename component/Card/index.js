import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ children, variant, className, ...props }) => (
  <div className={`${styles[variant]} ${className}`} {...props}>
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
