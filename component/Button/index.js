import { useCallback, useEffect, useRef } from 'react';
import styles from './button.module.scss';

const Button = ({ btnText, locationPage, isDisabled, isLoading, onClick, ariaLabel }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const mouseEvent = useCallback(e => {
    const parentOffset = btnRef.current.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    spanRef.current.style.top = `${relY}px`;
    spanRef.current.style.left = `${relX}px`;
  }, []);
  useEffect(() => {
    const btnCurrent = btnRef.current;
    btnCurrent.addEventListener('mouseenter', mouseEvent);
    btnCurrent.addEventListener('mouseout', mouseEvent);
    return () => {
      btnCurrent.removeEventListener('mouseenter', mouseEvent);
      btnCurrent.removeEventListener('mouseout', mouseEvent);
    };
  }, [mouseEvent]);

  return (
    <a className={styles.btnHover} ref={btnRef} aria-label={ariaLabel} href={locationPage}>
      <button
        aria-label={btnText}
        type="button"
        onClick={isDisabled || isLoading ? () => {} : onClick}>
        {btnText}
        <span ref={spanRef} />
      </button>
    </a>
  );
};

export default Button;
