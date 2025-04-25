"use client";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleCursorHover = () => setIsCursorHovering(true);
    const handleCursorLeave = () => setIsCursorHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const clickableElements = document.querySelectorAll("a, .cursor-pointer");
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleCursorHover);
      element.addEventListener("mouseleave", handleCursorLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleCursorHover);
        element.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`mouse-cursor cursor-outer ${isCursorHovering ? "cursor-hover" : ""}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
      <div
        className={`mouse-cursor cursor-inner ${isCursorHovering ? "cursor-hover" : ""}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          transition: "transform 0.05s linear",
        }}
      />
    </>
  );
};

export default CustomCursor;
