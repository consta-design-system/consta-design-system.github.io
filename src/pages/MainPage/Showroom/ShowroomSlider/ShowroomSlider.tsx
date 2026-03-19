import './ShowroomSlider.css';

import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '##/utils/bem';

type Props = {
  rows: React.ReactNode[];
};

const cnShowroomSlider = cn('ShowroomSlider');

const scrollDirections = ['stop', 'up', 'down'] as const;
type ScrollDirection = (typeof scrollDirections)[number];

export const ShowroomSlider: React.FC<Props> = ({ rows }) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    scrollDirections[0],
  );
  const ref = useRef<HTMLDivElement>(null);

  const scrollTop = useMemo(
    () => createRef() as React.MutableRefObject<number>,
    [],
  );

  useEffect(() => {
    scrollTop.current = window.pageYOffset;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollTop.current === window.pageYOffset) {
        if (scrollDirection !== scrollDirections[0]) {
          setScrollDirection(scrollDirections[0]);
        }
      }
      if (window.pageYOffset > scrollTop.current) {
        if (scrollDirection !== scrollDirections[2]) {
          setScrollDirection(scrollDirections[2]);
        }
      }
      if (window.pageYOffset < scrollTop.current) {
        if (scrollDirection !== scrollDirections[1]) {
          setScrollDirection(scrollDirections[1]);
        }
      }
      scrollTop.current = window.pageYOffset;
    }, 300);
    return () => clearInterval(interval);
  }, [scrollDirection]);

  return (
    <div ref={ref} className={cnShowroomSlider({ scrollDirection })}>
      {rows.map((row, index) => (
        <div key={index} className={cnShowroomSlider('Row')}>
          <div className={cnShowroomSlider('Group')}>
            {row}
            {row}
            {row}
          </div>
        </div>
      ))}
    </div>
  );
};
