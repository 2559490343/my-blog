import { connect } from 'umi';

function echarts(props: { update: (arg0: number) => void; user: any; }) {
  const handleClick = () => {
    props.update(111);
    console.log(props.user);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

const mapStatetoprops = (state: { user: any; }) => ({
  user: state.user
});
const actions = {
  update: (payload: any) => ({ type: 'user/update', payload }),
};
export default connect(mapStatetoprops, actions)(echarts);
