import React, { Component } from 'react';
import { Tooltip, Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { attribution, tileUrl, defaultMapState } from './utils/Utils';
import 'leaflet/dist/leaflet.css';

export default class DataPointMap extends Component {
  state = defaultMapState;
  render() {
    return this.props.show && this.props.data.length ? (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{
          width: '100%',
          position: 'absolute',
          marginTop: 20,
          top: 0,
          bottom: 0,
          border: 'solid black 2px',
          zIndex: 500,
        }}
        updateWhenZooming={false}
        updateWhenIdle={true}
        preferCanvas={true}
        minZoom={this.state.minZoom}
      >
        <TileLayer attribution={attribution} url={tileUrl} />
        {this.props.data.map((loc, idx) => {
          if (loc.location && loc.location.latitude)
            return (
              <CircleMarker
                key={`${loc.id}`}
                color="#003399"
                opacity={1}
                radius={5}
                weight={2}
                onClick={() => {
                  this.setState({ activeMountain: loc });
                }}
                center={[loc.location.latitude, loc.location.longitude]}
              >
                <Tooltip>
                  Species: {loc.fish_species}
                  <br />
                  Status: {loc.fish_status}
                </Tooltip>
              </CircleMarker>
            );
        })}
        )}
      </Map>
    ) : (
      <div></div>
    );
  }
}
