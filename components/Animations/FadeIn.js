import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FadeIn = ({
  children,
  direction = null,
  duration = 1,
  distance = 200,
}) => {

  let componentRef = useRef(null);
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: distance };
      break;
    case "right":
      fadeDirection = { x: -distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    gsap.from(componentRef.current, {
      duration,
      opacity: 0,
      ...fadeDirection,
    });
  }, [duration, fadeDirection]);

  return <div ref={componentRef}>{children}</div>;
};

export default FadeIn;