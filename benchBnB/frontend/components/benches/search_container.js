import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches, updateFilterCreator } from '../../actions/bench_actions';
import { updateBoundsCreator } from '../../actions/filter_actions';
import { allBenches } from '../../reducers/selectors';

const mapStateToProps = state => ({
  benches: allBenches(state),
  min_seating: state.filters.min_seating,
  max_seating: state.filters.max_seating
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  // updateBoundsCreator: bounds => dispatch(updateBoundsCreator(bounds)),
  updateFilterCreator: (filter, value) => dispatch(updateFilterCreator(filter, value))
});

export default connect(mapStateToProps,mapDispatchToProps)(Search);
