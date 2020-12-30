import * as actionType from './form-action-type';

const initialState = {
  data: 'new Sata',
  formValue: {
    email: 'dpatil',
    password: '',
  },
};
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};
