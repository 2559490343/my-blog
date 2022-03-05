import { connect } from 'umi';
import { get } from '@/utils/request';
import { useState } from 'react';
import { DvaActionsType } from '@/utils/types';
import { addApi, getListApi, getApi, deleteApi } from './services';

interface EchartsProps {
  update: DvaActionsType;
  user: any;
}
const Echarts: React.FC<EchartsProps> = (props) => {
  const { update, user } = props;
  const handleClick = () => {
    update(222);
    getListApi({
      pageSize: 10,
      pageNum: 1,
      book: {
        name: '1121',
      },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
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
