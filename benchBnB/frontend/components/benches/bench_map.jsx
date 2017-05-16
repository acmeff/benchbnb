import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  constructor(props){
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    this.map.addListener('idle', () => {
      let newBounds = this.map.getBounds();
      let ne = newBounds.getNorthEast();
      let sw = newBounds.getSouthWest();
      let bounds = {
        bounds: {
        'northEast': {'lat': ne.lat(), 'lng': ne.lng()},
        'southWest': {'lat': sw.lat(), 'lng': sw.lng()}
      }
      };
      this.props.updateFilterCreator('bounds', bounds);
      // this.props.updateBoundsCreator(bounds);
      this.map.addListener('click', (e) =>{
        this.handleClick({'lat': e.latLng.lat(), 'lng': e.latLng.lng()});
      });
    });


  }

  handleClick(coords){
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.benches);
  }



  render(){
    return (
      <div id='map-container'
           ref={ map => this.mapNode = map }></div>
    );
  }
}

export default withRouter(BenchMap);
