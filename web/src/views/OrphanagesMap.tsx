import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import api from '../services/api';
import Orphanage from './Orphanage';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  approved: boolean;
}

function OrphanagesMap() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Logo" />

          <h2>Encontre o profissional parceiro mais próximo de você no mapa</h2>

         
        </header>

        <footer>
          <p>Sua localização: </p>
          <strong>Latidude: {position.latitude}</strong>
          <span>Longitude: {position.longitude}</span>

          <Link to="/" className="home-back">
            <FiArrowLeft size={26} color="#ffd666" />
          </Link>
        </footer>
      </aside>

      <Map
        center={[position.latitude, position.longitude]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        ></TileLayer>

        {orphanages.map((orphanage) => {
          if (!orphanage.approved) return null;
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
