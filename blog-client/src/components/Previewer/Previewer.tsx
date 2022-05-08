import { HTMLAttributes, useEffect, useMemo } from 'react';
import styles from './Previewer.less';
import cn from 'classnames';
//@ts-ignore
import Prism from 'prismjs';

interface PreviewerProps extends HTMLAttributes<HTMLDivElement> {
  contentValue: string;
}
const Previewer: React.FC<PreviewerProps> = (props) => {
  const { contentValue, className, ...restProps } = props;
  // 处理富文本编辑器类名跟prismjs需求的类名不一致的问题
  // 同时处理prismjs格式化样式时把<br />换行标签去除的问题
  const previewContent = useMemo(
    () => contentValue.replace(/lang-/g, 'language-').replace(/<br\/>/g, '\n'),
    [contentValue],
  );
  useEffect(() => {
    Prism.highlightAll();
  }, [previewContent]);
  
  return (
    <div className={cn(styles.root, className)} {...restProps}>
      <div dangerouslySetInnerHTML={{ __html: previewContent }}></div>
    </div>
  );
};
export default Previewer;
