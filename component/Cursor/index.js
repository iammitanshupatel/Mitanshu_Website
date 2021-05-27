import { useCallback, useEffect, useRef } from 'react';

const Cursor = () => {
  const mouseRef = useRef(null);
//   const mouseMovement = useCallback(e => {
//     const parentOffset = mouseRef.current.getBoundingClientRect();
//     const relX = e.pageX - parentOffset.left;
//     const relY = e.pageY - parentOffset.top;
//     mouseRef.current.style.top = `${relX}px`;
//     mouseRef.current.style.left = `${relY}px`;
//   }, []);
//   useEffect(() => {
//     mouseRef.current.addEventListener('mousemove', mouseMovement);
//     return () => {
//       mouseRef.current.removeEventListener('mousemove', mouseMovement);
//     };
//   }, [mouseMovement]);
  return (
    <div id="cursor" ref={mouseRef}>
      <div className="cursor__label" />
      <div className="cursor__bg" />
    </div>
  );
};

export default Cursor;
