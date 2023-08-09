import React from 'react';
import PropTypes from 'prop-types';
import Button from 'component/Button';
import styles from './errorPage.module.scss';

const ErrorPage = ({ code, title, description }) => {
  const is404Error = code === 404;

  return (
    <div className={styles.notFound}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.errorOutside}>
            <span>{code}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          {is404Error && (
            <Button locationPage="/" btnText="Back to home" ariaLabel="Back to home page" />
          )}
        </div>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  code: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ErrorPage;
