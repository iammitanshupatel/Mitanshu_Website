import { useEffect, useState } from 'react';

const useProgressiveImage = (src, placeholder) => {
  const [sourceLoaded, setSourceLoaded] = useState(placeholder);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);
  return sourceLoaded;
};

export default useProgressiveImage;
