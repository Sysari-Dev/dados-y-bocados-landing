import { useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function LazyImage({ src, alt, className = '', ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '150px 0px' });
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      ref={ref}
      src={inView ? src : undefined}
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
