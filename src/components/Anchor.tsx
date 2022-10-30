import React, { PropsWithChildren } from 'react';

const Anchor: React.FC<
  PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = function ({ children, ...rest }) {
  return (
    <a {...rest} rel="noreferrer external noopener" target="_blank">
      {children}
    </a>
  );
};

export default Anchor;
