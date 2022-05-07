import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
import ColorPicker from 'braft-extensions/dist/color-picker';
import Markdown from 'braft-extensions/dist/markdown';
// 引入表情包组件和默认表情包列表
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon';
// 引入组件所需样式文件
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/emoticon.css';
import 'braft-editor/dist/output.css';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
// 首先需要从prismjs中引入需要扩展的语言库
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
const emoticons = defaultEmoticons.map((item) =>
  require(`braft-extensions/dist/assets/${item}`),
);
// 也可以使用自己的表情包资源
// const emoticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

// 通过opitons配置支持的代码语言
const options = {
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript',
    },
    {
      name: 'HTML',
      syntax: 'html',
    },
    {
      name: 'CSS',
      syntax: 'css',
    },
    {
      name: 'Java',
      syntax: 'java',
    },
    {
      name: 'PHP',
      syntax: 'php',
    },
    {
      name: 'GO',
      syntax: 'go',
    },
  ],
};

export const registerPlugins = (BraftEditor: any) => {
  BraftEditor.use(
    ColorPicker({
      theme: 'light', // 支持dark和light两种主题，默认为dark
    }),
  );
  BraftEditor.use(Markdown());
  BraftEditor.use(CodeHighlighter(options));
  // BraftEditor.use(Emoticon({
  //   emoticons: emoticons
  // }))
};
