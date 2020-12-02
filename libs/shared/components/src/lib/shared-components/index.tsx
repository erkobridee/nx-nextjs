import React from 'react';

import './index.module.scss';

/* eslint-disable-next-line */
export interface SharedComponentsProps {}

export function SharedComponents(props: SharedComponentsProps) {
  return (
    <div className="rounded shadow-md p-3">
      <h1 className="font-open-sans text-blue-500">
        Welcome to shared-components!
      </h1>
    </div>
  );
}

export default SharedComponents;
