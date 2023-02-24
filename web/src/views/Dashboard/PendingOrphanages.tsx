import React, { useEffect, useState } from 'react';
import { FiCheck, FiTrash, FiEye } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapIcon from '../../utils/mapIcon';
import noOrph from '../../images/no-orph.svg';

import DashSideBar from '../../components/DashSideBar';

import '../../styles/pages/dashboard.css';

import api from '../../services/api';
import Orphanage from '../../views/Orphanage';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  approved: boolean;
}

export default function Pending() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const history = useHistory();

  function notApproved(orphanage: Orphanage) {
    return orphanage.approved === false;
  }

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  const filteredOrphanages = orphanages.filter(notApproved);

  async function handleUpdate(id: any) {
    await api.post(`/orphanages/update/${id}`);

    history.push('/updateSuccess');
  }

  async function handleRemove(id: any) {
    await api.post(`/orphanages/remove/${id}`);

    history.push('/removeSuccess');
  }

  return (
    <div id="page-registred">
      <DashSideBar />
      <div className="content-wrapper">
        <main className="dashboard-main">
          <div className="registred-orphanages">
            <div className="info">
              <h1>Cadastros Pendentes</h1>
              <p>{filteredOrphanages.length} profissionais</p>
            </div>
            <div className="cards-wrapper">
              {filteredOrphanages.length === 0 ? (
                <img src={noOrph} alt="Sem orfanatos" className="no-orph" />
              ) : null}
              {filteredOrphanages.map((orphanage) => {
                return (
                  <div key={orphanage.id} className="card">
                    <Map
                      key={orphanage.id}
                      center={[orphanage.latitude, orphanage.longitude]}
                      style={{ width: '100%', height: 280 }}
                      zoom={13}
                    >
                      <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />
                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                      />
                      )
                    </Map>

                    <div className="card-info">
                      <h2>{orphanage.name}</h2>

                      <div className="card-buttons">
                        <Link
                          to={`/orphanages/${orphanage.id}`}
                          className="card-btn"
                        >
                          <FiEye size={20} />
                        </Link>
                        <button
                          onClick={() => handleUpdate(orphanage.id)}
                          className="card-btn"
                        >
                          <FiCheck size={20} />
                        </button>

                        <button
                          onClick={() => handleRemove(orphanage.id)}
                          className="card-btn"
                        >
                          <FiTrash size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
