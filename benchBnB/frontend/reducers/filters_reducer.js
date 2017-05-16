import { UPDATE_FILTER } from '../actions/filter_actions';


const defaultState = {
  bounds: {},
  min_seating: 1,
  max_seating: 10
};

const FiltersReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case UPDATE_FILTER:
    console.log(action.filter);
      return Object.assign({}, state, action.filter);
    default:
      return state;
  }
};

export default FiltersReducer;
