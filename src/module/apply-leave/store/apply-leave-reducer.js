import * as actionType from './apply-leave-action-type';

const initialState = {
  data: 'here the data',
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};
