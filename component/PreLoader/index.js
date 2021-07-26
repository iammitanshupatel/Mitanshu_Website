import { useEffect, useRef } from 'react';
import styles from './preLoader.module.scss';

const PreLoader = () => {
  const preLoaderRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      preLoaderRef.current.classList.add(styles.loaded);
    }, process.env.NEXT_PUBLIC_API_TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div ref={preLoaderRef} className={styles.preloader}>
      <div className={styles.loader} />
    </div>
  );
};
export default PreLoader;
