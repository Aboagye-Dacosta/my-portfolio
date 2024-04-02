import { useEffect, useState } from "react";

export const usePointer = (ref) => {
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const currentPos = ({ clientX, clientY }) => {
      setPointerPos({ x: clientX, y: clientY });
    };
    window.addEventListener("pointermove", currentPos);
    return () => window.removeEventListener("pointermove", currentPos);
  }, [ref]);

  return { pointerPos };
};
