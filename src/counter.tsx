import * as React from 'react';

export interface Props {
  count: number
}

export default (props: Props) => (
  <p>Count: {props.count}</p>
);
