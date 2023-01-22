import Button from 'component/Button';
import styles from './errorPage.module.scss';

const ErrorPage = ({ code, title, description }) => {
  return (
    <div className={styles.notFound}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.errorOutside}>
            <span>{code}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          {code === 404 && (
            <Button locationPage="/" btnText="Back to home" ariaLabel="Back to home page" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
