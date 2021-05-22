// import { useEffect, useRef } from 'react';

// const PreLoader = () => {
//   const preLoaderRef = useRef(null);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       preLoaderRef.current.classList.add('loaded');
//     }, 3000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);
//   return (
//     <div ref={preLoaderRef} id="loader">
//       <span className="loading">
//         <span className="txt">Loading</span>
//         <span className="progress">
//           <span className="bar-loading" />
//         </span>
//       </span>
//     </div>
//   );
// };

// export default PreLoader;

import { useEffect, useRef } from 'react';

const PreLoader = () => {
  const preLoaderRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      preLoaderRef.current.classList.add('loaded');
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div ref={preLoaderRef} className="preloader">
      <div className="loader " />
    </div>
  );
};
export default PreLoader;
