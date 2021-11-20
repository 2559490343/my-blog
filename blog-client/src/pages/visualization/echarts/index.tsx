import { connect } from 'umi';
import { get } from '@/utils/request';
import { useState } from 'react';

function echarts(props: { update: (arg0: number) => void; user: any }) {
  const handleClick = () => {
    props.update(111);
    get('/api/v1/random', {
      dataType: 'blob',
    }).then((res) => {
      console.log(res);
      
      const { data, headers, ok } = res;
      console.log(ok);
      const contentType = headers.get('Content-Type');
      let blob = new Blob([data], { type: contentType || undefined }); // data为二进制数据
      let URL = window.URL.createObjectURL(blob);
      setUrl(URL);
    });
  };
  const [imgUrl, setUrl] = useState('');
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <img src={imgUrl} alt="" />
    </div>
  );
}

const mapStatetoprops = (state: { user: any }) => ({
  user: state.user,
});
const actions = {
  update: (payload: any) => ({ type: 'user/update', payload }),
};
export default connect(mapStatetoprops, actions)(echarts);
