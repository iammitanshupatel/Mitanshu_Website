import { useCallback, useEffect, useRef } from 'react';

const Button = ({ btnText, locationPage }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const mouseEvent = useCallback(e => {
      e.preventDefault();
    const parentOffset = btnRef.current.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    spanRef.current.style.top = `${relY}px`;
    spanRef.current.style.left = `${relX}px`;

    // spanRef.current.style.setProperty('left', `${relX}px`);
    // spanRef.current.style.setProperty('top', `${relY}px`);
  }, []);
  useEffect(() => {
    btnRef.current.addEventListener('mouseenter', mouseEvent);
    btnRef.current.addEventListener('mouseout', mouseEvent);
    return () => {
      btnRef.current.removeEventListener('mouseenter', mouseEvent);
      btnRef.current.removeEventListener('mouseout', mouseEvent);
    };
  }, [mouseEvent]);

  return (
    <a className="btn-posnawr" ref={btnRef} href={locationPage}>
      {btnText}
      <span ref={spanRef} />
    </a>
  );
};

export default Button;
