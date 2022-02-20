import { connect } from 'umi';
import { get } from '@/utils/request';
import { useState } from 'react';
import { DvaActionsType } from '@/utils/types';

interface EchartsProps {
  update: DvaActionsType;
  user: any;
}
const Echarts: React.FC<EchartsProps> = (props) => {
  const { update, user } = props;
  const handleClick = () => {
    update(222);
    get('/api/v1/random', {
      dataType: 'blob',
    }).then((res) => {
      console.log(res);

      const { data, headers, ok } = res;
      console.log(ok);
      const contentType = headers.get('Content-Type');
      let blob = new Blob([data as any], { type: contentType || undefined }); // data为二进制数据
      let URL = window.URL.createObjectURL(blob);
      setUrl(URL);
    })
  };
  const [imgUrl, setUrl] = useState('');
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <img src={imgUrl} alt="" />
      <span>{user.username}</span>
    </div>
  );
};

const mapStatetoprops = (state: { user: any }) => ({
  user: state.user,
});
const actions = {
  update: (payload: any) => ({ type: 'user/update', payload }),
};
export default connect(mapStatetoprops, actions)(Echarts);
