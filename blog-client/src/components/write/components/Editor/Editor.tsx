import styles from './Editor.less';
import BraftEditor, { EditorState, ExtendControlType } from 'braft-editor';
import { EyeOutlined } from '@ant-design/icons';
import { registerPlugins } from './constant';

registerPlugins(BraftEditor);

interface EditorProps {
  editorValue: EditorState;
  setEditorValue: (val: EditorState) => void;
}
const Editor: React.FC<EditorProps> = (props) => {
  const { editorValue, setEditorValue } = props;
  const handleEditorChange = (editorState: EditorState) => {
    setEditorValue(editorState);
  };

  const handlePreview = () => {
    console.log(editorValue.toHTML());
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
      />
    </div>
  );
};
export default Editor;
