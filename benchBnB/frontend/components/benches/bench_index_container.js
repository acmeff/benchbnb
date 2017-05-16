import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';
import { allBenches } from '../../reducers/selectors';

const mapStateToProps = state => ({
  benches: allBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps,mapDispatchToProps)(BenchIndex);
