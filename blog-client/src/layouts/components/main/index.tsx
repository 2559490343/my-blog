import { ReactChild } from 'react';
import './index.less';
export default function Main(props: { children: ReactChild | undefined }) {
  return <main>{props.children}</main>;
}
