import zhHans from 'bytemd/lib/locales/zh_Hans.json'; //默认是英文版，我们替换成中文的
import gfm from '@bytemd/plugin-gfm';
import gemoji from '@bytemd/plugin-gemoji';
import highlightSsr from '@bytemd/plugin-highlight-ssr';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import breaks from '@bytemd/plugin-breaks';
import footnotes from '@bytemd/plugin-footnotes';
import frontmatter from '@bytemd/plugin-frontmatter';
import highlight from '@bytemd/plugin-highlight';
import math from '@bytemd/plugin-math';
import mathSsr from '@bytemd/plugin-math-ssr';
import mermaid from '@bytemd/plugin-mermaid';
import importImage from '@bytemd/plugin-import-image';
export default {
  zhHans,
  plugins: [
    gfm(),
    gemoji(),
    highlightSsr(),
    mediumZoom(),
    breaks(),
    footnotes(),
    frontmatter(),
    highlight(),
    math(),
    mathSsr(),
    mermaid(),
    importImage({
      upload: async (files) => {
        console.log('files', files);
        return files.map((file) => file.name);
      },
    }),
  ],
};
