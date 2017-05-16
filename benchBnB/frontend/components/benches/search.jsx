import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, fetchBenches, min_seating, max_seating, updateFilterCreator }) => {


  return (
      <div>
        <BenchMap benches={ benches } updateFilterCreator={updateFilterCreator}/>
        <BenchIndex benches={ benches } fetchBenches={ fetchBenches }/>
        <FilterForm min_seating={min_seating} max_seating={max_seating} updateFilterCreator={updateFilterCreator}/>
      </div>
);};

export default Search;
