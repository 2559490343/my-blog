const setAction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'aaa',
      });
    }, 2000);
  });
};

export default {
  namespace: 'user',
  state: {
    username: '',
    password: '',
    count: 1,
  },
  effects: {
    *update({ payload }, { call, put }) {
      const res = yield call(setAction, payload);
      yield put({
        type: 'save',
        payload: res,
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      console.log(payload);

      return {
        ...state,
        ...payload,
      };
    },
  },
};
