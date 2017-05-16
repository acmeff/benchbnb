import * as APIUtil from '../util/bench_api_util';
import { receiveBenches } from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';



export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

//
// export function updateBoundsCreator (bounds) {
//  return (dispatch, getState) => {
//     dispatch(updateBounds(bounds));
//     APIUtil.fetchBenches(getState().filters).then(benches => dispatch(receiveBenches(benches)));
//   };
// }
