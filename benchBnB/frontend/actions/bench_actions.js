import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const UPDATE_FILTER = 'UPDATE_FILTER';



export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});


export const updateFilterCreator = (filter, value) => (dispatch, getState) => {

  dispatch(updateFilter(filter, value));
  return fetchBenches(value)(dispatch);
};

export const fetchBenches = (bounds) => dispatch => (
  APIUtil.fetchBenches(bounds).then(benches => dispatch(receiveBenches(benches)))
);


export const addBench = bench => dispatch => (
  APIUtil.addBench(bench).then(newBench => dispatch(receiveBench(newBench)))
);


// export function updateBoundsCreator (bounds) {
//  return (dispatch, getState) => {
//     dispatch(updateBounds(bounds));
//     APIUtil.fetchBenches(getState().filters).then(benches => dispatch(receiveBenches(benches)));
//   };
// }
