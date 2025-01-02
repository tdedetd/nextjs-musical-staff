'use client';

import { JSX, useLayoutEffect, useRef, useState } from 'react';
import { StaffView } from './components/StaffView/StaffView';
import { piratesOfTheCaribbean } from './utils/constants/tracks/pirates-of-the-caribbean';
import { debounce } from './utils/functions/debounce';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(containerRef.current?.clientWidth ?? 0);

  useLayoutEffect(() => {
    setContainerWidth(containerRef.current?.clientWidth ?? 0);

    const listener = debounce(window, 'resize', 500, () => {
      setContainerWidth(containerRef.current?.clientWidth ?? 0);
    });

    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  return (
    <div ref={containerRef}>
      <StaffView
        staff={piratesOfTheCaribbean}
        width={containerWidth}
      />
    </div>
  );
}
