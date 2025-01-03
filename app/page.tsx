'use client';

import { JSX, useLayoutEffect, useRef, useState } from 'react';
import { Staff } from './components/Staff/Staff';
import { piratesOfTheCaribbean } from './utils/constants/tracks/pirates-of-the-caribbean';
import { debounce } from './utils/functions/debounce';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    setContainerWidth(containerRef.current?.clientWidth ?? 0);

    const listener = debounce(window, 'resize', 200, () => {
      setContainerWidth(containerRef.current?.clientWidth ?? 0);
    });

    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  return (
    <div ref={containerRef}>
      <Staff
        staff={piratesOfTheCaribbean}
        width={containerWidth}
      />
    </div>
  );
}
