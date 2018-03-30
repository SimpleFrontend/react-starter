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
  state = {
    count: 0,
    hoo: 1,
  };
  render() {
    const a = this.props.foo;
    const b = this.state.count;
    const c = this.state.hoo;
    console.log(a);
    console.log(b);
    console.log(c);

    return <div>{this.props.bar}</div>;
  }
}

export default MyComponent;
