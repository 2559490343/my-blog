import { Viewer } from '@bytemd/react';
import plugin from './plugins';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/vs.css';
import { useState } from 'react';
const { plugins } = plugin;
export default function mdViewer(props: { value: string }) {
  return <Viewer value={props.value} plugins={plugins} />;
}
