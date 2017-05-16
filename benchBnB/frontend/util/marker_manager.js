

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }


  createMarkerFromBench(bench){
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: 'this is a bench'
    });
    this.markers[bench.id] = marker;
  }

  removeMarker(marker){
    this.markers[marker].setMap(null);
    delete this.markers[marker];
  }

  updateMarkers(benches){
    benches.forEach(bench => {
      if (!(bench.id in this.markers)){
        this.createMarkerFromBench(bench);
      }
    });

    let benchesObj = {};
    benches.forEach(bench => {
      benchesObj[bench.id] = bench;
    });

    Object.keys(this.markers).forEach(marker => {
      if (!(marker in benchesObj)){
        this.removeMarker(marker);
      }
    });


  }
}

export default MarkerManager;


//For each bench, if the id is not a key in this.markers, create a new marker from it and add it to the map and this.markers
// Add the following helper methods:
//
// createMarkerFromBench(bench): accepts a bench object as an argument; adds a marker to the map and to the markers object
