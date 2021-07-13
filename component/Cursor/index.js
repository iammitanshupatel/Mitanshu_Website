import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './cursor.module.scss';

const Cursor = () => {
  const mouseRef = useRef(null);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, []);

  return (
    <div id="cursor" ref={mouseRef} style={{ left: `${cursorX}px`, top: `${cursorY}px` }}>
      <div className={styles.cursor__label} />
      <div className={styles.cursor__bg} />
    </div>
  );
};

export default Cursor;
