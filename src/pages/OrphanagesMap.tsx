import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { FiPlus, FiArrowRight } from "react-icons/fi";

import mapMarkerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperado a sua visita</p>
        </header>

        <footer>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </footer>
      </aside>

      <Map
        center={[-2.5214101, -44.2107223]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-2.5214101, -44.2107223]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;