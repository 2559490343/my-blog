import styles from './Editor.less';
import BraftEditor, { EditorState, ExtendControlType } from 'braft-editor';
import { EyeOutlined } from '@ant-design/icons';
import { registerPlugins } from './constant';
import { useBoolean } from 'ahooks';
import Previewer from '@/components/Previewer';

registerPlugins(BraftEditor);

interface EditorProps {
  editorValue: EditorState;
  setEditorValue: (val: EditorState) => void;
}
const Editor: React.FC<EditorProps> = (props) => {
  const { editorValue, setEditorValue } = props;
  const [showPreview, { toggle }] = useBoolean(false);
  const handleEditorChange = (editorState: EditorState) => {
    setEditorValue(editorState);
  };

  const handlePreview = () => {
    toggle();
  };
  const extendControls: ExtendControlType[] = [
    {
      key: 'custom-button',
      type: 'button',
      title: '预览',
      text: <EyeOutlined />,
      onClick: handlePreview,
    },
  ];
  return (
    <div className={styles.root}>
      <BraftEditor
        value={editorValue}
        onChange={handleEditorChange}
        placeholder="请输入文章内容"
        extendControls={extendControls}
        className={styles.editor}
      />
      {showPreview && (
        <div className={styles.previewBox}>
          <Previewer contentValue={editorValue.toHTML()} />
        </div>
      )}
    </div>
  );
};
export default Editor;
