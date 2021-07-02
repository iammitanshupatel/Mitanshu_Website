import { useCallback, useEffect, useRef } from 'react';

const Button = ({ btnText, locationPage, isDisabled, isLoading, onClick }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const mouseEvent = useCallback(e => {
    // const parentOffset = btnRef.current.getBoundingClientRect();
    // const relX = e.pageX - parentOffset.left;
    // const relY = e.pageY - parentOffset.top;
    // spanRef.current.style.top = `${relY}px`;
    // spanRef.current.style.left = `${relX}px`;
    // spanRef.current.style.setProperty('left', `${relX}px`);
    // spanRef.current.style.setProperty('top', `${relY}px`);
  }, []);
  //   useEffect(() => {
  //     btnRef.current.addEventListener('mouseenter', mouseEvent());
  //     btnRef.current.addEventListener('mouseout', mouseEvent());
  //     return () => {
  //       btnRef.current.removeEventListener('mouseenter', mouseEvent());
  //       btnRef.current.removeEventListener('mouseout', mouseEvent());
  //     };
  //   }, [mouseEvent]);

  return (
    <a className="btn-posnawr" ref={btnRef} href={locationPage}>
      <button type="button" onClick={isDisabled || isLoading ? () => {} : onClick}>
        {btnText}
        <span ref={spanRef} />
      </button>
    </a>
  );
};

export default Button;
