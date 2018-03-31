// @flow
import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

type State = {
  count: number,
};

class MyComponent extends React.Component<Props, State> {
  static state = {
    count: 0,
    hoo: 1,
  };

  render() {
    const { foo, bar, ...props } = this.props;
    const { count, hoo } = this.state;

    return <div {...props}>{bar + hoo + count}</div>;
  }
}

export default MyComponent;
