import React, { FC } from 'react';

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = function ({ text }) {
  return <div>{text}</div>;
};

export default Text;
