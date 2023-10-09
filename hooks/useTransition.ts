import { useEffect, useState } from "react";

const useTransition = (inputArr: string[] | object[], timeDelay?: number) => {
  const [currentSlide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev === inputArr.length - 1 ? 0 : prev + 1)),
      timeDelay || 7000
    );
    return () => clearInterval(interval);
  }, [inputArr.length, timeDelay]);

  return currentSlide;
};

export default useTransition;
