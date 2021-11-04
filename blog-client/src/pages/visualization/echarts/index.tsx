import { useState } from 'react';
import { Editor, Viewer } from '@/components/btyemd';

export default function echarts() {
  const [value, setValue] = useState('');
  return (
    <div>
      <Editor value={value} setValue={setValue} />
      <Viewer value={value} />
    </div>
  );
}
