import Button from 'component/Button';
import styles from './errorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.errorOutside}>
            <span>404</span>
            <h1>Looks like you are lost</h1>
            <p>The page you were trying to view does not exist. </p>
          </div>
          <Button locationPage="/" btnText="Back to home" ariaLabel="Back to home page" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
