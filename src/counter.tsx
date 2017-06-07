import * as React from 'react';

interface Props {
  count: number;
}

export default (props: Props) => (
  <p>Count: {props.count}</p>
);
