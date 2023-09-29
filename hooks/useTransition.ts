import { useEffect, useState } from "react";

const useTransition = (inputArr: string[] | object[]) => {
  const [currentSlide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev === inputArr.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, [inputArr.length]);

  return currentSlide;
};

export default useTransition;
