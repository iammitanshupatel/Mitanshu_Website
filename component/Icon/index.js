import PropTypes from 'prop-types';
import { useEffect, useRef, memo } from 'react';
import axios from 'lib/axios';
import styles from './icon.module.scss';

const Icon = ({ socialLink, variant, ariaLabel }) => {
  const iconRef = useRef();

  useEffect(() => {
    const loadSvg = async () => {
      const res = await axios.get(socialLink?.icon?.url, {
        responseType: 'text',
      });
      while (iconRef.current.hasChildNodes()) {
        iconRef.current.removeChild(iconRef.current.firstChild);
      }
      iconRef.current.insertAdjacentHTML('beforeend', res.data);
    };

    loadSvg();
  }, []);
  return (
    ariaLabel && (
      <a
        aria-label={ariaLabel}
        href={socialLink?.url}
        target={socialLink?.name !== 'address' ? '_blank' : undefined}
        className={`${styles[variant]}`}
        ref={iconRef}
        rel="noreferrer">
        Icon
      </a>
    )
  );
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['servicesIcon', 'contactIcon']),
};

export default memo(Icon);
