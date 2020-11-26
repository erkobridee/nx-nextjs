/*
  https://www.carlrippon.com/react-forwardref-typescript/
  https://www.selbekk.io/blog/2020/05/forwarding-refs-in-typescript/
  https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
*/

import React from 'react';

import './index.module.scss';

/* eslint-disable-next-line */
export interface TargetBlankLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TargetBlankLink = React.forwardRef<
  HTMLAnchorElement,
  TargetBlankLinkProps
>(({ target, rel, children, ...otherProps }, ref) => {
  target = '_blank';
  rel = 'noopener noreferrer';
  return <a {...{ ...otherProps, ref, target, rel }}>{children}</a>;
});

export default TargetBlankLink;
