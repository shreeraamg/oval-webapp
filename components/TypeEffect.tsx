"use client";

import Typewriter from "typewriter-effect";

type Props = {
  words: string[];
  // pauseTime?: number;
};

const TypeEffect = ({ words }: Props) => {
  return (
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeEffect;
