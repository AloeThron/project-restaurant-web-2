import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, type LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

import { markers } from "@/data/markers";
import Image from "next/image";

type Props = {
  isMobile: boolean;
};

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

export default function EditMap({ isMobile }: Props) {
  return (
    <MapContainer
      center={[34.052235, -118.243683]}
      zoom={isMobile ? 10 : 12}
      className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>openstreetmap</a> contributors"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {/* markers*/}
      {markers.map((marker, index) => {
        return (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div className="flex gap-x-[30px]">
                <div className="flex-1">
                  <h3>{marker.title}</h3>
                  <p className="leading-snug">{marker.subtitle}</p>
                </div>
                <div className="flex-1">
                  <Image src={marker.image} width={130} height={160} alt="" />
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
