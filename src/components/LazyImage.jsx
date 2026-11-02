import { useRef, useState, useSyncExternalStore } from 'react';
import { useInView } from 'motion/react';
import { getNavigating, subscribeNavigating } from '../utils/navigationState';

export default function LazyImage({ src, alt, className = '', ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '150px 0px' });
  const isNavigating = useSyncExternalStore(
    subscribeNavigating,
    getNavigating,
    getNavigating
  );
  const [loaded, setLoaded] = useState(false);

  const shouldLoad = loaded || (inView && !isNavigating);

  return (
    <img
      ref={ref}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,transform] duration-500 ease-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      {...props}
    />
  );
}
