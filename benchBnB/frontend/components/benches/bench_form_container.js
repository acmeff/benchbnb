import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { addBench } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  lat: new URLSearchParams(ownProps.location.search).get("lat"),
  lng: new URLSearchParams(ownProps.location.search).get("lng")
});

const mapDispatchToProps = dispatch => ({
  addBench: bench => dispatch(addBench(bench))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
