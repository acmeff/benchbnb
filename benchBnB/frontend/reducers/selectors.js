import values from 'lodash/values';

export const allBenches = state => (
  values(state.benches)
);
