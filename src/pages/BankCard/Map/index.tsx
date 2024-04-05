import React, { createRef, PureComponent, RefObject } from 'react';
import mapboxgl from 'mapbox-gl';

import { BanksDataType } from '@/types/type';

import classes from './styles.scss';

type MapState = {
  markers: unknown[];
}
type MapProps = {
  data: BanksDataType[];
}

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_JL_API;

export class Map extends PureComponent<MapProps, MapState> {
  mapContainer: RefObject<HTMLDivElement> | HTMLDivElement;

  map: unknown;

  constructor(props: MapProps | Readonly<MapProps>) {
    super(props);
    this.state = {
      markers: [],
    };
    this.mapContainer = createRef<HTMLDivElement>();
    this.map = null;
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [27.559891, 53.896962],
      zoom: 10,
    });

    this.addMarkers();
  }

  componentDidUpdate(prevProps: MapProps) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      this.removeMarkers();
      this.addMarkers();
    }
  }

  addMarkers() {
    const { data } = this.props;
    const markers = data.map((bank) => {
      const popup = new mapboxgl.Popup({ className: `${classes.wrapper_popUpm}` })
        .setHTML(`<h3>${bank.name}</h3>
        <span>Coordinates: ${bank.coordinates.join(', ')}</span>
        <span>Currencies: ${bank.currencies.join(', ')}</span>`);

      const marker = new mapboxgl.Marker({
        color: 'blue',
      })
        .setLngLat(bank.coordinates)
        .setPopup(popup)
        .addTo(this.map);

      return marker;
    });

    this.setState({ markers: [...markers] });
  }

  removeMarkers() {
    const { markers } = this.state;
    markers.forEach((marker) => marker.remove());
    this.setState({ markers: [] });
  }

  render() {
    return (
      <div
        className={classes.map_wpapper}
        ref={(el) => this.mapContainer = el}
      />
    );
  }
}
