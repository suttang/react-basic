import * as React from 'react';

export interface Props {
  label: string;
  onClick: () => void;
}

export default (props: Props) => (
  <button onClick={props.onClick}>{props.label}</button>
);
