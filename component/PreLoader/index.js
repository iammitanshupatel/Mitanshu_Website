import styles from './preLoader.module.scss';

const PreLoader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader} />
    </div>
  );
};
export default PreLoader;
