import { useEffect, useRef, useState } from 'react';

const useThrottleScroll = (delay, top) => {
  const [scrollPosition, setScrollPosition] = useState(top);
  const throttleTimeout = useRef(null);
  const requestRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!throttleTimeout.current && scrollPosition < 400) {
        throttleTimeout.current = setTimeout(() => {
          requestRef.current = requestAnimationFrame(() => {
            setScrollPosition(top + window.scrollY);
          });
          throttleTimeout.current = null;
        }, delay);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [delay, top]);
  return scrollPosition;
};

export default useThrottleScroll;