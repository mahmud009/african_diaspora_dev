import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState, useRef } from "react";

import TestImage from "./img/test-image.jpg";
const Test = () => {
  let wrapper = useRef(null);

  const [scrolling, setScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setScrolling(true);
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setScrolling(false);
  };

  const handleMove = (e) => {
    e.preventDefault();
    if (scrolling) {
      let amountX = scrollPosition.x + e.clientX - mousePosition.x;
      let amountY = scrollPosition.y + e.clientY - mousePosition.y;
      wrapper.current.scrollLeft += amountX;
      wrapper.current.scrollTop += amountY;
      setMousePosition({ x: e.clientX, y: e.clientY });
      setScrollPosition({ x: amountX, y: amountY });
    }
  };

  return (
    <div className="test-wrapper" ref={wrapper}>
      <img
        className="test-image"
        src={TestImage}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMove}
      />
    </div>
  );
};

export default Test;
