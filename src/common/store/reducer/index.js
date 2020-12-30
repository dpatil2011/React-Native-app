import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import leaveReducer from './../../../module/apply-leave/store/apply-leave-reducer';
import applyReducer from './../../../module/form/store/form-reducer';

const appReducers = combineReducers({
  form: formReducer,
  leave: leaveReducer,
  apply: applyReducer,
});

export default appReducers;
