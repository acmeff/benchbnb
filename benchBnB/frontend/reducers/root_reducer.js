import SessionReducer from './session_reducer';
import BenchesReducer from './benches_reducer';
import FiltersReducer from './filters_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchesReducer,
  filters: FiltersReducer
});

export default rootReducer;
