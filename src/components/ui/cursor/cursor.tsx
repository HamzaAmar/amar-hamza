// import React, {
//   useState,
//   useEffect,
//   useCallback,
//   useRef,
// } from 'react';
// import { useEventListener } from '@hooks/useEventListener';
// import IsDevice from '@helpers/isDevice.js';
// import cn from 'classnames';
// import styles from './cursor.module.css';

// function CursorCore({ trailingSpeed = 6 }) {
//   const cursorOuterRef = useRef();
//   const cursorInnerRef = useRef();
//   const requestRef = useRef();
//   const previousTimeRef = useRef();
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [isActiveClickable, setIsActiveClickable] = useState(false);
//   let endX = useRef(0);
//   let endY = useRef(0);

//   console.log(
//     'this is the value of currentOuterRef',
//     cursorOuterRef.current,
//   );
//   console.log(cursorInnerRef.current);

//   // Primary Mouse Move event
//   const onMouseMove = useCallback(({ clientX, clientY }) => {
//     setCoords({ x: clientX, y: clientY });
//     cursorInnerRef.current.style.top = `${clientY}px`;
//     cursorInnerRef.current.style.left = `${clientX}px`;
//     endX.current = clientX;
//     endY.current = clientY;
//   }, []);

//   // Outer Cursor Animation Delay
//   const animateOuterCursor = useCallback(
//     (time) => {
//       if (previousTimeRef.current !== undefined) {
//         coords.x += (endX.current - coords.x) / trailingSpeed;
//         coords.y += (endY.current - coords.y) / trailingSpeed;
//         cursorOuterRef.current.style.top = `${coords.y}px`;
//         cursorOuterRef.current.style.left = `${coords.x}px`;
//       }
//       previousTimeRef.current = time;
//       requestRef.current = requestAnimationFrame(animateOuterCursor);
//     },
//     [requestRef], // eslint-disable-line
//   );

//   // RAF for animateOuterCursor
//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animateOuterCursor);
//     return () => {
//       cancelAnimationFrame(requestRef.current);
//     };
//   }, [animateOuterCursor]);

//   // Mouse Events State updates
//   const onMouseDown = () => {
//     setIsActive(true);
//   };

//   const onMouseUp = () => {
//     setIsActive(false);
//   };

//   const onMouseEnterViewport = () => {
//     setIsVisible(true);
//   };

//   const onMouseLeaveViewport = () => {
//     setIsVisible(false);
//   };

//   useEventListener('mousemove', onMouseMove);
//   useEventListener('mousedown', onMouseDown);
//   useEventListener('mouseup', onMouseUp);
//   useEventListener('mouseover', onMouseEnterViewport);
//   useEventListener('mouseout', onMouseLeaveViewport);

//   useEffect(() => {
//     const clickables = document.querySelectorAll(
//       'a, input[type="submit"], input[type="image"], label[for], select, button, .link',
//     );
//     clickables.forEach((el) => {
//       el.style.cursor = 'none';

//       el.addEventListener('mouseover', () => {
//         setIsActive(true);
//       });
//       el.addEventListener('click', () => {
//         setIsActive(true);
//         setIsActiveClickable(false);
//       });
//       el.addEventListener('mousedown', () => {
//         setIsActiveClickable(true);
//       });
//       el.addEventListener('mouseup', () => {
//         setIsActive(true);
//       });
//       el.addEventListener('mouseout', () => {
//         setIsActive(false);
//         setIsActiveClickable(false);
//       });
//     });

//     return () => {
//       clickables.forEach((el) => {
//         el.removeEventListener('mouseover', () => {
//           setIsActive(true);
//         });
//         el.removeEventListener('click', () => {
//           setIsActive(true);
//           setIsActiveClickable(false);
//         });
//         el.removeEventListener('mousedown', () => {
//           setIsActiveClickable(true);
//         });
//         el.removeEventListener('mouseup', () => {
//           setIsActive(true);
//         });
//         el.removeEventListener('mouseout', () => {
//           setIsActive(false);
//           setIsActiveClickable(false);
//         });
//       });
//     };
//   }, [isActive]);

//   const innerStyle = cn(styles.cursor, styles.inner, {
//     [styles.cursorHover]: isActive,
//     [styles.cursorHidden]: !isVisible,
//     [styles.cursorClicked]: isActiveClickable,
//   });
//   const outerStyle = cn(styles.cursor, styles.outer, {
//     [styles.cursorHidden]: !isVisible,
//     [styles.cursorClicked]: isActiveClickable,
//   });

//   return (
//     <React.Fragment>
//       <div
//         ref={cursorOuterRef}
//         style={{ left: coords.x, top: coords.y }}
//         className={outerStyle}
//       />
//       <div
//         ref={cursorInnerRef}
//         style={{ left: coords.x, top: coords.y }}
//         className={innerStyle}
//       />
//     </React.Fragment>
//   );
// }

// export default CursorCore;

import React, { useEffect, useState } from 'react';

import styles from './cursor.module.css';

const Cursor = () => {
  const [{ x, y }, setPosition] = useState({ x: 100, y: 100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousedown', onMouseDown);
    // window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  function onMouseUp() {
    setIsClicked(false);
  }

  function onMouseDown() {
    setIsClicked(true);
  }

  function onMouseEnterViewport() {
    setIsVisible(true);
  }

  function onMouseMove({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) {
    setPosition({ x: clientX, y: clientY });
  }

  return (
    <div
      data-isClicked={isClicked}
      className={`${styles.cursor} ${styles.outer}`}
      style={{ left: x, top: y }}
    />
  );
};

export default Cursor;
