// @flow
import * as React from 'react';

type Props = {
  foo: number,
  bar: ?string,
  hoo: string,
};

const MyStatelessComponent = ({ foo, bar, ...props }: Props) => (
  <div {...props}>{foo || bar + props.hoo}</div>
);

export default MyStatelessComponent;
