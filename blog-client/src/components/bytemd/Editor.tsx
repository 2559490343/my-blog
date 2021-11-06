import { Editor } from '@bytemd/react';
import plugin from './plugins';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/vs.css';

const { plugins, zhHans } = plugin;
export default function mdEditor(props: { value: string; setValue: any }) {
  const { value, setValue } = props;
  return (
    <Editor
      value={value}
      plugins={plugins}
      locale={zhHans}
      onChange={(v) => {
        setValue(v);
      }}
      uploadImages={async (files) => {
        console.log('files', files);
        return [
          {
            name: 'aaa',
            url: 'https://joeschmoe.io/api/v1/random',
          },
        ];
      }}
    />
  );
}
