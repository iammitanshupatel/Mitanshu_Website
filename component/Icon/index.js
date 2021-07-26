import PropTypes from 'prop-types';
import React, { useEffect, useRef, memo } from 'react';
import axios from '../../lib/axios';
import styles from './icon.module.scss';

const Icon = ({ socialLink, variant, className }) => {
  const iconRef = useRef();

  useEffect(() => {
    const loadSvg = async () => {
      const res = await axios.get(socialLink.icon.url, {
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
    <a
      href={socialLink.url}
      target="_blank"
      role="button"
      className={`${styles[variant]} ${className}`}
      ref={iconRef}
      rel="noreferrer">
      socialIcons
    </a>
  );
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['servicesIcon','contactIcon']),
};

export default memo(Icon);
