// https://react-svgr.com/docs/jest/
import * as React from 'react';
export default 'SvgrURL';
const SvgrMock = React.forwardRef((props, ref) => <div ref={ref} {...props} />);
export const ReactComponent = SvgrMock;
