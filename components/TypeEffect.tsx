"use client";

import Typewriter from "typewriter-effect";

type Props = {
  words: string[];
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
